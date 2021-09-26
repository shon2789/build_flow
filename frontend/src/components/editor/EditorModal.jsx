import React, { useState } from 'react'

import { FaBold, FaUnderline, FaItalic } from "react-icons/fa";


export const EditorModal = ({ isEditing, cmp, onUpdateCmpStyle, event }) => {

    const [cmpStyle, setCmpStyle] = useState(cmp.attributes.style);

    const updateCmpStyle = ({ target }) => {
        const { value, name } = target
        setCmpStyle({ ...cmpStyle, [name]: value })
        onUpdateCmpStyle(cmpStyle)
    }


    console.log(cmp.attributes.style.fontSize.split('rem')[0])

    return (
        <div className="editor-modal" style={{ top: event?.target.offsetTop, left: '50%', transform: 'translate(-50%, -120%)' }}>
            <div className="font-size-container editing-container">
                <label id="font-size" htmlFor="fontSize">Font size</label>
                <input defaultValue={cmp.attributes.style.fontSize.split('rem')[0]} step="0.05" name="fontSize" onChange={(ev) => { updateCmpStyle(ev) }} id="font-size" type="range" max='3' min='0.5' />
            </div>
            <div className="letter-spacing-container editing-container">
                <label id="letter-spacing" htmlFor="letterSpacing">Letter spacing</label>
                <input name="letterSpacing" id="letter-spacing" type="range" step="0.2" max='3' min='1' defaultValue="1" />
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
