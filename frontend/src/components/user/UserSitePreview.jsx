import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { webAppService } from '../../services/web-app.service';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/actions/user.action';
import { store } from 'react-notifications-component';
import { Tooltip } from '@material-ui/core';

export const UserSitePreview = ({ webApp }) => {

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
            store.addNotification({
                message: "Project deleted",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__backInRight"],
                animationOut: ["animate__animated", "animate__backOutRight"],
                dismiss: {
                    duration: 2500,
                    onScreen: true
                }
            });
        } catch (err) {
            store.addNotification({
                message: "Something went wrong, try again later...",
                type: "info",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__backInRight"],
                animationOut: ["animate__animated", "animate__backOutRight"],
                dismiss: {
                    duration: 2500,
                    onScreen: true
                }
            });
        }
    }

    return (
        <div ref={ref} className="user-site-preview" style={{ position: "relative", backgroundImage: `url('${webApp.image}')`, backgroundSize: '101%', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 0.2%' }}>
            <h2>{webApp.title}</h2>
            {isToolBarToggle &&
                <div className="user-element-tool-bar" >

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
            }
        </div >
    )
}


