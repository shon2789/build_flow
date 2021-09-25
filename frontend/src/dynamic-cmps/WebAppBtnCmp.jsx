import React from 'react'
import { ElementToolBar } from '../components/editor/ElementToolBar'

export const WebAppBtnCmp = ({ cmp, currCmp, onSetCurrCmp }) => {

    if (currCmp && currCmp.id === cmp.id) {
        return (
            <button id={cmp.id} style={{ ...cmp.attributes.style, position: 'relative', outline: '2px dashed #c6c6c6' }} className={cmp.attributes.className} onClick={(ev) => { onSetCurrCmp(ev, cmp) }}>
                <ElementToolBar />
                {cmp.info.txt}
            </button>
        )
    }

    return (
        <button onMouseOut={(ev) => { ev.target.classList.remove('element-edit-hover') }} onMouseOver={(ev) => { ev.target.classList.add('element-edit-hover') }} id={cmp.id} style={cmp.attributes.style} className={cmp.attributes.className} onClick={(ev) => { onSetCurrCmp(ev, cmp) }}>
            {cmp.info.txt}
        </button>
    )
}
