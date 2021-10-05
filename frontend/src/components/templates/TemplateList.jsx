import { SideNav } from "../SideNav"
import { TemplatePreview } from "./TemplatePreview"
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export const TemplateList = ({ templates }) => {

    const miniTemplates = templates.map(template => {
        return {
            _id: template._id,
            title: template.title,
            image: template.image,
        }
    })


    return (
        <section className="templates-list">
            <SideNav />
            <div className="templates-content-container">
                <h2 className="templates-page-title">Choose one and start building now!</h2>
                <div className="templates-preview-container">
                    <Link to={`/editor/startNew`} >
                        <div className="create-template-preview">
                            <div className="create-template-preview-upper">
                                <BsPlusCircle />
                            </div>
                            <div className="create-template-preview-lower">Start a new project</div>
                        </div>
                    </Link>
                    {miniTemplates && miniTemplates.map((template, idx) => {
                        return <TemplatePreview key={`${template.id}${idx}`} template={template} />
                    })}
                </div>
            </div>
        </section>
    )
}
