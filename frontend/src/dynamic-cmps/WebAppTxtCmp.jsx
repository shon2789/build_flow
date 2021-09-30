import React from 'react'
import { ElementToolBar } from '../components/editor/ElementToolBar'
import ContentEditable from "react-contenteditable";

export const WebAppTxtCmp = ({ cmp, currCmp, onDeleteCmp, onSetCurrCmp, onDuplicateCmp, onUpdateCmp, editorWidth}) => {

    let cmpStyle = {...cmp.attributes.style}
    if(editorWidth < 850){
        const mobileStyle = cmp.attributes['style-mobile'];
        for(const key in mobileStyle){
            cmpStyle[key] = mobileStyle[key];
        }
    } else if(editorWidth < 1130) {
        const tabletStyle = cmp.attributes['style-tablet'];
        for(const key in tabletStyle){
            cmpStyle[key] = tabletStyle[key];
        }
    }

    const handleChange = ev => {
        const txt = ev.target.innerText;
        const newCmpInfo = { ...currCmp.info, txt }
        onUpdateCmp(newCmpInfo, 'info')
    };

    if (currCmp && currCmp.id === cmp.id) {
        return (
            <span id={cmp.id} style={{ ...cmp.attributes.style, position: 'relative', outline: '2px dashed #c6c6c6', outlineOffset: '-2px' }} className={cmp.attributes.className} onClick={(ev) => { onSetCurrCmp(ev, cmp) }} >
                <ElementToolBar cmp={cmp} onDeleteCmp={onDeleteCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} />
                <ContentEditable html={currCmp.info.txt} onKeyUp={handleChange} />
            </span>
        )
    }

    return (
        <span onMouseOut={(ev) => { ev.target.classList.remove('element-edit-hover') }} onMouseOver={(ev) => { ev.target.classList.add('element-edit-hover') }} id={cmp.id} style={cmp.attributes.style} className={cmp.attributes.className} onClick={(ev) => { onSetCurrCmp(ev, cmp) }} >
            {cmp.info.txt}
        </span>
    )
}
