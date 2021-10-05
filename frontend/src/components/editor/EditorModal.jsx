import { cloneDeep } from 'lodash';
import React, { useEffect, useRef, useState } from 'react'

import { FaBold, FaUnderline, FaItalic } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";
import { store } from 'react-notifications-component';
import { uploadImg } from '../../services/screen-shot.service';



export const EditorModal = ({ setIsEditing, choosenTool, cmp, elCmpPos, onUpdateCmp, event, editorWidth }) => {

    let currentStyle = { ...cmp.attributes.style }
    if (editorWidth < 763) {
        const mobileStyle = cmp.attributes['style-mobile'];
        for (const key in mobileStyle) {
            currentStyle[key] = mobileStyle[key];
        }
    } else if (editorWidth < 1130) {
        const tabletStyle = cmp.attributes['style-tablet'];
        for (const key in tabletStyle) {
            currentStyle[key] = tabletStyle[key];
        }
    }

    const [cmpStyle, setCmpStyle] = useState(currentStyle);
    const [cmpInfo, setCmpInfo] = useState(cmp?.info)
    const [cmpAttr, setCmpAttr] = useState(cmp.attributes)
    const [editorPosition, setEditorPosition] = useState(null)
    const ref = useRef()
    const isRightSpace = elCmpPos.right + 230 < window.innerWidth

    let style = {};
    if (window.innerWidth > 768) {
        if (elCmpPos.top < 230) {
            style = {
                top: `${elCmpPos.bottom + 35}px`,
                transform: isRightSpace ? 'translateX(-25%)' : 'translateX(-55%)',
                left: event?.clientX
            }
        } else {
            style = {
                top: (event?.clientY - editorPosition?.height - 20),
                transform: isRightSpace ? 'translateX(-25%)' : 'translateX(-55%)',
                left: event?.clientX,
                zIndex: '1000'
            }
        }
    }

    const updateCmpStyle = ({ target }) => {
        let { value, name } = target
        const cmpStyleCopy = cloneDeep(cmpStyle);
        setCmpStyle({ ...cmpStyleCopy, [name]: value + setUnit(cmpStyle[name]) })
        onUpdateCmp(cmpStyleCopy, 'style')
    }

    const updateCmpInfo = () => {
        onUpdateCmp(cmpInfo, 'info')
    }

    const updateCmpAttributes = (attr = null) => {
        if (attr) {
            onUpdateCmp(attr, 'attributes')
        } else {
            onUpdateCmp(cmpAttr, 'attributes')
        }
        setIsEditing(false)
    }

    const handleImgUpload = async (ev, type) => {

        const uploadingMsgId = store.addNotification({
            message: "Uploading image to cloud...",
            type: "default",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__backInRight"],
            animationOut: ["animate__animated", "animate__backOutRight"],
            style: {
                fontFamily: "Lato regular,sans-serif"
            }
        });

        const file = ev.target.files[0];
        const url = await uploadImg(file)
        const copyAttr = cloneDeep(cmpAttr)
        if (type === 'src') {
            copyAttr.src = url;
        } else if (type === 'backgroundImage') {
            copyAttr.style.backgroundImage = `url(${url})`
            copyAttr.style.backgroundSize = 'cover'
            copyAttr.style.backgroundRepeat = 'no-repeat'
        }
        setCmpAttr({ ...copyAttr })
        updateCmpAttributes(copyAttr)
        store.removeNotification(uploadingMsgId)

        store.addNotification({
            message: "Image uploaded to cloud!",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__backInRight"],
            animationOut: ["animate__animated", "animate__backOutRight"],
            dismiss: {
                duration: 3000,
                onScreen: true
            }
        });
    }


    useEffect(() => {
        setEditorPosition(ref.current.getBoundingClientRect())
        document.addEventListener("mousedown", handleClick);
        document.querySelector('.web-app-container').addEventListener("scroll", () => { setIsEditing(false) });

        return () => {
            document.removeEventListener("mousedown", handleClick);
            window.removeEventListener("scroll", () => { setIsEditing(false) }, false);
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


    // Text B U I toggeling
    const isBold = cmpStyle.fontWeight === '700';
    const isUnderLine = cmpStyle.textDecoration === 'underline';
    const isItalic = cmpStyle.fontStyle === 'italic';


    const labelsStyle = {
        outline: 'none'
    }

    const splitter = (cssProp) => {
        if (!cssProp) return '';
        if (cssProp.includes('rem')) {
            return cssProp.split('rem')[0]
        } else if (cssProp.includes('%')) {
            return cssProp.split('%')[0]
        } else {
            return cssProp
        }
    }

    const setUnit = (cssProp) => {
        if (!cssProp) return '';
        if (cssProp.includes('%')) {
            return '%'
        } else if (cssProp.includes('rem')) {
            return 'rem'
        } else {
            return ''
        }

    }

    return (
        <div ref={ref} className="editor-modal" style={style}>


            {choosenTool === 'img' &&
                <>
                    <div className="link-container editing-container">
                        <label style={labelsStyle} id="img-link" htmlFor="src">Link</label>
                        <input name="src" onChange={(ev) => { setCmpAttr({ ...cmpAttr, src: ev.target.value }) }} id="img-link" type="input" />
                        <IoEnterOutline onClick={() => { updateCmpAttributes() }} className="editing-submit-btn" />
                    </div>
                    <div className="upload-container editing-container">
                        <label style={labelsStyle} id="upload" htmlFor="src">Upload</label>
                        <input name="file" onChange={(ev) => { handleImgUpload(ev, 'src') }} id="upload" type="file" />
                    </div>
                </>
            }

            {choosenTool === 'backgroundImg' &&
                <>
                    <div className="link-container editing-container">
                        <label style={labelsStyle} id="img-link" htmlFor="src">Link</label>
                        <input name="backgroundImage" onChange={(ev) => { setCmpAttr({ ...cmpAttr, style: { ...cmpStyle, backgroundImage: `url(${ev.target.value})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' } }) }} id="img-link" type="input" />
                        <IoEnterOutline onClick={() => { updateCmpAttributes() }} className="editing-submit-btn" />
                    </div>
                    <div className="upload-container editing-container">
                        <label style={labelsStyle} id="upload" htmlFor="src">Upload</label>
                        <input name="file" onChange={(ev) => { handleImgUpload(ev, 'backgroundImage') }} id="upload" type="file" />
                    </div>
                </>
            }



            {choosenTool === 'link' &&
                <div className="link-container editing-container">

                    <label style={labelsStyle} id="link" htmlFor="src">Link</label>
                    <input name="src" onChange={(ev) => { setCmpInfo({ ...cmpInfo, action: { ...cmpInfo.action, link: ev.target.value } }) }} id="link" type="input" />
                    <IoEnterOutline onClick={() => { updateCmpInfo() }} className="editing-submit-btn" />

                </div>
            }

            {choosenTool === 'size' &&
                <>
                    {((cmpStyle.width && !cmp.sectionType && cmpStyle.width !== 'fit-content')) &&
                        <>
                            <div className="width-container editing-container">
                                <label style={labelsStyle} id="width" htmlFor="width">Width</label>
                                <input step="1" name="width" onChange={(ev) => { updateCmpStyle(ev) }} id="width" type="range" max={splitter(cmpStyle.maxWidth)} min={splitter(cmpStyle.minWidth)} defaultValue={splitter(cmpStyle.width)} />
                            </div>
                        </>
                    }
                    {(cmpStyle.height && cmpStyle.height !== 'fit-content') &&
                        <>
                            <div className="height-container editing-container">
                                <label style={labelsStyle} id="height" htmlFor="height">Height</label>
                                <input onChange={(ev) => { updateCmpStyle(ev) }} name="height" id="height" type="range" step="0.5" max={splitter(cmpStyle.maxHeight)} min={splitter(cmpStyle.minHeight)} defaultValue={splitter(cmpStyle.height)} />
                            </div>
                        </>
                    }
                    <div className="padding-top-container editing-container">
                        <label style={labelsStyle} id="padding-top" htmlFor="paddingTop">Top spacing</label>
                        <input onChange={(ev) => { updateCmpStyle(ev) }} name="paddingTop" id="padding-top" type="range" step="1" max='25' min='0' defaultValue={splitter(cmp.attributes.style?.paddingTop)} />
                    </div>
                    <div className="padding-bottom-container editing-container">
                        <label style={labelsStyle} id="padding-bottom" htmlFor="paddingBottom">Bottom spacing </label>
                        <input onChange={(ev) => { updateCmpStyle(ev) }} name="paddingBottom" id="padding-bottom" type="range" step="1" max='25' min='0' defaultValue={splitter(cmp.attributes.style?.paddingBottom)} />
                    </div>
                    <div className="padding-right-container editing-container">
                        <label style={labelsStyle} id="padding-left" htmlFor="paddingLeft">Left spacing</label>
                        <input onChange={(ev) => { updateCmpStyle(ev) }} name="paddingLeft" id="padding-left" type="range" step="1" max='25' min='0' defaultValue={splitter(cmp.attributes.style?.paddingLeft)} />
                    </div>
                    <div className="padding-left-container editing-container">
                        <label style={labelsStyle} id="padding-right" htmlFor="paddingRight">Right spacing</label>
                        <input onChange={(ev) => { updateCmpStyle(ev) }} name="paddingRight" id="padding-right" type="range" step="1" max='25' min='0' defaultValue={splitter(cmp.attributes.style?.paddingRight)} />
                    </div>
                </>
            }
            {choosenTool === 'txt' &&
                <>
                    <div className="font-size-container editing-container">
                        <label style={labelsStyle} id="font-size" htmlFor="fontSize">Font size</label>
                        <input defaultValue={splitter(cmp.attributes.style.fontSize)} name="fontSize" onChange={(ev) => { updateCmpStyle(ev) }} id="font-size" type="range" step="0.5" max='5' min='0.5' />
                    </div>
                    <div className="letter-spacing-container editing-container">
                        <label style={labelsStyle} id="letter-spacing" htmlFor="letterSpacing">Letter spacing</label>
                        <input onChange={(ev) => { updateCmpStyle(ev) }} name="letterSpacing" id="letter-spacing" type="range" step="0.1" max='1' min='0' defaultValue={splitter(cmp.attributes.style?.letterSpacing)} />
                    </div>
                    <div className="line-height-container editing-container">
                        <label style={labelsStyle} id="line-height" htmlFor="lineHeight">Line height</label>
                        <input onChange={(ev) => { updateCmpStyle(ev) }} name="lineHeight" id="line-height" type="range" step="0.5" max='5' min='1' defaultValue={cmp.attributes.style?.letterSpacing} />
                    </div>
                    <div className="style-container editing-container">
                        <label style={labelsStyle} id="style" htmlFor="">Style</label>
                        <div className="bui-container">
                            <FaBold className={isBold ? 'active' : ''} onClick={() => { isBold ? updateCmpStyle({ target: { name: "fontWeight", value: "200" } }) : updateCmpStyle({ target: { name: "fontWeight", value: "700" } }) }} />
                            <FaUnderline className={isUnderLine ? 'active' : ''} onClick={() => { isUnderLine ? updateCmpStyle({ target: { name: "textDecoration", value: "unset" } }) : updateCmpStyle({ target: { name: "textDecoration", value: "underline" } }) }} />
                            <FaItalic className={isItalic ? 'active' : ''} onClick={() => { isItalic ? updateCmpStyle({ target: { name: "fontStyle", value: "normal" } }) : updateCmpStyle({ target: { name: "fontStyle", value: "italic" } }) }} />
                        </div>
                    </div>
                    <div className="font-type-container editing-container">
                        <label style={labelsStyle} id="font-type" htmlFor="">Font</label>
                        <select onChange={(ev) => { updateCmpStyle(ev) }} name="fontFamily" className="font-type-selector" id="font-type">
                            <option style={{ fontFamily: "Lato regular" }} value="Lato regular">Lato</option>
                            <option style={{ fontFamily: "Lato light" }} value="Lato light">Lato light</option>
                            <option style={{ fontFamily: "Birthstone regular" }} value="Birthstone regular">Birthstone</option>
                            <option style={{ fontFamily: "Bree serif" }} value="Bree serif">Bree Serif</option>
                            <option style={{ fontFamily: "kalam regular" }} value="kalam regular">kalam</option>
                            <option style={{ fontFamily: "Pacifico regular" }} value="Pacifico regular">Pacifico</option>
                            <option style={{ fontFamily: "Roboto regular" }} value="Roboto regular">Roboto</option>
                            <option style={{ fontFamily: "Roboto light" }} value="Roboto light">Roboto light</option>
                            <option style={{ fontFamily: "sncl" }} value="sncl">Seoul</option>
                        </select>
                    </div>
                </>
            }
            {choosenTool === 'color' &&
                <>
                    <div className="background-color-picker-container editing-container">
                        <label style={labelsStyle} id="font-type" htmlFor="backgroundColor">Background Color</label>
                        <input defaultValue={cmp.attributes.style?.backgroundColor} name="backgroundColor" onChange={(ev) => { updateCmpStyle(ev) }} type="color" />
                    </div>

                    <div className="color-picker-container editing-container">
                        <label style={labelsStyle} id="font-type" htmlFor="color">Color</label>
                        <input defaultValue={cmp.attributes.style?.color} name="color" onChange={(ev) => { updateCmpStyle(ev) }} type="color" />
                    </div>
                </>
            }
        </div>
    )
}
