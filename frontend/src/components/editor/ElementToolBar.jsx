import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";



export const ElementToolBar = ({ cmpId, onDeleteCmp }) => {
    return (
        <div className="element-tool-bar">
            <div className="element-tool"><FaCopy className="copy-tool" /></div>
            <div className="element-tool" onClick={() => {onDeleteCmp(cmpId)}}><FaTrashAlt className="delete-tool" /></div>
        </div>
    )
}
