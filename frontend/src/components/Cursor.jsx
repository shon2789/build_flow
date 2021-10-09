import React from 'react'
import { FiMousePointer } from "react-icons/fi";

export const Cursor = ({ pos }) => {
    return (
        <FiMousePointer style={{ position: "fixed", top: `${pos.y}`, left: `${pos.x}` }} />
    )
}
