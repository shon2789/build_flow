import React from 'react'
import { ElementToolBar } from '../components/editor/ElementToolBar';

export const WebAppTextAreaCmp = ({ cmp, currCmp, onDeleteCmp, onDuplicateCmp, onUpdateCmp, editorWidth, isPublished }) => {

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
            <textarea
                rows="6"
                placeholder={cmp.info.placeholder}
                id={cmp.id}
                style={cmpStyle}
                className={cmp.attributes.className} >
            </textarea>
        )
    }

    if (currCmp && currCmp.id === cmp.id) {
        return (
            <textarea
                rows="6"
                placeholder={cmp.info.placeholder}
                id={cmp.id}
                style={{ ...cmpStyle, position: 'relative', outline: '2px dashed #c6c6c6', outlineOffset: '-2px' }}
                className={cmp.attributes.className}
            >
                <ElementToolBar cmp={cmp} {...toolBarProps} />
            </textarea>
        )
    }


    return (
        <textarea
            rows="6"
            placeholder={cmp.info.placeholder}
            onMouseOut={(ev) => { ev.target.classList.remove('element-edit-hover') }}
            onMouseOver={(ev) => { ev.target.classList.add('element-edit-hover') }}
            id={cmp.id}
            style={cmpStyle}
            className={cmp.attributes.className}>
        </textarea>
    )
}


