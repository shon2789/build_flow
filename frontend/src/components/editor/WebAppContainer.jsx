import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { SaveWebAppBtn } from './SaveWebAppBtn'
import { GiHamburgerMenu } from "react-icons/gi";


export const WebAppContainer = ({ droppableId, itemsFromBackend, onToggleEditorMenu, editorWidth }) => {
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
                                                    {item.content}
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
