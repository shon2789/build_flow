import React, { useRef, useState, useEffect } from 'react'
import { ElementToolBar } from '../components/editor/ElementToolBar'

export const WebAppTxtCmp = ({ cmp, currCmp, onDeleteCmp, onSetCurrCmp, onDuplicateCmp, onUpdateCmp }) => {

    const updateCmpTxt = (ev) => {
        const txt = ev.target.innerText
        const newCmpInfo = { ...currCmp.info, txt }

        onUpdateCmp(newCmpInfo, 'info')
    }

    if (currCmp && currCmp.id === cmp.id) {
        return (
            <span contentEditable suppressContentEditableWarning onKeyUp={(ev) => { updateCmpTxt(ev) }} id={cmp.id} style={{ ...cmp.attributes.style, position: 'relative', outline: '2px dashed #c6c6c6', outlineOffset: '-2px' }} className={cmp.attributes.className} onClick={(ev) => { onSetCurrCmp(ev, cmp) }} >
                <ElementToolBar cmp={cmp} onDeleteCmp={onDeleteCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} />
                {cmp.info.txt}
            </span>

        )
    }

    return (
        <span onMouseOut={(ev) => { ev.target.classList.remove('element-edit-hover') }} onMouseOver={(ev) => { ev.target.classList.add('element-edit-hover') }} id={cmp.id} style={cmp.attributes.style} className={cmp.attributes.className} onClick={(ev) => { onSetCurrCmp(ev, cmp) }} >
            {cmp.info.txt}
        </span>
    )
}
