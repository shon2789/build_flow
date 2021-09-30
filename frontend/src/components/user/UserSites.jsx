import React from 'react'
import { UserDetails } from './UserDetails'
import { UserSiteList } from './UserSiteList'
import { UserTopNav } from './UserTopNav'

export const UserSites = ({windowWidth}) => {
    return (
        <section className="user-sites">
            {(windowWidth < 1130 ) && <UserDetails /> }
            <UserTopNav />
            <UserSiteList />
        </section>
    )
}
