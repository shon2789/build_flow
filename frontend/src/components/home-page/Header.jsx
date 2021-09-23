import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";


export const Header = ({ isMenuToggled, toggleMenu }) => {

    return (
        <header>
            <div className="header-container main-layout">
                <Link to="/"><div className="logo">&#60;BuildFlow /&#62;</div></Link>
                <nav className={`${isMenuToggled ? 'mobile-nav-bar-active' : ''} nav-container `}>
                    <div onClick={() => toggleMenu(false)} className="nav-btn-container"><NavLink className="header-home-btn" exact to="/">Home</NavLink></div>
                    <div onClick={() => toggleMenu(false)} className="nav-btn-container"><a className="header-hww-btn" href="#how-we-work">How we work</a></div>
                    <div onClick={() => toggleMenu(false)} className="nav-btn-container"><a className="header-templates-btn" href="#home-page-templates">Templates</a></div>
                </nav>
                <Link to="/editor"> <div className="get-started-btn">Get started</div></Link>
                <GiHamburgerMenu onClick={() => toggleMenu(true)} className="header-hamburger-btn" />
            </div>
        </header>
    )
}

