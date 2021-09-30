import React from 'react'
import { UserSiteList } from './UserSiteList'
import { UserTopNav } from './UserTopNav'

export const UserSites = () => {
    return (
        <section className="user-sites">
            <UserTopNav />
            <UserSiteList />
        </section>
    )
}
