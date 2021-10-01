import React from 'react'

import { IoMdAddCircle } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineTablet } from "react-icons/ai";
import { EditorAccordion } from './EditorAccordion';
import { SideNav } from '../SideNav';



export const MainEditor = ({ droppableId, onChangeEditorSize, windowWidth }) => {
    return (
        <div className="main-editor ">
            <SideNav />
            <div className="editor-section-container">
                <div className="top-editor-toolbar">
                    <h5>Drag from here</h5>
                </div>

                <div className="editor-elements-container">
                    <EditorAccordion droppableId={droppableId} />
                </div>
                <div className="bottom-editor-toolbar">
                    <div className="bottom-editor-icons-container">
                        <RiComputerLine onClick={() => onChangeEditorSize('100%')} className="icon-btn computer" />
                        <AiOutlineTablet onClick={() => onChangeEditorSize(windowWidth < 1440 ? '100%' : '768px')} className="icon-btn tablet" />
                        <IoPhonePortraitOutline onClick={() => onChangeEditorSize('375px')} className="icon-btn phone" />
                    </div>
                    <div className="editor-publish-btn">Publish</div>
                </div>


            </div>
        </div>
    )
}
