import React from 'react'
import { Link } from "react-router-dom";

export const TemplatePreview = ({template}) => {
    return (
        <Link to={`/editor/${template.id}`}>
        <div className="template-preview">
            <img style={{width: '100%', height: '70%'}} src={template.image} alt={template.title} />
            <div className="create-template-preview-lower">{template.title}</div>
        </div>
        </Link>
    )
}
