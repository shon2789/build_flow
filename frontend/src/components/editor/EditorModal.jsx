import { cloneDeep } from 'lodash';
import React, { useState } from 'react'

import { FaBold, FaUnderline, FaItalic } from "react-icons/fa";


export const EditorModal = ({ isEditing, cmp, onUpdateCmpStyle, event }) => {

    const [cmpStyle, setCmpStyle] = useState(cmp.attributes.style);

    const updateCmpStyle = ({ target }) => {
        let { value, name } = target
        const cmpStyleCopy = cloneDeep(cmpStyle);
        if (name === 'fontSize' || name === 'letterSpacing') {
            cmpStyleCopy[name] = value + 'rem';
            setCmpStyle({ ...cmpStyleCopy, [name]: value + 'rem' })
        } else {
            cmpStyleCopy[name] = value;
            setCmpStyle({ ...cmpStyleCopy, [name]: value })
        }
        onUpdateCmpStyle(cmpStyleCopy)
    }





    return (
        <div className="editor-modal" style={{ top: event?.target.offsetTop, left: event?.target.offSetLeft, transform: 'translate(50%, -120%)' }}>
            <div className="font-size-container editing-container">
                <label id="font-size" htmlFor="fontSize">Font size</label>
                <input defaultValue={cmp.attributes.style.fontSize?.split('rem')[0]} step="0.01" name="fontSize" onChange={(ev) => { updateCmpStyle(ev) }} id="font-size" type="range" max='3.3' min='0.8' />
            </div>
            <div className="letter-spacing-container editing-container">
                <label id="letter-spacing" htmlFor="letterSpacing">Letter spacing</label>
                <input onChange={(ev) => { updateCmpStyle(ev) }} name="letterSpacing" id="letter-spacing" type="range" step="0.05" max='2' min='0.1' defaultValue="1" />
            </div>
            <div className="line-height-container editing-container">
                <label id="line-height" htmlFor="lineHeight">Line height</label>
                <input onChange={(ev) => { updateCmpStyle(ev) }} name="lineHeight" id="line-height" type="range" step="0.05" max='5' min='1' defaultValue="1" />
            </div>
            <div className="style-container editing-container">
                <label id="style" htmlFor="">Style</label>
                <div className="bui-container">
                    <FaBold className="active" onClick={() => { updateCmpStyle({ target: { name: "fontWeight", value: "700" } }) }} />
                    <FaUnderline onClick={() => { updateCmpStyle({ target: { name: "textDecoration", value: "underline" } }) }} />
                    <FaItalic onClick={() => { updateCmpStyle({ target: { name: "textDecoration", value: "underline" } }) }} />

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
