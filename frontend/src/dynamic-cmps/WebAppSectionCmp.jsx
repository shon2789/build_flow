import React from 'react'
import { DynamicCmp } from './DynamicCmp'

export const WebAppSectionCmp = ({ cmp }) => {

    return (
        <section style={cmp.attributes.style} className={cmp.attributes.className}>
            {cmp.children && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} />)}
        </section>
    )
}
