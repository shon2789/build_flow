import React, { useRef, useState, useEffect } from 'react'
import { ElementToolBar } from '../components/editor/ElementToolBar'

export const WebAppTxtCmp = ({ cmp, currCmp, onDeleteCmp, onSetCurrCmp, onDuplicateCmp, onUpdateCmpStyle }) => {


    if (currCmp && currCmp.id === cmp.id) {
        return (
            <span id={cmp.id} style={{ ...cmp.attributes.style, position: 'relative', outline: '2px dashed #c6c6c6', outlineOffset: '-2px' }} className={cmp.attributes.className} onClick={(ev) => { onSetCurrCmp(ev, cmp) }} >
                <ElementToolBar cmp={cmp} onDeleteCmp={onDeleteCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmpStyle={onUpdateCmpStyle} />
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
