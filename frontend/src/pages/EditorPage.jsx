import React, { useEffect, useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import { utilService } from '../services/util.service';
import { cmpService } from '../services/cmp.service';
import { Screen } from '../components/Screen';
import { MainEditor } from '../components/editor/MainEditor';
import { WebAppContainer } from '../components/editor/WebAppContainer';
import { cloneDeep } from 'lodash';
import { loadWebApp } from '../store/actions/web-app.action'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { webAppService } from '../services/web-app.service';
import { localStorageService } from '../services/storage.service';
import { AuthModal } from '../components/AuthModal';
import { setUser } from '../store/actions/user.action';
import { PromptDialog } from '../components/PromptDialog';
import { createJpegFromElement } from '../services/screen-shot.service'
import { removeMessage, alertMessage } from '../services/alert.service'




// Draggable Components from backend, rendered into the accordion
export const EditorPage = () => {
    // const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isPromptDialogOpen, setIsPromptDialogOpen] = useState(false)
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    // const [dialogAns, setDialogAns] = useState(true)

    const cmps = useSelector(state => state.cmpModule.cmps)
    const loadedWebApp = useSelector(state => state.webAppModule.loadedWebApp)
    const user = useSelector(state => state.userModule.loggedInUser)
    const dispatch = useDispatch()

    const history = useHistory();
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

        const onEditorMount = async () => {

        // If a webAppID was received in the URL params:
        if(webAppId){
            // Case user clicked on start new project (Templates page)
            if(webAppId === 'startNew'){
                setColumns({
                    ...columns,
                    [editing[0]]: {
                        name: 'Editing',
                        items: []
                    }
                })
                localStorageService.saveToStorage('draftWebApp', webAppService.createNewWebApp())

            // Case user loaded a Template / WebApp from user page
            } else {
                const webApp = await dispatch(loadWebApp(webAppId))
                let loadedWebApp;

                // If the webApp is a template - Clone deep and change the id's
                if(webApp.isTemplate){
                    loadedWebApp = cloneDeep(webApp);
                    cmpService.changeCmpIds(loadedWebApp);
                    loadedWebApp.isTemplate = false
                    delete loadedWebApp._id
                    delete loadedWebApp.id
                // If the webApp is a user's webApp (Editing)
                } else{
                    // Make sure the webApp belongs to the logged in user
                    if(user){
                        if(user.webApps.some(userWebApp => userWebApp._id === webApp._id)){
                            loadedWebApp = webApp;
                        // If not authenticated: start new
                        } else{
                            loadedWebApp = webAppService.createNewWebApp();
                        }

                    }
                    
                }
                
                setColumns({
                    ...columns,
                    [editing[0]]: {
                        name: 'Editing',
                        items: loadedWebApp.children.map(section => { return { id: utilService.makeId(), cmp: section } })
                    }
                })

                localStorageService.saveToStorage('draftWebApp', loadedWebApp)
            }
        // No webAppID was received in the URL params (Refresh)
        } else {
            const webApp = localStorageService.loadFromStorage('draftWebApp')
            let loadedWebApp

            // If a webApp exists in the local storage - load it
            if(webApp){
                loadedWebApp = webApp;
            // Else - start a new project
            } else{
                loadWebApp = webAppService.createNewWebApp();
            }

            setColumns({
                ...columns,
                [editing[0]]: {
                    name: 'Editing',
                    items: loadedWebApp.children.map(section => { return { id: utilService.makeId(), cmp: section } })
                }
            })
            localStorageService.saveToStorage('draftWebApp', loadedWebApp)
            
        }

        }

        onEditorMount()

        // Delete remaining of URL params
        history.push('/editor')
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

    const resizeEditorWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    // Event listener for the window width
    useEffect(() => {
        window.addEventListener('resize', resizeEditorWidth)

        return () => {
            window.removeEventListener('resize', resizeEditorWidth);
        }
    }, [windowWidth])


    // Drag&Drop onDragEnd function, reordering the dragged elements and trigger other functions
    const onDragEnd = (result) => {
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
        setCurrCmp(null)
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

        let propPath = 'style';
        if (type === 'style') {
            if (editorWidth < 1130) propPath = 'style-tablet'
            if (editorWidth < 763) propPath = 'style-mobile'

            currCmpCopy.attributes[propPath] = updatedProperty;
        } else if (type === 'info') {
            propPath = 'info'
            currCmpCopy.info = updatedProperty;
        } else if (type === 'attributes') {
            propPath = 'attributes'
            currCmpCopy.attributes = updatedProperty;
        }

        setCurrCmp(currCmpCopy);
        cmpService.updateCmp(currCmpCopy, mappedWebAppCmps, propPath)

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

    // Saving the current webApp (from the local storage)
    const onSaveWebApp = async (webAppTitle = '') => {
        const webApp = localStorageService.loadFromStorage('draftWebApp')

        // Sets the webApp title from input / default (if it's a new webApp - has no _id)
        if (!webApp._id) {
            if (webAppTitle) {
                webApp.title = webAppTitle;
            } else {
                webApp.title = 'New project';
            }
        }

        const savedWebApp = await webAppService.save(webApp)
        localStorageService.saveToStorage('draftWebApp', savedWebApp)
        dispatch(setUser())

        // Todo: add a protection: when clicking the save button more than one, error occurs because no webApp is in the local storage
        // localStorageService.removeFromStorage('draftWebApp')//Delete!!!

        return savedWebApp;
    }

    const handleSave = (toPublish = false) => {
        // If no user is logged in (guest mode) display msg and open auth modal
        if (!user) {
            setIsAuthModalOpen(true)
            alertMessage('Login first', 'danger', 2500)
            return
        }

        // If a user is logged in, open the prompt dialog (ask for webApp title)
        const draftWebApp = localStorageService.loadFromStorage('draftWebApp')

        if (toPublish) {
            draftWebApp.isPublished = true
            localStorageService.saveToStorage('draftWebApp', draftWebApp)
        }

        // Only if a webApp in editing exists && the webApp has no id, ask the user to give a name
        if (draftWebApp) {
            if (!draftWebApp._id) {
                setIsPromptDialogOpen(true)
            } else {
                handlePromptDialog()
            }
        }

    }

    // Handles the dialog modal
    // (If a previous work is detected in the local storage, ask user if to continue or discard the data)
    // const handleDialog = (boolean) => {
    //     setIsDialogOpen(false)
    //     setDialogAns(boolean)
    // }

    // Handles the prompt dialog modal
    // (When a user click the save webApp btn, prompt the user to enter the webApp title)
    const handlePromptDialog = async (webAppTitle) => {
        // Close the prompt modal
        setIsPromptDialogOpen(false);

        // Todo: make a user msg service !
        const elWebAppBuilder = document.querySelector('.web-app-builder')
        const webApp = await onSaveWebApp(webAppTitle)
        // Saved successfully msg
        alertMessage('Saved successfully!', 'success', 3000)


        //  Uploading msg
        const uploadingId = alertMessage('Uploading media to cloud...', 'info')


        const imageUrl = await createJpegFromElement(elWebAppBuilder, editorWidth)
        webApp.image = imageUrl;

        const savedWebApp = await webAppService.save(webApp)
        localStorageService.saveToStorage('draftWebApp', savedWebApp)

        dispatch(setUser())
        removeMessage(uploadingId)

        // Success msg
        alertMessage('Your project is ready to view!', 'success', 3000)

        // })
    }

    const onPublishWebApp = async () => {
        const draftWebApp = localStorageService.loadFromStorage('draftWebApp')
        draftWebApp.isPublished = true
        const savedWebApp = await webAppService.save(draftWebApp, user ? false : true)
        localStorageService.saveToStorage('draftWebApp', savedWebApp)
        dispatch(setUser());
        window.open(`/publish/${savedWebApp._id}`, "_blank")
    }


    // If a webAppID is given in the url params, and no webApp has actually been loaded, return Loading modal
    if (webAppId && (!loadedWebApp || loadedWebApp.length === 0)) {
        return <div>Loading...</div>

    }


    const webAppContainerProps = {
        setIsPromptDialogOpen,
        setIsAuthModalOpen,
        setCurrCmp,
        editorWidth,
        onChangeEditorSize,
        onToggleEditorMenu,
        webAppCmps: editing[1].items,
        droppableId: editing[0],
        onDeleteCmp,
        onSetCurrCmp,
        onDuplicateCmp,
        currCmp,
        onUpdateCmp,
        onSaveWebApp,
        handlePromptDialog,
        handleSave
    }

    const mainEditorProps = {
        windowWidth,
        onChangeEditorSize,
        editorWidth,
        onToggleEditorMenu,
        droppableId: editor[0],
        onPublishWebApp
    }

    return (
        <>
            <DragDropContext onDragStart={result => onDragStart()} onDragEnd={result => onDragEnd(result)}>
                <main className="editor-page-container">
                    <Screen isOpen={isEditorMenuToggled} exitScreen={onToggleEditorMenu} />
                    <div className={`${isEditorMenuToggled ? 'side-editor-mobile-active' : ''} side-editor-container`}>
                        <MainEditor {...mainEditorProps} />
                    </div>
                    <WebAppContainer {...webAppContainerProps} />
                </main>
            </DragDropContext>
            {isAuthModalOpen &&
                <>
                    <AuthModal onToggleAuthModal={setIsAuthModalOpen} />
                    <Screen isOpen={isAuthModalOpen} exitScreen={setIsAuthModalOpen} />
                </>
            }
            {/* <AlertDialog handleDialog={handleDialog} open={isDialogOpen} /> */}
            <PromptDialog handleDialog={handlePromptDialog} open={isPromptDialogOpen} />
        </>
    )
}

