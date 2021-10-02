import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { SaveWebAppBtn } from './SaveWebAppBtn'
import { GiHamburgerMenu } from "react-icons/gi";
import { DynamicCmp } from '../../dynamic-cmps/DynamicCmp';
import ClickAwayListener from '@mui/material/ClickAwayListener';



export const WebAppContainer = ({ setCurrCmp, droppableId, webAppCmps, onToggleEditorMenu, editorWidth, onChangeEditorSize, onDeleteCmp, onSetCurrCmp, currCmp, onDuplicateCmp, onUpdateCmp, onSaveWebApp }) => {

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
                            < SaveWebAppBtn onSaveWebApp={onSaveWebApp} />
                            {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>
        </div>

    )
}
