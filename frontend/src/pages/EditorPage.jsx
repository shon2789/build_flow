import React, { useEffect, useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import { utilService } from '../services/util.service';
import { cmpService } from '../services/cmp.service';
import { Screen } from '../components/Screen';
import { MainEditor } from '../components/editor/MainEditor';
import { WebAppContainer } from '../components/editor/WebAppContainer';
import { cloneDeep } from 'lodash';
import { loadWebApp, clearLoadedWebApp } from '../store/actions/web-app.action'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { webAppService } from '../services/web-app.service';
import { localStorageService } from '../services/storage.service';
import { AuthModal } from '../components/AuthModal';
import { setUser } from '../store/actions/user.action';




// Draggable Components from backend, rendered into the accordion
export const EditorPage = () => {

    const history = useHistory();
    const dispatch = useDispatch()
    const cmps = useSelector(state => state.cmpModule.cmps)
    const loadedWebApp = useSelector(state => state.webAppModule.loadedWebApp)
    const user = useSelector(state => state.userModule.loggedInUser)
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

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


    // Initializing the webApp from the localStorage / loading from backend via ID / creates an empty webApp
    useEffect(() => {
        // If a draft exist in the local storage
        const draftWebApp = localStorageService.loadFromStorage('draftWebApp')
        if (draftWebApp && !webAppId) {
            const ans = window.confirm('Continue from where you left?')
            if (ans) {
                setColumns({
                    ...columns,
                    [editing[0]]: {
                        name: 'Editing',
                        items: draftWebApp.children.map(section => { return { id: section.id, cmp: section } })
                    }
                })
            } else {
                localStorageService.removeFromStorage('draftWebApp')
                setColumns({
                    ...columns,
                    [editing[0]]: {
                        name: 'Editing',
                        items: []
                    }
                })
            }
            // If a webAppId has been passed through the query params
        } else if (webAppId) {
            if (loadedWebApp.length === 0) {
                dispatch(loadWebApp(webAppId))
                    .then((webApp) => {
                        let clonnedWebApp = webApp;
                        if (webApp.isTemplate) {
                            clonnedWebApp = cloneDeep(webApp);
                            cmpService.changeCmpIds(clonnedWebApp);
                        } else {
                            localStorageService.saveToStorage('draftWebApp', webApp)
                        }
                        history.push(`/editor`)
                        setColumns({
                            ...columns,
                            [editing[0]]: {
                                name: 'Editing',
                                items: clonnedWebApp.children.map(section => { return { id: utilService.makeId(), cmp: section } })
                            }
                        })
                    })
            }
            // If initializing a new project
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
            dispatch(clearLoadedWebApp())
        }
    }, [])


    // Save changes to the local storage for every change in the DnD columns
    // Todo: make Undo feature for WebApp editing
    useEffect(() => {
        const draftWebApp = localStorageService.loadFromStorage('draftWebApp') || webAppService.createNewWebApp()
        draftWebApp.children = editing[1].items.map(obj => obj.cmp);
        localStorageService.saveToStorage('draftWebApp', draftWebApp)

    }, [columns])


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
            window.removeEventListener('resize', () => { console.log('remove editor page window width resize event listener') }, false);
        }
    }, [windowWidth])

    // Dispatcher for loading the cmps
    // reminder: Raz Deleted listening to columns, please notice (delete later)

    // On component unmount - ask the user weather or not to save the project
    // Todo: make a great UI

    // useEffect(() => {

    //     return () => {
    //         const isSmart = window.confirm('Save your website ?') // Dev only
    //         if (isSmart) {
    //             const draft = localStorageService.loadFromStorage('draftWebApp')
    //             webAppService.save(draft)
    //         }

    //         localStorageService.removeFromStorage('draftWebApp')
    //     }
    // }, [])

    // Drag&Drop onDragEnd function, reordering the dragged elements and trigger other functions
    const onDragEnd = (result, setState) => {
        if (!result.destination) return;

        const { source, destination } = result;

        // Dragging from editor to the page editing
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];

            const cmp = cmps.find(cmp => cmp.id === result.draggableId)
            const clonedCmp = cmpService.deepCloneCmp(cmp)

            destItems.splice(destination.index, 0, { id: utilService.makeId(), cmp: clonedCmp });
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

    const onSaveWebApp = async () => {
        if (!user) {
            setIsAuthModalOpen(true)
            //TODO: add alert
            return
        }
        //TODO: Saved successfully
        const webApp = localStorageService.loadFromStorage('draftWebApp')
        await webAppService.save(webApp)
        dispatch(setUser())
        localStorageService.removeFromStorage('draftWebApp')
    }





    if (webAppId && (!loadedWebApp || loadedWebApp.length === 0)) {
        return <h1>loading</h1>
    }

    return (
        <>
            <DragDropContext onDragStart={result => onDragStart()} onDragEnd={result => onDragEnd(result)}>
                <main className="editor-page-container">
                    <Screen isOpen={isEditorMenuToggled} exitScreen={onToggleEditorMenu} />
                    <div className={`${isEditorMenuToggled ? 'side-editor-mobile-active' : ''} side-editor-container`}>
                        <MainEditor windowWidth={windowWidth} onChangeEditorSize={onChangeEditorSize} editorWidth={editorWidth} onToggleEditorMenu={onToggleEditorMenu} droppableId={editor[0]} />
                    </div>
                    <WebAppContainer setCurrCmp={setCurrCmp} editorWidth={editorWidth} onChangeEditorSize={onChangeEditorSize} onToggleEditorMenu={onToggleEditorMenu} webAppCmps={editing[1].items} droppableId={editing[0]}
                        onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} currCmp={currCmp} onUpdateCmp={onUpdateCmp} onSaveWebApp={onSaveWebApp}
                    />
                </main>
            </DragDropContext>
            {isAuthModalOpen &&
                <>
                    <AuthModal />
                    <Screen isOpen={isAuthModalOpen} exitScreen={setIsAuthModalOpen} />
                </>
            }
        </>
    )
}

