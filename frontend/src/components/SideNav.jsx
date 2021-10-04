import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { BiLogOut } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import { userService } from '../services/user.service';
import { setUser } from '../store/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { Screen } from './Screen';
import { AuthModal } from './AuthModal';
import usePortal from 'react-useportal'
import { store } from 'react-notifications-component';



export const SideNav = () => {

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const user = useSelector(state => state.userModule.loggedInUser)
    const { Portal } = usePortal()
    const dispatch = useDispatch()

    const onLogOut = async () => {
        await userService.logout()
        dispatch(setUser())

        store.addNotification({
            message: "Logged out Successfully!",
            type: "default",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__backInRight"],
            animationOut: ["animate__animated", "animate__backOutRight"],
            dismiss: {
                duration: 2000,
                onScreen: true
            }
        });
        onToggleAuthModal(false)
    }

    const onToggleAuthModal = (boolean) => {
        setIsAuthModalOpen(boolean)
    }

    //Change user profile icon to green when logged in
    let style;
    if (user) {
        style = {
            color: '#98FB98'
        }
    } else {
        style = {
            color: '#b4b4b4	'
        }
    }

    return (
        <>
            <Portal>
                <Screen isOpen={isAuthModalOpen} exitScreen={onToggleAuthModal} />
                {isAuthModalOpen &&
                    <AuthModal onToggleAuthModal={onToggleAuthModal} />
                }
            </Portal>

            <div className="side-nav">
                <div className="side-nav-icons-container">
                    <Link to="/"><div className="icon-btn icon-home"><Tooltip type="button" title="Home" arrow placement="right"><div><IoHome /></div></Tooltip></div></Link>
                    <Link to="/template"> <Tooltip className="test-tooltip" title="Templates" arrow placement="right"><div><HiTemplate className="icon-btn" /></div></Tooltip></Link>
                    <Link to="/user" style={style} >  <Tooltip type="button" title="Profile" arrow placement="right"><div className="user-profile-side-nav-container"><FaUser className="icon-btn" /></div></Tooltip>  </Link>
                </div>
                <div className="side-nav-bottom-icons" >
                    {user &&
                        <Tooltip type="button" title="Logout" arrow placement="right"><div onClick={onLogOut}><BiLogOut className="icon-btn" /></div></Tooltip>
                    }
                    {!user &&
                        <Tooltip type="button" title="Login / Signup" arrow placement="right"><div onClick={() => onToggleAuthModal(true)}><BiLogIn className="icon-btn" /></div></Tooltip>
                    }
                </div>
            </div >
        </>
    )
}
