import React from 'react'
import { ElementToolBar } from '../components/editor/ElementToolBar';

export const WebAppInputCmp = ({ cmp, currCmp, onDeleteCmp, onSetCurrCmp, onDuplicateCmp, onUpdateCmp, editorWidth, isPublished }) => {

    let cmpStyle = { ...cmp.attributes.style }
    if (editorWidth < 763) {
        const mobileStyle = cmp.attributes['style-mobile'];
        for (const key in mobileStyle) {
            cmpStyle[key] = mobileStyle[key];
        }
    } else if (editorWidth < 1130) {
        const tabletStyle = cmp.attributes['style-tablet'];
        for (const key in tabletStyle) {
            cmpStyle[key] = tabletStyle[key];
        }
    }


    const toolBarProps = {
        onDeleteCmp,
        onDuplicateCmp,
        onUpdateCmp,
        editorWidth
    }

    if (isPublished) {
        return (
            <input
                type={cmp.info.type}
                placeholder={cmp.info.placeholder}
                id={cmp.id}
                style={cmpStyle}
                className={cmp.attributes.className}
            />
        )
    }

    if (currCmp && currCmp.id === cmp.id) {
        return (
            <>
                <input
                    type={cmp.info.type}
                    placeholder={cmp.info.placeholder}
                    id={cmp.id}
                    style={{ ...cmpStyle, position: 'relative', outline: '2px dashed #c6c6c6', outlineOffset: '-2px' }}
                    className={cmp.attributes.className}
                    onClick={(ev) => { ev.preventDefault(); onSetCurrCmp(ev, cmp) }}
                />
                <ElementToolBar cmp={cmp} {...toolBarProps} />
            </>
        )
    }


    return (
        <input
            type={cmp.info.type}
            placeholder={cmp.info.placeholder}
            onMouseOut={(ev) => { ev.target.classList.remove('element-edit-hover') }}
            onMouseOver={(ev) => { ev.target.classList.add('element-edit-hover') }}
            id={cmp.id}
            onClick={(ev) => { ev.preventDefault(); onSetCurrCmp(ev, cmp) }}
            style={cmpStyle}
            className={cmp.attributes.className}
        />
    )
}


