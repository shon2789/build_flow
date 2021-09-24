import React from 'react'
import { DynamicCmp } from './DynamicCmp'

export const WebAppSectionCmp = ({ cmp, onDeleteCmp }) => {

    return (
        <section id={cmp.id} style={cmp.attributes.style} className={cmp.attributes.className} >
            {cmp.children && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} onDeleteCmp={onDeleteCmp} />)}
        </section>
    )
}
