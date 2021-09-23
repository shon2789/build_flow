import React from 'react'

export const WebAppTxtCmp = ({ cmp }) => {

    return (
        <span style={cmp.attributes.style} className={cmp.attributes.className}>
            {cmp.info.txt}
        </span>
    )
}
