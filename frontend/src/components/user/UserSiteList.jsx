import React from 'react'
import { UserSitePreview } from './UserSitePreview'

export const UserSiteList = ({ user, filterBy }) => {

    return (
        <>
            {!user || user.webApps.length === 0 && <div style={{ display: "flex", alignItems: "center" }}>No websites to show</div>}
            <main className="user-site-list">
                {(user?.webApps.length > 0 && filterBy === 'all') && user.webApps.map(webApp => <UserSitePreview key={webApp._id} webApp={webApp} />)}
                {(user?.webApps.length > 0 && filterBy === 'saved') && user.webApps.map(webApp => {
                    if (!webApp?.isPublished) return <UserSitePreview key={webApp._id} webApp={webApp} />
                }
                )}
                {(user?.webApps.length > 0 && filterBy === 'published') && user.webApps.map(webApp => {
                    if (webApp?.isPublished) return <UserSitePreview key={webApp._id} webApp={webApp} />
                }
                )}
            </main>
        </>
    )
}
