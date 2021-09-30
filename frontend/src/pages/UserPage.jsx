import React, { useState, useEffect } from 'react'
import { SideNav } from '../components/SideNav'
import { UserSideNav } from '../components/user/UserSideNav'
import { UserSites } from '../components/user/UserSites'
export const UserPage = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        })
        
        return () => {
            window.removeEventListener('resize', () => {console.log('remove user window width resize event listener')}, false)
        }
    }, [windowWidth])

    return (
        <section className="user-page">
            <SideNav />
            <UserSideNav />
            <UserSites windowWidth={windowWidth} />
        </section>
    )
}
