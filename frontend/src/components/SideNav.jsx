import React from 'react'
import { IoHome } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const SideNav = () => {
    return (
        <div className="side-nav">
            <div className="side-nav-icons-container">
                <Link to="/"><IoHome className="icon-btn" /></Link>
                <HiTemplate className="icon-btn" />
                <FaUser className="icon-btn" />
            </div>
        </div>
    )
}