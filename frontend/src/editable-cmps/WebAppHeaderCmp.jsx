import React from 'react'
import { DynamicCmp } from '../components/DynamicCmp'

export const WebAppHeaderCmp = ({ cmp }) => {
<<<<<<< HEAD
    return (
        <header style={cmp.attributes.style} className={cmp.attributes.className}>
            <h1>{cmp.info.title}</h1>
            <h3>{cmp.info.subtitle}</h3>
=======

    return (
        <header style={cmp.attributes.style} className={cmp.attributes.className}>
            <h1>{cmp.info.subtitle}</h1>
>>>>>>> 1ba9f03821469c32ac935c0b7d5186583c089b5b
            {cmp.children && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} />)}
        </header>
    )
}
