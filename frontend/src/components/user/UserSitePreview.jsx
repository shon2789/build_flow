import React from 'react'
import { Link } from 'react-router-dom'

export const UserSitePreview = ({ webApp }) => {

    return (
        <Link to={`/editor/${webApp._id}`}>
            <div className="user-site-preview" style={{ backgroundImage: `url('${webApp.image}')`, backgroundSize: '101%', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 0.2%' }}></div>
        </Link >
    )
}


