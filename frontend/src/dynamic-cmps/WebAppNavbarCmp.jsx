import React from 'react'
import { DynamicCmp } from './DynamicCmp'

export const WebAppNavbarCmp = ({ cmp }) => {

    return (
        <nav style={cmp.attributes.style} className={cmp.attributes.className}>
            {cmp.children && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} />)}
        </nav>
    )
}
