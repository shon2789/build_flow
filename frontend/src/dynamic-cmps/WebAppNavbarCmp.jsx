import React from 'react'
import { ElementToolBar } from '../components/editor/ElementToolBar'
import { DynamicCmp } from './DynamicCmp'
import { GiHamburgerMenu } from "react-icons/gi";

export const WebAppNavbarCmp = ({ cmp, currCmp, onDeleteCmp, onSetCurrCmp, onDuplicateCmp, onUpdateCmp, editorWidth, onChangeEditorSize }) => {

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

    let showHamburgetMenu = false;
    let hamburgerStyle = { ...cmp.attributes.style }
    if (editorWidth === '375px' || editorWidth < 600) {
        // document.querySelector('.web-app-builder').appendChild(document.getElementById(cmp.id))

        showHamburgetMenu = true;
        // hamburgerStyle.position = 'absolute';
        // hamburgerStyle.flexDirection = 'column';
        // hamburgerStyle.backgroundColor = 'red'
        // hamburgerStyle.height = '100%'
        // hamburgerStyle.right = 0;
        // hamburgerStyle.top = 0;
        // hamburgerStyle.bottom = 0;
        // hamburgerStyle.backgroundColor = 'white';
        // hamburgerStyle.border = '2px solid black'
        // console.dir(document.querySelector('.web-app-builder'))
        // console.dir(document.getElementById(cmp.id))
    }

    if (currCmp && currCmp.id === cmp.id) {
        return (
            <nav id={cmp.id} style={{ ...cmpStyle, position: 'relative', outline: '2px dashed #c6c6c6', outlineOffset: '-2px' }} className={cmp.attributes.className} onClick={(ev) => { if (showHamburgetMenu) { ev.stopPropagation(); return; }; onSetCurrCmp(ev, cmp) }}>
                <ElementToolBar cmp={cmp} onDeleteCmp={onDeleteCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} editorWidth={editorWidth} />
                {showHamburgetMenu && <GiHamburgerMenu style={{ fontSize: "1.3rem", color: "#292929" }} />}
                {(cmp.children && !showHamburgetMenu) && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} onChangeEditorSize={onChangeEditorSize} editorWidth={editorWidth} />)}
            </nav>
        )
    }


    return (
        <nav onMouseOut={(ev) => { ev.target.classList.remove('element-edit-hover') }} onMouseOver={(ev) => { ev.target.classList.add('element-edit-hover') }} id={cmp.id} style={cmpStyle} className={cmp.attributes.className} onClick={(ev) => { if (showHamburgetMenu) { ev.stopPropagation(); return; }; onSetCurrCmp(ev, cmp) }}>
            {showHamburgetMenu && <GiHamburgerMenu style={{ fontSize: "1.3rem", color: "#292929" }} />}
            {/* {showHamburgetMenu && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} onChangeEditorSize={onChangeEditorSize} editorWidth={editorWidth} />) } */}
            {(cmp.children && !showHamburgetMenu) && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} onChangeEditorSize={onChangeEditorSize} editorWidth={editorWidth} />)}
        </nav>
    )
}
