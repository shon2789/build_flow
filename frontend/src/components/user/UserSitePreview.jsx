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
            alertMessage('Project deleted', 'danger', 2500)
        } catch (err) {
            alertMessage('Something went wrong', 'danger', 2500)
        }
    }

    const onOpenPublished = () => {
        window.open(`/publish/${webApp._id}`)
    }

    return (
        <div ref={ref} className="user-site-preview" style={{ position: "relative", backgroundImage: `url('${webApp.image}')`, backgroundSize: '101%', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 0.2%' }}>

            {isToolBarToggle &&
                <>
                    <h3 className="user-site-name">{webApp.title}</h3>
                    <div className="user-element-tool-bar" >
                        {webApp.isPublished &&

                            <Tooltip title="Preview" arrow placement="top">
                                <div onClick={() => { onOpenPublished() }} className="element-tool">
                                    <ImEye className="edit-tool tool" />
                                </div>
                            </Tooltip>
                        }
                        <Tooltip title="Edit title" arrow placement="top">
                            <div className="element-tool ">
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
        </div >

    )
}


