import React from 'react'

import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineTablet } from "react-icons/ai";
import { EditorAccordion } from './EditorAccordion';
import { SideNav } from '../SideNav';
import { HiUserGroup } from "react-icons/hi";
import { workTogetherMessage } from '../../services/alert.service';
import { BsSkipBackwardFill } from "react-icons/bs";
import { Tooltip } from '@material-ui/core';



export const MainEditor = ({ droppableId, onChangeEditorSize, windowWidth, onPublishWebApp, undo }) => {


    const onCopyRoomIdUrl = () => {
        const el = document.createElement('input')
        const roomId = sessionStorage.getItem("roomId")
        el.value = `${window.location.href}/${roomId}`
        document.body.appendChild(el)
        el.select()
        document.execCommand("copy");
        document.body.removeChild(el)
        workTogetherMessage()
    }

    return (
        <div className="main-editor ">
            <SideNav />
            <div className="editor-section-container">
                <div className="top-editor-toolbar">
                    <h5>Drag from here</h5>
                    <Tooltip title="Undo" arrow placement="right">
                        <div onClick={undo} className="undo-icon">
                            <BsSkipBackwardFill />
                        </div>
                    </Tooltip>

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
                    <div onClick={onCopyRoomIdUrl} className="work-together-container">
                        <h3 className="work-together-link">Work together</h3>
                        <HiUserGroup className="work-together-icon" />
                    </div>
                    <div onClick={() => { onPublishWebApp() }} className="editor-publish-btn">Publish</div>
                </div>
            </div>
        </div >
    )
}
