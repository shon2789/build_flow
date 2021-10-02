import React from 'react'
import { Link } from 'react-router-dom'

export const UserSitePreview = ({ webApp }) => {

    return (
        <Link to={`/editor/${webApp._id}`}>
            <div className="user-site-preview">
                <img className="create-template-preview-img" src={webApp.image} alt={webApp.title} />
                <div className="create-template-preview-lower">{webApp.title}</div>
            </div>
        </Link>
    )
}


