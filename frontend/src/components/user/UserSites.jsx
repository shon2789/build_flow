import React from 'react'
import { UserDetails } from './UserDetails'
import { UserSiteList } from './UserSiteList'
import { UserTopNav } from './UserTopNav'

export const UserSites = () => {
    return (
        <section className="user-sites">
            <UserDetails />
            <UserTopNav />
            <UserSiteList />
        </section>
    )
}
