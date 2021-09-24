import React from 'react'

export const WebAppImgCmp = ({ cmp }) => {

    return (
        <img id={cmp.id} style={cmp.attributes.style} className={cmp.attributes.className} src={cmp.attributes.src} alt="sorry no img" />
    )
}
