import React from 'react'
import { ElementToolBar } from '../components/editor/ElementToolBar'
import { DynamicCmp } from './DynamicCmp'
import { GiHamburgerMenu } from "react-icons/gi";

export const WebAppNavbarCmp = ({ cmp, currCmp, onDeleteCmp, onSetCurrCmp, onDuplicateCmp, onUpdateCmp, editorWidth, onChangeEditorSize, isPublished }) => {

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
        showHamburgetMenu = true;
    }

    const editingProps = {
        currCmp,
        onDeleteCmp,
        onSetCurrCmp,
        onDuplicateCmp,
        onUpdateCmp,
        editorWidth,
        onChangeEditorSize
    }

    const publishedProps = {
        onChangeEditorSize,
        editorWidth,
        isPublished
    }

    const toolBarProps = {
        onDeleteCmp,
        onDuplicateCmp,
        onUpdateCmp,
        editorWidth
    }

    if (isPublished) {
        return (

            <nav
                id={cmp.id}
                style={cmpStyle}
                className={cmp.attributes.className} >

                {showHamburgetMenu && <GiHamburgerMenu style={{ fontSize: "1.3rem", color: "#292929" }} />}
                {(cmp.children && !showHamburgetMenu) && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} {...publishedProps} />)}

            </nav>
        )
    }

    if (currCmp && currCmp.id === cmp.id) {
        return (
            <nav
                id={cmp.id}
                style={{ ...cmpStyle, position: 'relative', outline: '2px dashed #c6c6c6', outlineOffset: '-2px' }}
                className={cmp.attributes.className}
                onClick={(ev) => {
                    if (showHamburgetMenu) { ev.stopPropagation(); return; };
                    onSetCurrCmp(ev, cmp)
                }}>

                <ElementToolBar cmp={cmp} {...toolBarProps} />
                {showHamburgetMenu && <GiHamburgerMenu style={{ fontSize: "1.3rem", color: "#292929" }} />}
                {(cmp.children && !showHamburgetMenu) && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} {...editingProps} />)}

            </nav>
        )
    }


    return (
        <nav
            onMouseOut={(ev) => { ev.target.classList.remove('element-edit-hover') }}
            onMouseOver={(ev) => { ev.target.classList.add('element-edit-hover') }}
            id={cmp.id}
            style={cmpStyle}
            className={cmp.attributes.className}
            onClick={(ev) => {
                if (showHamburgetMenu) { ev.stopPropagation(); return; };
                onSetCurrCmp(ev, cmp)
            }}>

            {showHamburgetMenu && <GiHamburgerMenu style={{ fontSize: "1.3rem", color: "#292929" }} />}
            {(cmp.children && !showHamburgetMenu) && cmp.children.map((child, idx) => <DynamicCmp key={idx} cmp={child} {...editingProps} />)}

        </nav>
    )
}
