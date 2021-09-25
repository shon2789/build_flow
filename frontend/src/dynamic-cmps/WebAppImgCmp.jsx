import React from 'react'
import { ElementToolBar } from '../components/editor/ElementToolBar'

export const WebAppImgCmp = ({ cmp, currCmp, onSetCurrCmp }) => {

    if (currCmp && currCmp.id === cmp.id) {
        return (
            <div className="nuetral-div">
                <ElementToolBar />
                <img id={cmp.id} style={{ ...cmp.attributes.style, position: 'relative', outline: '2px dashed #c6c6c6' }} className={cmp.attributes.className} src={cmp.attributes.src} alt="sorry no img" onClick={(ev) => onSetCurrCmp(ev, cmp)} />
            </div>
        )
    }

    return (
        <img id={cmp.id} style={cmp.attributes.style} className={cmp.attributes.className} src={cmp.attributes.src} alt="sorry no img" onClick={(ev) => onSetCurrCmp(ev, cmp)} />
    )
}