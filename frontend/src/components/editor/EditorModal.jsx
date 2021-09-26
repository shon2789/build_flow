import React from 'react'
import { EditorSlider } from './EditorSlider'
import { FaBold, FaUnderline, FaItalic } from "react-icons/fa";


export const EditorModal = () => {
    return (
        <div className="editor-modal">
            <div className="font-size-container editing-container">
                <label id="font-size" htmlFor="">Font size</label>
                <input id="font-size" type="range" max='20' min='0' />
            </div>
            <div className="letter-spacing-container editing-container">
                <label id="letter-spacing" htmlFor="">Letter spacing</label>
                <input id="letter-spacing" type="range" max='20' min='0' />
            </div>
            <div className="line-height-container editing-container">
                <label id="line-height" htmlFor="">Line height</label>
                <input id="line-height" type="range" max='20' min='0' />
            </div>
            <div className="style-container editing-container">
                <label id="style" htmlFor="">Style</label>
                <div className="bui-container">
                    <FaBold className="active" />
                    <FaUnderline />
                    <FaItalic />
                </div>
            </div>
            <div className="font-type-container editing-container">
                <label id="font-type" htmlFor="">Font</label>
                <select className="font-type-selector" id="font-type">
                    <option value="lato">Lato</option>
                </select>
            </div>
        </div>
    )
}
