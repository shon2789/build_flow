import React from 'react'
import { ElementToolBar } from '../components/editor/ElementToolBar'
import { DynamicCmp } from './DynamicCmp'

export const WebAppSectionCmp = ({ cmp, currCmp, onDeleteCmp, onSetCurrCmp, onDuplicateCmp }) => {

    if (currCmp && currCmp.id === cmp.id) {
        return (
            <section id={cmp.id} style={{ ...cmp.attributes.style, position: 'relative', outline: '2px dashed #c6c6c6', outlineOffset: '-2px' }} className={cmp.attributes.className} onClick={(ev) => { onSetCurrCmp(ev, cmp) }} >
                <ElementToolBar cmp={cmp} onDeleteCmp={onDeleteCmp} onDuplicateCmp={onDuplicateCmp} />
                {cmp.children && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} />)}
            </section>
        )
    }

    return (
        <section onMouseOut={(ev) => { ev.target.classList.remove('element-edit-hover') }} onMouseOver={(ev) => { ev.target.classList.add('element-edit-hover') }} id={cmp.id} style={cmp.attributes.style} className={cmp.attributes.className} onClick={(ev) => { onSetCurrCmp(ev, cmp) }} >
            {cmp.children && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} />)}
        </section>
    )


}
