import React from 'react'
import { FaTrashAlt, FaCopy } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { BsFonts, BsBoundingBoxCircles, BsImage } from "react-icons/bs";
import { IoMdColorPalette } from "react-icons/io";

import Tooltip from '@mui/material/Tooltip';



export const ElementToolBar = ({ cmp, onDeleteCmp, onDuplicateCmp }) => {
    return (
        <div className="element-tool-bar">
            {cmp.type === 'btn' &&
                <>
                    <Tooltip title="Text" arrow placement="top"><div className="element-tool" onClick={() => { onDeleteCmp(cmp.id) }}><BsFonts className="text-tool tool" /></div></Tooltip>
                    <Tooltip title="Link" arrow placement="top"><div className="element-tool" onClick={() => { onDeleteCmp(cmp.id) }}><FiLink className="link-tool tool" /></div></Tooltip>
                    <Tooltip title="Color" arrow placement="top"><div className="element-tool" onClick={() => { onDeleteCmp(cmp.id) }}><IoMdColorPalette className="color-tool tool" /></div></Tooltip>
                </>
            }
            {cmp.type === 'img' &&
                <Tooltip title="Image" arrow placement="top"><div className="element-tool" onClick={() => { onDeleteCmp(cmp.id) }}><BsImage className="image-tool tool" /></div></Tooltip>
            }

            {cmp.type === 'txt' &&
                <>
                    <Tooltip title="Text" arrow placement="top"><div className="element-tool" onClick={() => { onDeleteCmp(cmp.id) }}><BsFonts className="text-tool tool" /></div></Tooltip>
                    <Tooltip title="Color" arrow placement="top"><div className="element-tool" onClick={() => { onDeleteCmp(cmp.id) }}><IoMdColorPalette className="color-tool tool" /></div></Tooltip>
                </>
            }

            {cmp.type === 'section' &&
                <>
                    <Tooltip title="Image" arrow placement="top"><div className="element-tool" onClick={() => { onDeleteCmp(cmp.id) }}><BsImage className="image-tool tool" /></div></Tooltip>
                    <Tooltip title="Color" arrow placement="top"><div className="element-tool" onClick={() => { onDeleteCmp(cmp.id) }}><IoMdColorPalette className="color-tool tool" /></div></Tooltip>
                </>
            }
            <Tooltip title="Size" arrow placement="top"><div className="element-tool" onClick={() => { onDeleteCmp(cmp.id) }}><BsBoundingBoxCircles className="size-tool tool" /></div></Tooltip>
            <Tooltip title="Copy" arrow placement="top"><div className="element-tool" onClick={() => { onDuplicateCmp(cmp) }}><FaCopy className="copy-tool tool" /></div></Tooltip>
            <Tooltip title="Delete" arrow placement="top"><div className="element-tool" onClick={() => { onDeleteCmp(cmp.id) }}><FaTrashAlt className="delete-tool tool" /></div></Tooltip>
        </div>
    )
}
