import React, { useEffect, useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import { utilService } from '../services/util.service';
import { cmpService } from '../services/cmp.service';
import { Screen } from '../components/Screen';
import { MainEditor } from '../components/editor/MainEditor';
import { WebAppContainer } from '../components/editor/WebAppContainer';
import { cloneDeep } from 'lodash';
import { loadCmps } from '../store/actions/cmp.action'
import { loadWebApp, clearCurrWebApp, setWebApp } from '../store/actions/web-app.action'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { webAppService } from '../services/web-app.service';


// Draggable Components from backend, rendered into the accordion
export const EditorPage = () => {

    const dispatch = useDispatch()
    const cmps = useSelector(state => state.cmpModule.cmps)
    const currWebApp = useSelector(state => state.webAppModule.currWebApp)

    const { webAppId } = useParams();

    // Drag&Drop columns (Editor components && webApp builder)
    const dndColumns = {
        [utilService.makeId()]: {
            name: "Editor",
            items: cmps
        },
        [utilService.makeId()]: {
            name: "Editing",
            items: []
        }
    };

    const [columns, setColumns] = useState(dndColumns)

    // Seperating the dnd columns for convinience
    const dndAreas = Object.entries(columns)
    const editor = dndAreas[0]
    const editing = dndAreas[1]


    useEffect(() => {
        const draftWebApp = JSON.parse(localStorage.getItem('draftWebApp'))
        if(draftWebApp){
            setWebApp(draftWebApp)
            setColumns({
                ...columns,
                [editing[0]]: {
                    name: 'Editing',
                    items: draftWebApp.children.map(section => { return { id: section.id, cmp: section } })
                }
            })
        } else if(webAppId) {
            if (currWebApp.length === 0) {
                dispatch(loadWebApp(webAppId))
                .then((webApp) => {
                    const clonnedWebApp = cloneDeep(webApp);
                    cmpService.changeCmpIds(clonnedWebApp);
                    setColumns({
                        ...columns,
                        [editing[0]]: {
                            name: 'Editing',
                            items: clonnedWebApp.children.map(section => { return { id: utilService.makeId(), cmp: section } })
                        }
                    })
            })
            }
        } else {
            setColumns({
                ...columns,
                [editing[0]]: {
                    name: 'Editing',
                    items: []
                }
            })
        }
        return () => {
            dispatch(clearCurrWebApp())
        }
    }, [])


    // STATES

    const [isEditorMenuToggled, setIsEditorMenuToggled] = useState(false)
    const [editorWidth, setEditorWidth] = useState('100%')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    //Cmp States
    const [currCmp, setCurrCmp] = useState(null)


    // Event listener for the window width
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })

        return () => {
            window.removeEventListener('resize', () => {console.log('remove editor page window width resize event listener')}, false);
        }
    }, [windowWidth])

    // Dispatcher for loading the cmps
    useEffect(() => {
        dispatch(loadCmps())

    }, []) //Deleted listening to columns, please notice (delete later)
    
    useEffect(() => {
        
        return () => {
            const isSmart = window.confirm('Save your website U stupid russian??') // Dev only
            if(isSmart) {
                webAppService.save(JSON.parse(localStorage.getItem('draftWebApp')))
                localStorage.removeItem('draftWebApp')
            }

            localStorage.removeItem('draftWebApp')
        }
    }, []) 



    const _createNewWebApp = () => {
        return  {
            "image": "",
            "title": "new project",
            "isTemplate": false,
            "isPublished": false,
            "children": []
          }
    }
    const history = useHistory();

    // Save changes to the local storage 
    // Todo: make Undo feature for WebApp editing
    useEffect(() => {
        const draftWebApp = JSON.parse(localStorage.getItem('draftWebApp')) || _createNewWebApp()

        draftWebApp.children = editing[1].items.map(obj => obj.cmp);

        localStorage.setItem('draftWebApp', JSON.stringify(draftWebApp));

        history.push(`/editor`)

    }, [columns]) 

    


    // Drag&Drop onDragEnd function, reordering the dragged elements and trigger other functions
    const onDragEnd = async (result, setState) => {
       
        if (!result.destination) return;




        const { source, destination } = result;

        // Dragging from editor to the page editing
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const cmp = await cmpService.deepCloneCmp(result.draggableId)



            destItems.splice(destination.index, 0, { id: utilService.makeId(), cmp });
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });


            // Reordering items in the page editing
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }

    };

    // Toggle editor menu on moblie
    const onToggleEditorMenu = (boolean) => {
        setIsEditorMenuToggled(boolean)
    }

    const onDragStart = () => {
        onToggleEditorMenu(false)
    }

    const onChangeEditorSize = (width) => {
        setEditorWidth(width)
    }

    //Editor functions:
    const onDeleteCmp = (cmpId) => {
        const webAppCmps = editing[1].items;
        const mappedWebAppCmps = webAppCmps.map(section => section.cmp)

        if (currCmp) {
            const idx = mappedWebAppCmps.findIndex(section => currCmp.id === section.id)
            if (idx === -1) {
                cmpService.deleteCmp(cmpId, mappedWebAppCmps)
            } else {
                webAppCmps.splice(idx, 1)
            }
        } else {
            cmpService.deleteCmp(cmpId, mappedWebAppCmps)
        }
        setColumns({
            ...columns,
            [editing[0]]: {
                ...webAppCmps,
                items: webAppCmps
            }
        })
    }

    const onSetCurrCmp = (ev, cmp) => {
        ev.stopPropagation()
        setCurrCmp(cmp)
    }

    const onDuplicateCmp = (element) => {
        const webAppCmps = editing[1].items;
        const mappedWebAppCmps = webAppCmps.map(section => section.cmp)
        cmpService.getParentElement(element, mappedWebAppCmps, webAppCmps)

        setColumns({
            ...columns,
            [editing[0]]: {
                ...webAppCmps,
                items: webAppCmps
            }
        })
    }

    const onUpdateCmp = (updatedProperty, type) => {

        const webAppCmps = editing[1].items;

        // Extracting the components from the dnd column object
        const mappedWebAppCmps = webAppCmps.map(section => section.cmp)
        const currCmpCopy = cloneDeep(currCmp);

        if (type === 'style') {
            currCmpCopy.attributes.style = updatedProperty;
        } else if (type === 'info') {
            currCmpCopy.info = updatedProperty;
        }

        setCurrCmp(currCmpCopy);
        cmpService.updateCmp(currCmpCopy, mappedWebAppCmps, type)

        webAppCmps.forEach((item, idx) => {
            item.cmp = mappedWebAppCmps[idx]
        })

        setColumns({
            ...columns,
            [editing[0]]: {
                ...webAppCmps,
                items: webAppCmps
            }
        })
    }


    if (webAppId && (!currWebApp || currWebApp.length === 0)) {
        return <h1>loading</h1>
    }

    return (
        <DragDropContext onDragStart={result => onDragStart()} onDragEnd={result => onDragEnd(result)}>
            <main className="editor-page-container">
                <Screen isOpen={isEditorMenuToggled} exitScreen={onToggleEditorMenu} />
                <div className={`${isEditorMenuToggled ? 'side-editor-mobile-active' : ''} side-editor-container`}>
                    <MainEditor windowWidth={windowWidth} onChangeEditorSize={onChangeEditorSize} editorWidth={editorWidth} onToggleEditorMenu={onToggleEditorMenu} droppableId={editor[0]} />
                </div>
                <WebAppContainer setCurrCmp={setCurrCmp} editorWidth={editorWidth} onChangeEditorSize={onChangeEditorSize} onToggleEditorMenu={onToggleEditorMenu} webAppCmps={editing[1].items} droppableId={editing[0]}
                    onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} currCmp={currCmp} onUpdateCmp={onUpdateCmp}
                />
            </main>
        </DragDropContext>
    )
}

