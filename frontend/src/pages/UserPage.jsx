import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SideNav } from '../components/SideNav'
import { UserSideNav } from '../components/user/UserSideNav'
import { UserSites } from '../components/user/UserSites'
import { setUser } from '../store/actions/user.action'


export const UserPage = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const user = useSelector(state => state.userModule.loggedInUser)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!user) {
            dispatch(setUser())
        }
    }, [user])

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        })

        return () => {
            window.removeEventListener('resize', () => { console.log('remove user window width resize event listener') }, false)
        }
    }, [windowWidth])


    return (
        <section className="user-page">
            <SideNav />
            <UserSideNav windowWidth={windowWidth} />
            <UserSites user={user} windowWidth={windowWidth} />
        </section>
    )
}
