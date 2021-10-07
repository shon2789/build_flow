import React from 'react'
import { BsFillCursorFill } from 'react-icons/bs'

export const UserCursor = ({ pointer }) => {
    const style = {
        top: pointer.y,
        left: pointer.x,
        color: pointer.color,
    }

    return (
        <div style={style} className="user-cursor-container">
            <BsFillCursorFill style={{ transform: 'rotate(-90deg)' }} />
            <span className="user-cursor-name" style={{ backgroundColor: pointer.color }}>
                {pointer.name}
            </span>
        </div>
    )
}

