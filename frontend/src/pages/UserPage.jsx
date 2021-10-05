import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SideNav } from '../components/SideNav'
import { UserSideNav } from '../components/user/UserSideNav'
import { UserSites } from '../components/user/UserSites'
import { setUser } from '../store/actions/user.action'


export const UserPage = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [filterBy, setFilterBy] = useState('all');
    const user = useSelector(state => state.userModule.loggedInUser)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!user) {
            dispatch(setUser())
        }
    }, [user])

    const onWindowWidthResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', onWindowWidthResize)

        return () => {
            window.removeEventListener('resize', onWindowWidthResize)
        }
    }, [windowWidth])

    const filterUserSites = (filterBy = 'all') => {
        setFilterBy(filterBy)
    }


    return (
        <section className="user-page">
            <SideNav />
            <UserSideNav windowWidth={windowWidth} />
            <UserSites filterBy={filterBy} filterUserSites={filterUserSites} user={user} windowWidth={windowWidth} />
        </section>
    )
}
