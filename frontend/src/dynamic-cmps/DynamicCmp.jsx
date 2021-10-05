
import { WebAppSectionCmp } from "./WebAppSectionCmp"
import { WebAppTxtCmp } from "./WebAppTxtCmp.jsx"
import { WebAppNavbarCmp } from "./WebAppNavbarCmp.jsx"
import { WebAppBtnCmp } from "./WebAppBtnCmp.jsx"
import { WebAppImgCmp } from "./WebAppImgCmp.jsx"
import { useEffect } from "react"

export function DynamicCmp({ cmp, currCmp, onDeleteCmp, onSetCurrCmp, onDuplicateCmp, onUpdateCmp, editorWidth, onChangeEditorSize }) {
    
    useEffect(() => {
        const elWebAppBuilder = document.querySelector('.web-app-builder')
        onChangeEditorSize(elWebAppBuilder.clientWidth)

    }, [])

    function getCmp(type) {
        switch (type) {
            case 'section':
                return <WebAppSectionCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} editorWidth={editorWidth} onChangeEditorSize={onChangeEditorSize} />
            case 'txt':
                return <WebAppTxtCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} editorWidth={editorWidth} />
            case 'navbar':
                return <WebAppNavbarCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} editorWidth={editorWidth} onChangeEditorSize={onChangeEditorSize} />
            case 'btn':
                return <WebAppBtnCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} editorWidth={editorWidth} />
            case 'img':
                return <WebAppImgCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} editorWidth={editorWidth} />
            default:
                console.log('if U got here, things got messed up')
        }
    }

    return (
        getCmp(cmp.type)
    )
}