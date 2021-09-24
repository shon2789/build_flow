import React from 'react'

export const WebAppTxtCmp = ({ cmp, onDeleteCmp }) => {

    return (
        <span id={cmp.id} style={cmp.attributes.style} className={cmp.attributes.className} onClick={(ev) => {onDeleteCmp(ev.target.id)}} >
            {cmp.info.txt}
        </span>
    )
}
