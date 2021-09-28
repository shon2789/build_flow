import { Link } from "react-router-dom"
import { Footer } from "./Footer"
import { HomePageSlider } from "./HomePageSlider"


export const HomePageTemplates = ({ windowWidth }) => {


    return (
        <section id="home-page-templates" className="home-page-templates-container">
            <div className="home-page-templates-top-container">
                <div className="home-page-templates-txt-container">
                    <h1 className="home-page-templates-title">Templates</h1>
                    <h3 className="home-page-templates-sub-title">Choose from our customizable website templates</h3>
                </div>
                <div className="home-page-slider-container">
                    <HomePageSlider windowWidth={windowWidth} />
                </div>
                <Link to="/template"><div className="check-out-btn">Show more</div></Link>
            </div>

            <Footer />
        </section>
    )
}