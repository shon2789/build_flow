import React from 'react'
import { ElementToolBar } from '../components/editor/ElementToolBar'

export const WebAppImgCmp = ({ cmp, currCmp, onSetCurrCmp, onDeleteCmp, onDuplicateCmp, onUpdateCmp, editorWidth }) => {

    let cmpStyle = { ...cmp.attributes.style }
    if (editorWidth < 763) {
        const mobileStyle = cmp.attributes['style-mobile'];
        for (const key in mobileStyle) {
            cmpStyle[key] = mobileStyle[key];
        }
    } else if (editorWidth < 1130) {
        const tabletStyle = cmp.attributes['style-tablet'];
        for (const key in tabletStyle) {
            cmpStyle[key] = tabletStyle[key];
        }
    }

    if (currCmp && currCmp.id === cmp.id) {
        return (
            <div className="nuetral-div" style={{ ...cmpStyle, position: 'relative' }} onClick={(ev) => onSetCurrCmp(ev, cmp)}>
                <ElementToolBar cmp={cmp} onDeleteCmp={onDeleteCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} />
                <img id={cmp.id} style={{ width: '100%', height: '100%', outline: '2px dashed #c6c6c6', outlineOffset: '-2px', objectFit: 'cover' }} className={cmp.attributes.className + ' editable-image'} src={cmp.attributes.src} alt="sorry no img" />
            </div>
        )
    }

    return (
        <div className="nuetral-div" style={cmpStyle} onClick={(ev) => onSetCurrCmp(ev, cmp)}>
            <img id={cmp.id} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className={cmp.attributes.className} src={cmp.attributes.src} alt="sorry no img" />
        </div>
    )
}