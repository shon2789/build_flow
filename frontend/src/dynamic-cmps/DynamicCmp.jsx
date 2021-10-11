
import { WebAppSectionCmp } from "./WebAppSectionCmp"
import { WebAppTxtCmp } from "./WebAppTxtCmp.jsx"
import { WebAppNavbarCmp } from "./WebAppNavbarCmp.jsx"
import { WebAppBtnCmp } from "./WebAppBtnCmp.jsx"
import { WebAppImgCmp } from "./WebAppImgCmp.jsx"
import { WebAppInputCmp } from "./WebAppInputCmp.jsx"
import { WebAppTextAreaCmp } from "./WebAppTextAreaCmp.jsx"
import { useEffect } from "react"

export function DynamicCmp({ cmp, currCmp, onDeleteCmp, onSetCurrCmp, onDuplicateCmp, onUpdateCmp, editorWidth, onChangeEditorSize, isPublished = false }) {

    useEffect(() => {
        if (isPublished) {
            onChangeEditorSize(window.innerWidth)
        } else {
            const elWebAppBuilder = document.querySelector('.web-app-builder')
            onChangeEditorSize(elWebAppBuilder.clientWidth)
        }
    }, [isPublished, onChangeEditorSize])

    let props = {
        editorWidth,
        onChangeEditorSize
    }

    if (!isPublished) {
        props = {
            currCmp,
            onDeleteCmp,
            onSetCurrCmp,
            onDuplicateCmp,
            onUpdateCmp,
            editorWidth,
            onChangeEditorSize
        }
    }


    function getCmp(type) {
        switch (type) {
            case 'section':
                return <WebAppSectionCmp cmp={cmp} isPublished={isPublished}  {...props} />
            case 'txt':
                return <WebAppTxtCmp cmp={cmp} isPublished={isPublished}  {...props} />
            case 'navbar':
                return <WebAppNavbarCmp cmp={cmp} isPublished={isPublished}  {...props} />
            case 'btn':
                return <WebAppBtnCmp cmp={cmp} isPublished={isPublished}  {...props} />
            case 'img':
                return <WebAppImgCmp cmp={cmp} isPublished={isPublished}  {...props} />
            case 'input':
                return <WebAppInputCmp cmp={cmp} isPublished={isPublished}  {...props} />
            case 'text-area':
                return <WebAppTextAreaCmp cmp={cmp} isPublished={isPublished}  {...props} />
            default:
                console.log('If you got here, things got messed up')
        }
    }
    return (
        getCmp(cmp.type)
    )
}
