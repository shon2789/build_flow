import React, { useEffect, useState } from 'react'
import { FaRegSave } from "react-icons/fa";
import { CgExport } from "react-icons/cg";
import Avatar, { ConfigProvider } from 'react-avatar';
import { useSelector } from 'react-redux';

export const UserDetails = ({ windowWidth }) => {

    const user = useSelector(state => state.userModule.loggedInUser)
    const [userStats, setUserStats] = useState({
        saved: 0,
        published: 0,
    })

    useEffect(() => {
        if (user) {
            const userSavedSites = user.webApps.reduce((acc, webApp) => {
                if (webApp.isPublished) acc.published++
                else acc.saved++

                return acc
            }, {
                saved: 0,
                published: 0,
            })
            setUserStats(userSavedSites)
        }
    }, [user])


    return (
        <div className="user-details">
            <div className="user-profile-img">
                <ConfigProvider colors={['#462446', '#b05f6d', '#eb6b56', '#ffc153', '#47b39d']}>
                    <Avatar title="Avatar" round={true} size={`${windowWidth < 1130 ? '80' : '150'}`} name={user ? user.fullname : "Guest"} />
                </ConfigProvider>
            </div>
            <div className="user-profile-content">
                <h3>{user ? user.fullname : "Guest"}</h3>
                {user &&
                    <h4>{user.username}</h4>
                }
                <div className="user-stats">
                    <div className="saved-sites">
                        <FaRegSave className="user-stats-icon" />
                        <h5>{userStats.saved} saved</h5>
                    </div>
                    <div className="published-sites">
                        <CgExport className="user-stats-icon" />
                        <h5>{userStats.published} published</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
