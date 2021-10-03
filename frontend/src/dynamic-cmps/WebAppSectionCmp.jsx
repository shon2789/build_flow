import React from 'react'
import { ElementToolBar } from '../components/editor/ElementToolBar'
import { DynamicCmp } from './DynamicCmp'

export const WebAppSectionCmp = ({ cmp, currCmp, onDeleteCmp, onSetCurrCmp, onDuplicateCmp, onUpdateCmp, editorWidth, onChangeEditorSize }) => {
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

    if (currCmp && currCmp.id === cmp.id) {
        return (
            <section id={cmp.id} style={{ ...cmpStyle, position: 'relative', outline: '2px dashed #c6c6c6', outlineOffset: '-2px' }} className={cmp.attributes.className} onClick={(ev) => { onSetCurrCmp(ev, cmp) }} >
                <ElementToolBar cmp={cmp} onDeleteCmp={onDeleteCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} />
                {cmp.children && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} onChangeEditorSize={onChangeEditorSize} editorWidth={editorWidth} />)}
            </section>
        )
    }

    return (
        <section onMouseOut={(ev) => { ev.target.classList.remove('element-edit-hover') }} onMouseOver={(ev) => { ev.target.classList.add('element-edit-hover') }} id={cmp.id} style={{...cmpStyle}} className={cmp.attributes.className} onClick={(ev) => { onSetCurrCmp(ev, cmp) }} >
            {cmp.children && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} onChangeEditorSize={onChangeEditorSize} editorWidth={editorWidth} />)}
        </section>
    )


}
