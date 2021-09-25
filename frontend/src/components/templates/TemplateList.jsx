import { SideNav } from "../SideNav"
import { TemplatePreview } from "./TemplatePreview"
import { BsPlusCircle } from "react-icons/bs";

export const TemplateList = () => {
    return (
        <section className="templates-list">
            <SideNav />

            <div className="templates-content-container">
                <h2 className="templates-page-title">Choose one and start building now!</h2>
                <div className="templates-preview-container">
                    <div className="create-template-preview">

                        <div className="create-template-preview-upper">
                            <BsPlusCircle />
                        </div>
                        <div className="create-template-preview-lower">Start a new project</div>
                    </div>
                    <TemplatePreview />
                    <TemplatePreview />
                    <TemplatePreview />
                    <TemplatePreview />
                </div>
            </div>
        </section>
    )
}
