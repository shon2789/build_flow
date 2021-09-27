import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";



export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="us-container">
                <div className="master-container">
                    <h3>Shon Shinkarenko</h3>
                    <div className="footer-icons-container">
                        <a href="https://github.com/shon2789" rel="noopener noreferrer" target="_blank" ><FiGithub className="icon-btn" /></a>
                        <a href="https://www.linkedin.com/in/shon-shinkarenko/" rel="noopener noreferrer" target="_blank" ><TiSocialLinkedin className="icon-btn" /></a>
                    </div>

                </div>
                <div className="master-container">
                    <h3>Jonathan Geiger</h3>
                    <div className="footer-icons-container">
                        <a href="https://github.com/geiger01" rel="noopener noreferrer" target="_blank" ><FiGithub className="icon-btn" /></a>
                        <a href="https://www.linkedin.com/in/jonathan-geiger/" rel="noopener noreferrer" target="_blank" ><TiSocialLinkedin className="icon-btn" /></a>
                    </div>
                </div>
                <div className="master-container">
                    <h3>Raz Abekasis</h3>
                    <div className="footer-icons-container">
                        <a href="https://github.com/RazAbk" rel="noopener noreferrer" target="_blank" ><FiGithub className="icon-btn" /></a>
                        <a href="https://www.linkedin.com/in/raz-abekasis/" rel="noopener noreferrer" target="_blank" ><TiSocialLinkedin className="icon-btn" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
