import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../store/actions/user.action'
import { UserSitePreview } from './UserSitePreview'

export const UserSiteList = ({ user }) => {
    console.log(user)
    return (
        <main className="user-site-list">
            {user.webApps.length === 0 && <div>No websites to show</div>}
            {user.webApps.length > 0 && user.webApps.map(webApp => <UserSitePreview key={webApp._id} webApp={webApp} />)}
        </main>
    )
}
