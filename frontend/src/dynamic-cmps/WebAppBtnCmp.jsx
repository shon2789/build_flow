import React from 'react'

export const WebAppBtnCmp = ({ cmp }) => {

    return (
        <button id={cmp.id} style={cmp.attributes.style} className={cmp.attributes.className} onClick={(ev) => { ev.stopPropagation(); console.log(ev.target.id)}}>
            {cmp.info.txt}
        </button>
    )
}
