
import { WebAppSectionCmp } from "./WebAppSectionCmp"
import { WebAppTxtCmp } from "./WebAppTxtCmp.jsx"
import { WebAppNavbarCmp } from "./WebAppNavbarCmp.jsx"
import { WebAppBtnCmp } from "./WebAppBtnCmp.jsx"
import { WebAppImgCmp } from "./WebAppImgCmp.jsx"

export function DynamicCmp({ cmp, currCmp, onDeleteCmp, onSetCurrCmp, onDuplicateCmp, onUpdateCmp }) {



    function getCmp(type) {
        switch (type) {
            case 'section':
                return <WebAppSectionCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} />
            case 'txt':
                return <WebAppTxtCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} />
            case 'navbar':
                return <WebAppNavbarCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} />
            case 'btn':
                return <WebAppBtnCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} />
            case 'img':
                return <WebAppImgCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmp={onUpdateCmp} />
            default:
                console.log('if U got here, things got messed up')
        }
    }

    return (
        getCmp(cmp.type)
    )
}