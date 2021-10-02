import React from 'react'
import { UserSitePreview } from './UserSitePreview'

export const UserSiteList = ({ user }) => {

    return (
        <>
            {!user || user.webApps.length === 0 && <div style={{ display: "flex", alignItems: "center" }}>No websites to show</div>}
            <main className="user-site-list">
                {user?.webApps.length > 0 && user.webApps.map(webApp => <UserSitePreview key={webApp._id} webApp={webApp} />)}
            </main>
        </>
    )
}
