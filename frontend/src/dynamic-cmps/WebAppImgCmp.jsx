import React from 'react'

export const WebAppImgCmp = ({ cmp }) => {

    return (
        <img style={cmp.attributes.style} className={cmp.attributes.className} src={cmp.attributes.src} />
    )
}
