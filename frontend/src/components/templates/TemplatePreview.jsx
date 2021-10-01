import React from 'react'
import { Link } from "react-router-dom";

export const TemplatePreview = ({ template }) => {

    console.log(template, 'template');
    return (
        <Link to={`/editor/${template._id}`}>
            <div className="template-preview">
                <img className="create-template-preview-img" src={template.image} alt={template.title} />
                <div className="create-template-preview-lower">{template.title}</div>
            </div>
        </Link>
    )
}
