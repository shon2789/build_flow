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


export const SideNav = () => {

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const user = useSelector(state => state.userModule.loggedInUser)
    const dispatch = useDispatch()

    const onLogOut = async () => {
        await userService.logout()
        dispatch(setUser())
    }

    const onToggleAuthModal = (boolean) => {
        setIsAuthModalOpen(boolean)
    }


    return (
        <>
            <Screen isOpen={isAuthModalOpen} exitScreen={onToggleAuthModal} />
            {isAuthModalOpen &&
                <AuthModal setIsAuthModalOpen={setIsAuthModalOpen} />
            }

            <div className="side-nav">
                <div className="side-nav-icons-container">
                    <Link to="/"><div className="icon-btn icon-home"><Tooltip type="button" title="Home" arrow placement="right"><div><IoHome /></div></Tooltip></div></Link>
                    <Link to="/template"> <Tooltip className="test-tooltip" title="Templates" arrow placement="right"><div><HiTemplate className="icon-btn" /></div></Tooltip></Link>
                    <Link to="/user" >  <Tooltip type="button" title="Profile" arrow placement="right"><div><FaUser className="icon-btn" /></div></Tooltip>  </Link>
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
