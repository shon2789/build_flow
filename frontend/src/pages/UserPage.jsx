import React from 'react'
import { SideNav } from '../components/SideNav'
import { UserSideNav } from '../components/user/UserSideNav'
import { UserSites } from '../components/user/UserSites'
export const UserPage = () => {
    return (
        <section className="user-page">
            <SideNav />
            <UserSideNav />
            <UserSites />


        </section>
    )
}
