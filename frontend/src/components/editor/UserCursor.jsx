import React from 'react'
import { BsFillCursorFill } from 'react-icons/bs'

export const UserCursor = ({pointer}) => {
    const style = {
        position: 'fixed',
        zIndex: '1000000',
        top: pointer.y,
        left: pointer.x,
        color: pointer.color,
        transform: 'rotate(-90deg)',
        fontSize: '1.5rem'
    }

    return (
        <BsFillCursorFill style={style} />
    )
}

