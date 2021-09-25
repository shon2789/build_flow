import React from 'react'
import { ElementToolBar } from '../components/editor/ElementToolBar'
import { DynamicCmp } from './DynamicCmp'

export const WebAppNavbarCmp = ({ cmp, currCmp, onDeleteCmp, onSetCurrCmp }) => {


    if (currCmp && currCmp.id === cmp.id) {
        return (
            <nav id={cmp.id} style={{ ...cmp.attributes.style, position: 'relative', outline: '2px dashed #c6c6c6', outlineOffset: '-2px' }} className={cmp.attributes.className} onClick={(ev) => { onSetCurrCmp(ev, cmp) }}>
                <ElementToolBar />
                {cmp.children && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} />)}
            </nav>
        )
    }


    return (
        <nav onMouseOut={(ev) => { ev.target.classList.remove('element-edit-hover') }} onMouseOver={(ev) => { ev.target.classList.add('element-edit-hover') }} id={cmp.id} style={cmp.attributes.style} className={cmp.attributes.className} onClick={(ev) => { onSetCurrCmp(ev, cmp) }}>
            {cmp.children && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} />)}
        </nav>
    )
}
