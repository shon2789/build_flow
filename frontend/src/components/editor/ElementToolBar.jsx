import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';



export const ElementToolBar = ({ cmp, onDeleteCmp, onDuplicateCmp }) => {
    return (
        <div className="element-tool-bar">
            <Tooltip title="Copy" arrow placement="top"><div className="element-tool" onClick={() => { onDuplicateCmp(cmp) }}><FaCopy className="copy-tool" /></div></Tooltip>
            <Tooltip title="Delete" arrow placement="top"><div className="element-tool" onClick={() => { onDeleteCmp(cmp.id) }}><FaTrashAlt className="delete-tool" /></div></Tooltip>
        </div>
    )
}
