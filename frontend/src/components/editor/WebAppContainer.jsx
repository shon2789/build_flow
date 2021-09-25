import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { SaveWebAppBtn } from './SaveWebAppBtn'
import { GiHamburgerMenu } from "react-icons/gi";
import { DynamicCmp } from '../../dynamic-cmps/DynamicCmp';


export const WebAppContainer = ({ droppableId, itemsFromBackend, onToggleEditorMenu, editorWidth, onDeleteCmp, onSetCurrCmp, currCmp, onDuplicateCmp }) => {
    return (
        <div className="web-app-container">
            <GiHamburgerMenu onClick={() => onToggleEditorMenu(true)} className="editor-menu-hamburger" />
            <Droppable droppableId={droppableId} key={droppableId}>
                {provided => {
                    return (
                        <div style={{ width: `${editorWidth}` }} className="web-app-builder" provided={provided} {...provided.droppableProps}
                            ref={provided.innerRef}  >

                            {itemsFromBackend.map((item, idx) => {
                                return (
                                    <Draggable key={item.id} draggableId={item.id} index={idx}>
                                        {provided => {
                                            return (
                                                <div className="draggable-div" ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <DynamicCmp cmp={item.cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} />
                                                </div>
                                            )
                                        }}
                                    </Draggable>
                                )
                            })}
                            < SaveWebAppBtn />
                            {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>
        </div>
    )
}
