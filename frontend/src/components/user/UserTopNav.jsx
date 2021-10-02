import React from 'react'

export const UserTopNav = ({ filterUserSites, filterBy }) => {
    return (
        <div className="user-top-nav">
            <div className="user-top-links">

                <button className={filterBy === 'all' ? 'active' : ''} onClick={() => { filterUserSites('all') }}>All Sites</button>
                <button className={filterBy === 'published' ? 'active' : ''} onClick={() => { filterUserSites('published') }}>Published</button>
                <button className={filterBy === 'saved' ? 'active' : ''} onClick={() => { filterUserSites('saved') }}>Saved</button>
            </div>
        </div>
    )
}
