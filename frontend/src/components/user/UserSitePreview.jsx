import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { ImEye } from "react-icons/im";
import { IoText } from "react-icons/io5";
import { webAppService } from '../../services/web-app.service';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/actions/user.action';
import { Tooltip } from '@material-ui/core';
import { alertMessage } from '../../services/alert.service'
import desktopSvg from "./../../assets/images/desktop.svg"
import { FiLink } from "react-icons/fi";
import { PromptDialog } from '../PromptDialog';



export const UserSitePreview = ({ webApp }) => {
    const [isPromptDialogOpen, setIsPromptDialogOpen] = useState(false)
    const [isToolBarToggle, setIsToolBarToggle] = useState(false)
    const dispatch = useDispatch()
    const ref = useRef()


    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [])


    const onToggleToolBar = (boolean) => {
        setIsToolBarToggle(boolean)
    }

    const handleClick = e => {
        if (ref.current.contains(e.target)) {
            // inside click
            onToggleToolBar(true)
            ref.current.classList.add("active")
            return;
        }
        // outside click 
        onToggleToolBar(false)
        ref.current.classList.remove("active")
    };

    const onDeleteWebApp = async () => {
        try {

            await webAppService.remove(webApp._id)
            await dispatch(setUser())
            alertMessage('Project deleted', 'danger', 2500)
        } catch (err) {
            alertMessage('Something went wrong', 'danger', 2500)
        }
    }

    const onOpenPublished = () => {
        window.open(`/publish/${webApp._id}`)
    }

    const onCopyUrlLink = () => {
        const el = document.createElement('input')
        el.value = `${window.location.href.split("user")[0]}publish/${webApp._id}`
        document.body.appendChild(el)
        el.select()
        document.execCommand("copy");
        document.body.removeChild(el)
        alertMessage("Copied to clipboard!", "info", 2000)
    }


    const handlePromptDialog = async (webAppTitle) => {
        console.log(webApp)
        try {
            // Close the prompt modal
            setIsPromptDialogOpen(false)
            webApp.title = webAppTitle

            const webApp = await webAppService.save(webApp)

            alertMessage('Title changed', 'success', 2000)
            dispatch(setUser())
        } catch {
            alertMessage('Something went wrong', 'danger', 2500)

        }
    }


    return (
        <>
            <div ref={ref} className="user-site-preview" style={{ position: "relative", backgroundImage: `url('${webApp.image}')`, backgroundSize: '101%', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 0.2%' }}>
                {!webApp.image &&
                    <img src={desktopSvg} style={{ width: "100%", height: "100%" }} alt={webApp.title} />
                }
                {isToolBarToggle &&
                    <>
                        <h3 className="user-site-name">{webApp.title}</h3>
                        <div className="user-element-tool-bar" >
                            {webApp.isPublished &&
                                <>
                                    <Tooltip title="Copy link" arrow placement="top">
                                        <div onClick={() => { onCopyUrlLink() }} className="element-tool">
                                            <FiLink className="edit-tool tool" />
                                        </div>
                                    </Tooltip>
                                    <Tooltip title="Preview" arrow placement="top">
                                        <div onClick={() => { onOpenPublished() }} className="element-tool">
                                            <ImEye className="edit-tool tool" />
                                        </div>
                                    </Tooltip>
                                </>
                            }
                            <Tooltip title="Edit title" arrow placement="top">
                                <div onClick={() => { setIsPromptDialogOpen(true) }} className="element-tool ">
                                    <IoText className="edit-tool tool" />
                                </div>
                            </Tooltip>
                            <Link to={`/editor/${webApp._id}`}>
                                <Tooltip title="Edit" arrow placement="top">
                                    <div className="element-tool">
                                        <FaRegEdit className="edit-tool tool" />
                                    </div>
                                </Tooltip>
                            </Link >
                            <Tooltip title="Delete" arrow placement="top">
                                <div onClick={onDeleteWebApp} className="element-tool ">
                                    <FaTrashAlt className="delete-tool tool" />
                                </div>
                            </Tooltip>
                        </div >
                    </>

                }
                <PromptDialog handleDialog={handlePromptDialog} open={isPromptDialogOpen} />
            </div >
        </>
    )
}


