import React, { useEffect } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { SaveWebAppBtn } from './SaveWebAppBtn'
import { GiHamburgerMenu } from "react-icons/gi";
import { DynamicCmp } from '../../dynamic-cmps/DynamicCmp';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useDispatch, useSelector } from 'react-redux';
import { clearLoadedWebApp } from '../../store/actions/web-app.action';



export const WebAppContainer = ({ setCurrCmp, droppableId, webAppCmps, onToggleEditorMenu, editorWidth, onChangeEditorSize, onDeleteCmp, onSetCurrCmp, currCmp, onDuplicateCmp, onUpdateCmp, onSaveWebApp, setIsPromptDialogOpen, setIsAuthModalOpen, handlePromptDialog, handleSave, isNewProject }) => {

    const dispatch = useDispatch()

    const loadedWebApp = useSelector(state => state.webAppModule.loadedWebApp)

    useEffect(() => {
        return () => {
            dispatch(clearLoadedWebApp())
        }
    }, [])

    //When clicking on anything other than the editable component
    const handleClickAway = (ev) => {
        if (ev.type === 'touchend') return
        setCurrCmp(null)
    };

    return (

        <div className="web-app-container">
            <GiHamburgerMenu onClick={() => onToggleEditorMenu(true)} className="editor-menu-hamburger" />
            <Droppable droppableId={droppableId} key={droppableId}>
                {provided => {
                    return (
                        <div style={{ width: `${editorWidth}` }} className="web-app-builder" provided={provided} {...provided.droppableProps}
                            ref={provided.innerRef}  >
                           
                            {(!loadedWebApp && isNewProject) ? 
                                <>
                                { webAppCmps.length === 0 &&
                                    
                                    <div className="drag-here-txt">
                                        <h1>
                                            Drop here and see the magic happen.
                                        </h1>
                                    </div>
                                }
                                </>
                                :
                                <>
                                {!loadedWebApp && 
                                    <div className="drag-here-txt">
                                        <h1>
                                            Loading...
                                        </h1>
                                    </div> 
                                }
                                </>
                            }

                            {webAppCmps.map((item, idx) => {
                                return (
                                    <Draggable key={item.id} draggableId={item.id} index={idx}>
                                        {provided => {
                                            return (
                                                <ClickAwayListener onClickAway={handleClickAway}>
                                                    <div className="draggable-div" ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <DynamicCmp cmp={item.cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} editorWidth={editorWidth} onChangeEditorSize={onChangeEditorSize} />
                                                    </div>
                                                </ClickAwayListener>
                                            )
                                        }}
                                    </Draggable>
                                )
                            })}
                            < SaveWebAppBtn setIsPromptDialogOpen={setIsPromptDialogOpen} setIsAuthModalOpen={setIsAuthModalOpen} onSaveWebApp={onSaveWebApp} editorWidth={editorWidth} handlePromptDialog={handlePromptDialog} handleSave={handleSave} />
                            {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>
        </div>

    )
}
