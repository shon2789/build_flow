
import { WebAppSectionCmp } from "./WebAppSectionCmp"
import { WebAppTxtCmp } from "./WebAppTxtCmp.jsx"
import { WebAppNavbarCmp } from "./WebAppNavbarCmp.jsx"
import { WebAppBtnCmp } from "./WebAppBtnCmp.jsx"
import { WebAppImgCmp } from "./WebAppImgCmp.jsx"

export function DynamicCmp({ cmp, currCmp, onDeleteCmp, onSetCurrCmp, onDuplicateCmp, onUpdateCmpStyle }) {


    function getCmp(type) {
        switch (type) {
            case 'section':
                return <WebAppSectionCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmpStyle={onUpdateCmpStyle} />
            case 'txt':
                return <WebAppTxtCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmpStyle={onUpdateCmpStyle} />
            case 'navbar':
                return <WebAppNavbarCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmpStyle={onUpdateCmpStyle} />
            case 'btn':
                return <WebAppBtnCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmpStyle={onUpdateCmpStyle} />
            case 'img':
                return <WebAppImgCmp cmp={cmp} currCmp={currCmp} onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} onDuplicateCmp={onDuplicateCmp} onUpdateCmpStyle={onUpdateCmpStyle} />
            default:
                console.log('if U got here, things got messed up')
        }
    }

    return (
        getCmp(cmp.type)
    )
}