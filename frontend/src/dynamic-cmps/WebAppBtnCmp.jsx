import React from 'react'

export const WebAppBtnCmp = ({ cmp }) => {

    return (
        <button style={cmp.attributes.style} className={cmp.attributes.className} onClick={() => {window.location.href=cmp.info.action.link}}>
            {cmp.info.txt}
        </button>
    )
}
