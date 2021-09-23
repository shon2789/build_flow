import React from 'react'
import { DynamicCmp } from '../components/DynamicCmp'

export const WebAppHeaderCmp = ({ cmp }) => {

    return (
        <header style={cmp.attributes.style} className={cmp.attributes.className}>
            <h1>{cmp.info.subtitle}</h1>
            {cmp.children && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} />)}
            <h3>{cmp.info.shatz}</h3>
        </header>
    )
}
