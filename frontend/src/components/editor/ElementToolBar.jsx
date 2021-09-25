import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";



export const ElementToolBar = ({ cmp, onDeleteCmp, onDuplicateCmp }) => {
    return (
        <div className="element-tool-bar">
            <div className="element-tool" onClick={() => { onDuplicateCmp(cmp) }}><FaCopy className="copy-tool" /></div>
            <div className="element-tool" onClick={() => { onDeleteCmp(cmp.id) }}><FaTrashAlt className="delete-tool" /></div>
        </div>
    )
}
