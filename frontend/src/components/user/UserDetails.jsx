import React from 'react'
import { FaRegSave } from "react-icons/fa";
import { CgExport } from "react-icons/cg";

export const UserDetails = () => {
    return (
        <div className="user-details">
            <div className="user-profile-img"></div>
            <div className="user-profile-content">
                <h3>Full Name</h3>
                <h4>Nick Name</h4>

                <div className="user-stats">

                    <div className="saved-sites">

                        <FaRegSave className="user-stats-icon" />
                        <h5>4 saved</h5>
                    </div>
                    <div className="published-sites">
                        <CgExport className="user-stats-icon" />
                        <h5>3 published</h5>

                    </div>
                </div>
            </div>
        </div>
    )
}
