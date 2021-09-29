import React from 'react'
import { IoHome } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';


export const SideNav = () => {
    return (
        <div className="side-nav">
            <div className="side-nav-icons-container">
                <Link to="/"><div className="icon-btn icon-home"><Tooltip type="button" title="Home" arrow placement="right"><div><IoHome /></div></Tooltip></div></Link>
                <Link to="/template"> <Tooltip className="test-tooltip" title="Templates" arrow placement="right"><div><HiTemplate className="icon-btn" /></div></Tooltip></Link>
                <Tooltip type="button" title="Profile" arrow placement="right"><div><FaUser className="icon-btn" /></div></Tooltip>
            </div>
        </div>
    )
}
