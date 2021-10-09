import React from "react"
import Animation from '../../assets/animations/animation.webm'

export const SvgAnimation = ({ windowWidth }) => {

    const getWidth = () => {
        if (windowWidth < 450) {
            return windowWidth + 'px'
        }
        else if (windowWidth > 1920) {
            return 1000 + 'px'
        } else if (window.innerHeight < 800) {
            return (windowWidth / 2.2) + 'px'
        } else {
            if (windowWidth < 850 && windowWidth > 450) {
                return (windowWidth / 1.5) + 'px'
            }
            else {
                return ((windowWidth / 1.8) + 'px')
            }
        }
    }



    return (
        <div className="home-page-main-svg-container">
            <video width={getWidth()} autoPlay={true} loop={true} muted={true} playsInline={true} poster="https://secretstache-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/on-demand-web-development-1.svg" className="html-video loaded">
                <img src="https://secretstache-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/on-demand-web-development-1.svg" alt="" />
                <source src={Animation} type="video/mp4" />
            </video>
        </div>
    )

}