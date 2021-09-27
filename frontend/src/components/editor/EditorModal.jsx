import { cloneDeep } from 'lodash';
import React, { useEffect, useRef, useState } from 'react'

import { FaBold, FaUnderline, FaItalic } from "react-icons/fa";



export const EditorModal = ({ setIsEditing, choosenTool, cmp, onUpdateCmpStyle, event }) => {
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

    const [editorPosition, setEditorPosition] = useState(null)
    const ref = useRef()

    useEffect(() => {
        setEditorPosition(ref.current.getBoundingClientRect())
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [])

    const handleClick = e => {
        if (ref.current.contains(e.target)) {
            // inside click
            setIsEditing(true)
            return;
        }
        // outside click 
        setIsEditing(false)
    };


    const isBold = cmpStyle.fontWeight === '700';
    const isUnderLine = cmpStyle.textDecoration === 'underline';
    const isItalic = cmpStyle.fontStyle === 'italic';

    // const style = {
    //     top: editorPosition.bottom < editorPosition.height 
    // }


    return (
        <div ref={ref} className="editor-modal" style={{ top: (event?.clientY - editorPosition?.height - 20), left: event?.clientX, zIndex: '1000' }}>
            {choosenTool === 'txt' &&
                <>
                    <div className="font-size-container editing-container">
                        <label id="font-size" htmlFor="fontSize">Font size</label>
                        <input defaultValue={cmp.attributes.style.fontSize?.split('rem')[0]} step="0.01" name="fontSize" onChange={(ev) => { updateCmpStyle(ev) }} id="font-size" type="range" max='3.3' min='0.8' />
                    </div>
                    <div className="letter-spacing-container editing-container">
                        <label id="letter-spacing" htmlFor="letterSpacing">Letter spacing</label>
                        <input onChange={(ev) => { updateCmpStyle(ev) }} name="letterSpacing" id="letter-spacing" type="range" step="0.05" max='1' min='0.1' defaultValue="1" />
                    </div>
                    <div className="line-height-container editing-container">
                        <label id="line-height" htmlFor="lineHeight">Line height</label>
                        <input onChange={(ev) => { updateCmpStyle(ev) }} name="lineHeight" id="line-height" type="range" step="0.05" max='5' min='1' defaultValue="1" />
                    </div>
                    <div className="style-container editing-container">
                        <label id="style" htmlFor="">Style</label>
                        <div className="bui-container">
                            <FaBold className={isBold ? 'active' : ''} onClick={() => { isBold ? updateCmpStyle({ target: { name: "fontWeight", value: "200" } }) : updateCmpStyle({ target: { name: "fontWeight", value: "700" } }) }} />
                            <FaUnderline className={isUnderLine ? 'active' : ''} onClick={() => { isUnderLine ? updateCmpStyle({ target: { name: "textDecoration", value: "unset" } }) : updateCmpStyle({ target: { name: "textDecoration", value: "underline" } }) }} />
                            <FaItalic className={isItalic ? 'active' : ''} onClick={() => { isItalic ? updateCmpStyle({ target: { name: "fontStyle", value: "normal" } }) : updateCmpStyle({ target: { name: "fontStyle", value: "italic" } }) }} />
                        </div>
                    </div>
                    <div className="font-type-container editing-container">
                        <label id="font-type" htmlFor="">Font</label>
                        <select className="font-type-selector" id="font-type">
                            <option value="lato">Lato</option>
                        </select>
                    </div>
                </>
            }
            {choosenTool === 'color' &&
                <>
                    <div className="background-color-picker-container editing-container">
                        <label id="font-type" htmlFor="backgroundColor">Background Color</label>
                        <input name="backgroundColor" onChange={(ev) => { updateCmpStyle(ev) }} type="color" />
                    </div>

                    <div className="color-picker-container editing-container">
                        <label id="font-type" htmlFor="color">Color</label>
                        <input name="color" onChange={(ev) => { updateCmpStyle(ev) }} type="color" />
                    </div>
                </>
            }
        </div>
    )
}
