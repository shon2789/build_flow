import React, { useEffect, useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import { utilService } from '../services/util.service';
import { cmpService } from '../services/cmp.service';
import { Screen } from '../components/Screen';
import { MainEditor } from '../components/editor/MainEditor';
import { WebAppContainer } from '../components/editor/WebAppContainer';
import { cloneDeep } from 'lodash';
import { loadCmps } from '../store/actions/cmp.action'
import { useDispatch, useSelector } from 'react-redux';
import { webAppService } from '../services/web-app.service';





// Draggable Components from backend, rendered into the accordion
export const EditorPage = () => {

    const dispatch = useDispatch()
    const cmps = useSelector(state => state.cmpModule.cmps)
    const [currWebApp, setCurrWebApp] = useState(null)


    useEffect(() => {
        webAppService.query()
            .then(webApp => {
                setCurrWebApp(webApp)
            })


    }, [])


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

    // STATES
    const [columns, setColumns] = useState(dndColumns);
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
    }, [windowWidth])

    // Dispatcher for loading the cmps
    useEffect(() => {
        dispatch(loadCmps())
    }, [columns])

    // Seperating the dnd columns for convinience
    const dndAreas = Object.entries(columns);
    const editor = dndAreas[0];
    const editing = dndAreas[1];

    // Drag&Drop onDragEnd function, reordering the dragged elements and trigger other functions
    const onDragEnd = async (result, columns, setColumns) => {
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

            saveWebApp(destItems)

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
        console.log(ev)

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

    const saveWebApp = (webApp) => {
        console.log(webApp, "webApp");
        webAppService.save(...webApp)
    }

    return (
        <DragDropContext onDragStart={onDragStart} onDragEnd={result => onDragEnd(result, columns, setColumns)}>
            <main className="editor-page-container">
                <Screen isOpen={isEditorMenuToggled} exitScreen={onToggleEditorMenu} />
                <div className={`${isEditorMenuToggled ? 'side-editor-mobile-active' : ''} side-editor-container`}>
                    <MainEditor windowWidth={windowWidth} onChangeEditorSize={onChangeEditorSize} editorWidth={editorWidth} onToggleEditorMenu={onToggleEditorMenu} droppableId={editor[0]} />
                </div>
                <WebAppContainer setCurrCmp={setCurrCmp} editorWidth={editorWidth} onToggleEditorMenu={onToggleEditorMenu} webAppCmps={editing[1].items} droppableId={editing[0]}
                    onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} currCmp={currCmp} onUpdateCmp={onUpdateCmp}
                />
            </main>
        </DragDropContext>
    )
}

