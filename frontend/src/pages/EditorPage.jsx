import React, { useEffect, useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import { utilService } from '../services/util.service';
import { cmpService } from '../services/cmp.service';
import { Screen } from '../components/Screen';
import { MainEditor } from '../components/editor/MainEditor';
import { WebAppContainer } from '../components/editor/WebAppContainer';
import { cloneDeep } from 'lodash';
import { clearLoadedWebApp, loadWebApp } from '../store/actions/web-app.action'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { webAppService } from '../services/web-app.service';
import { localStorageService } from '../services/storage.service';
import { AuthModal } from '../components/AuthModal';
import { setUser } from '../store/actions/user.action';
import { PromptDialog } from '../components/PromptDialog';
import { createJpegFromElement } from '../services/screen-shot.service'
import { removeMessage, alertMessage } from '../services/alert.service'
import { socketService } from '../services/socket.service';
import { uuid } from 'uuidv4';
import { UserCursor } from '../components/editor/UserCursor';

export const EditorPage = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isPromptDialogOpen, setIsPromptDialogOpen] = useState(false)
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

    const cmps = useSelector(state => state.cmpModule.cmps)
    const user = useSelector(state => state.userModule.loggedInUser)
    const dispatch = useDispatch()

    const [editHistory, setEditHistory] = useState([])
    const [isSavingHistory, setIsSavingHistory] = useState(true)

    const history = useHistory();
    const { webAppId } = useParams();
    const [isNewProject, setIsNewProject] = useState(webAppId === 'startNew' ? true : false)


    const [pointers, setPointers] = useState(JSON.parse(sessionStorage.getItem('pointers')) || [])

    // Set Users ID and Color for the UserCursor socket
    const myUserID = user?._id || uuid();
    const myUserName = user?.fullname || 'Guest'
    const userCursorColor = utilService.getRandomColor()



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
    const [roomId, setRoomId] = useState(uuid())

    // Seperating the dnd columns for convinience
    const dndAreas = Object.entries(columns)
    const editor = dndAreas[0]
    const editing = dndAreas[1]

    const isTouchDevice = () => {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }


    useEffect(() => {

        // Add socket listener
        socketService.setup()
        //Listening to 'webApp return' event
        if (!isTouchDevice()) {
            socketService.on('show-pointers', utilService.debounce(onUpdatePointers))
            socketService.on('remove-pointer', onDeletePointer)
            socketService.on('remove-all-pointers', deleteAllPointers)
        }
        socketService.on('webApp return', onUpdateSocketWebApp)
        socketService.on('user-left', (username) => {
            alertMessage(`${username ? username : 'User'} disconnected`, "danger", 2500)
        })

        if (!isTouchDevice()) {
            document.body.addEventListener('mousemove', emitMyMousePointer)
        }

        // Refresh - keep the same socket room id after refresh
        if (!webAppId && sessionStorage.getItem('roomId')) {
            socketService.emit("roomId", { roomId: `${sessionStorage.getItem('roomId')}`, myUserName })
        }

        if (webAppId) {
            // User get into another user room via URL (project)
            if (webAppId.startsWith('room')) {
                setRoomId(webAppId)
                socketService.emit("roomId", { roomId: webAppId, myUserName })
                sessionStorage.setItem("roomId", webAppId)
                // In case it's a regular URL (not socket) create a new socket room id
            } else {
                socketService.emit('roomId', ({ roomId: `room-${roomId}`, myUserName }))
                sessionStorage.setItem("roomId", `room-${roomId}`)
            }
        }
        socketService.on('user-joined', updateNewUser)
        return () => {

            if (!isTouchDevice()) {
                socketService.off('show-pointers')
                socketService.off('update-pointers')
                socketService.off('remove-pointer')
                document.body.removeEventListener('mousemove', emitMyMousePointer)
            }
            socketService.off('user-joined')
            socketService.off('user-left')
            socketService.off('webApp return')
            socketService.disconnect({ name: myUserName, id: myUserID })
        }
    }, [])

    const updateNewUser = (userName) => {
        const draftWebApp = localStorageService.loadFromStorage('draftWebApp')
        socketService.emit('webApp', draftWebApp)
        alertMessage(`${userName} has connected`, "info", 3000)
    }

    // Emit my mouse position and data to the other users
    const emitMyMousePointer = (ev) => {
        socketService.emit('update-pointers', { userId: myUserID, name: myUserName, color: userCursorColor, x: ev.pageX, y: ev.pageY })
    }

    // Update the pointers state from the data that received from backend
    const onUpdatePointers = ({ userId, name, color, x, y }) => {
        const copyPointers = JSON.parse(sessionStorage.getItem('pointers')) || []
        const pointerIdx = copyPointers.findIndex(pointer => pointer.userId === userId)

        // Not found, add new to the pointers array
        if (pointerIdx === -1) {
            copyPointers.push({ userId, name, color, x, y })
            // Update the array with the existing user's new data
        } else {
            copyPointers[pointerIdx].x = x;
            copyPointers[pointerIdx].y = y;
        }
        sessionStorage.setItem('pointers', JSON.stringify(copyPointers))
        setPointers(copyPointers)
    }

    const onUpdateSocketWebApp = (webApp) => {
        setColumns({
            ...columns,
            [editing[0]]: {
                name: 'Editing',
                items: webApp.children.map(section => { return { id: utilService.makeId(), cmp: section } })
            }
        })
    }

    const deleteAllPointers = () => {
        setPointers([])
        sessionStorage.removeItem('pointers')
    }

    //If some of the users in the room leave, their pointer will be deleted
    const onDeletePointer = (userId) => {
        const pointers = JSON.parse(sessionStorage.getItem('pointers'))
        if (!pointers) return
        const pointerIdx = pointers.findIndex(pointer => pointer.userId === userId)
        if (pointerIdx !== -1) {
            pointers.splice(pointerIdx, 1)
            setPointers(pointers)
            sessionStorage.setItem('pointers', JSON.stringify(pointers))
        }
    }


    // Initializing the webApp from the localStorage / loading from backend via ID / creates an empty webApp
    useEffect(() => {
        sessionStorage.removeItem('pointers')
        setPointers([])
        const onEditorMount = async () => {
            // If a webAppID was received in the URL params:
            if (webAppId) {
                setPointers([])
                // Case user clicked on start new project (Templates page)
                if (webAppId === 'startNew') {
                    setColumns({
                        ...columns,
                        [editing[0]]: {
                            name: 'Editing',
                            items: []
                        }
                    })
                    localStorageService.saveToStorage('draftWebApp', webAppService.createNewWebApp())
                    dispatch(clearLoadedWebApp())

                    // Case user loaded a Template / WebApp from user page
                } else if (!webAppId.startsWith('room')) {
                    sessionStorage.removeItem('pointers')
                    setPointers([])
                    const webApp = await dispatch(loadWebApp(webAppId))
                    let loadedWebApp;

                    // If the webApp is a template - Clone deep and change the id's
                    if (webApp.isTemplate) {
                        loadedWebApp = cloneDeep(webApp);
                        cmpService.changeCmpIds(loadedWebApp);
                        loadedWebApp.isTemplate = false
                        delete loadedWebApp._id
                        delete loadedWebApp.id
                        // If the webApp is a user's webApp (Editing)
                    } else {
                        // Make sure the webApp belongs to the logged in user
                        if (user) {
                            if (user.webApps.some(userWebApp => userWebApp._id === webApp._id)) {
                                loadedWebApp = webApp;
                                // If not authenticated: start new
                            } else {
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
                    socketService.emit('webApp', loadedWebApp)
                }
                // No webAppID was received in the URL params (Refresh)
            } else {
                const webApp = localStorageService.loadFromStorage('draftWebApp')
                let loadedWebApp

                // Make sure the webApp belongs to the logged in user
                if (webApp) {
                    if (webApp._id) {
                        if (user) {
                            if (user.webApps.some(userWebApp => userWebApp._id === webApp._id)) {
                                loadedWebApp = webApp
                            }
                        } else {
                            loadedWebApp = webAppService.createNewWebApp()
                        }
                    } else {
                        loadedWebApp = webApp
                    }
                    // If not authenticated: start new
                } else {
                    loadedWebApp = webAppService.createNewWebApp()
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
    useEffect(() => {
        const newUpdate = editing[1].items.map(obj => obj.cmp);

        if (isSavingHistory) {
            const currentHistory = cloneDeep(editHistory);
            const newNewUpdate = cloneDeep(newUpdate)
            currentHistory.push(newNewUpdate);
            setEditHistory(currentHistory)
        } else {
            setIsSavingHistory(true);
        }

        const draftWebApp = localStorageService.loadFromStorage('draftWebApp') || webAppService.createNewWebApp()
        draftWebApp.children = newUpdate;
        localStorageService.saveToStorage('draftWebApp', draftWebApp)
    }, [columns])


    const undo = () => {
        const draftWebApp = localStorageService.loadFromStorage('draftWebApp')

        if (editHistory.length <= 2) return
        if (draftWebApp.children.length === 0) return

        // After undo is done, it doesen't save to history
        setIsSavingHistory(false);

        const newEditHistory = cloneDeep(editHistory)
        newEditHistory.pop()

        setEditHistory(newEditHistory);
        const latestEdit = newEditHistory[newEditHistory.length - 1]

        // Items are not updating immediately, because state isn't updated fast enough
        setTimeout(() => {
            setColumns({
                ...columns,
                [editing[0]]: {
                    name: 'Editing',
                    items: latestEdit.map(section => { return { id: section.id, cmp: section } })
                }
            })
        }, 0)

        //Emit the undo changes to all the other users
        draftWebApp.children = latestEdit
        socketService.emit("webApp", draftWebApp)
    }


    // STATES
    const [isEditorMenuToggled, setIsEditorMenuToggled] = useState(false)
    const [editorWidth, setEditorWidth] = useState('100%')


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
            const draftWebApp = localStorageService.loadFromStorage('draftWebApp')
            draftWebApp.children = destItems.map(section => { return section.cmp })
            socketService.emit('webApp', draftWebApp)

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
            const draftWebApp = localStorageService.loadFromStorage('draftWebApp')
            draftWebApp.children = copiedItems.map(section => { return section.cmp })
            socketService.emit('webApp', draftWebApp)
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
        const draftWebApp = localStorageService.loadFromStorage('draftWebApp')
        draftWebApp.children = webAppCmps.map(section => { return section.cmp })
        socketService.emit('webApp', draftWebApp)
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
        const draftWebApp = localStorageService.loadFromStorage('draftWebApp')
        draftWebApp.children = webAppCmps.map(section => { return section.cmp })
        socketService.emit('webApp', draftWebApp)
    }

    const onUpdateCmp = (updatedProperty = null, type = null) => {

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

        cmpService.updateCmp(currCmpCopy, mappedWebAppCmps, propPath)
        setCurrCmp(currCmpCopy);

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
        const draftWebApp = localStorageService.loadFromStorage('draftWebApp')
        draftWebApp.children = webAppCmps.map(section => { return section.cmp })
        socketService.emit('webApp', draftWebApp)
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

    // Handles the prompt dialog modal
    // (When a user click the save webApp btn, prompt the user to enter the webApp title)
    const handlePromptDialog = async (webAppTitle) => {
        // Close the prompt modal
        setIsPromptDialogOpen(false);

        const elWebAppBuilder = document.querySelector('.web-app-builder')

        // First webApp save
        const webApp = await onSaveWebApp(webAppTitle)

        // Saved successfully msg
        alertMessage('Saved successfully!', 'success', 3000)


        //  Uploading msg
        const uploadingId = alertMessage('Uploading media to cloud...', 'info')


        const imageUrl = await createJpegFromElement(elWebAppBuilder, editorWidth)
        webApp.image = imageUrl;

        // Second webApp save after image uploaded to cloudinary
        const savedWebApp = await webAppService.save(webApp)
        localStorageService.saveToStorage('draftWebApp', savedWebApp)

        dispatch(setUser())
        removeMessage(uploadingId)

        // Success msg
        alertMessage('Your project is ready to view!', 'success', 3000)

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
        handleSave,
        isNewProject
    }

    const mainEditorProps = {
        windowWidth,
        onChangeEditorSize,
        editorWidth,
        onToggleEditorMenu,
        droppableId: editor[0],
        onPublishWebApp,
        undo
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
            <PromptDialog handleDialog={handlePromptDialog} open={isPromptDialogOpen} />
            {pointers.map(pointer => <UserCursor key={pointer.userId} pointer={pointer} />)}
        </>
    )
}

