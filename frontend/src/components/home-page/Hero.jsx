import React from 'react'
import { Link } from 'react-router-dom'
import { SvgAnimation } from './SvgAnimation'

export const Hero = ({ windowWidth }) => {

    return (
        <div className="hero-container main-layout">
            <div className="hero-txt-container">
                <h1 className="hero-top-txt">We speak in &#60;code&#62; <br /> so you don't have to</h1>
                <h3 className="hero-sub-txt">Just drag&drop for your wish to come true</h3>
                <Link to="/template"><div className="get-started-btn-mobile">Get started</div></Link>
            </div>
            <SvgAnimation windowWidth={windowWidth} />
        </div>
    )
}