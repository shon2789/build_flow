import React from 'react'
import { UserDetails } from './UserDetails'
import { UserSiteList } from './UserSiteList'
import { UserTopNav } from './UserTopNav'
import Divider from "@material-ui/core/Divider";
export const UserSites = ({ windowWidth }) => {
    return (
        <section className="user-sites">
            {(windowWidth < 1130) && <UserDetails />}
            {(windowWidth < 1130) && <Divider style={{ width: '100%' }} variant="fullWidth" />}

            <UserTopNav />
            <UserSiteList />
        </section>
    )
}
