import React from 'react'
import { UserDetails } from './UserDetails'


export const UserSideNav = () => {
    return (
        <div className="user-side-nav">
            <div className="top-user-side-nav-div">
                <h4>Your Profile</h4>
            </div>
            <UserDetails />
        </div>
    )
}
