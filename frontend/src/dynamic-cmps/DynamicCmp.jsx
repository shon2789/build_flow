
import { WebAppSectionCmp } from "./WebAppSectionCmp"
import { WebAppTxtCmp } from "./WebAppTxtCmp.jsx"
import { WebAppNavbarCmp } from "./WebAppNavbarCmp.jsx"
import { WebAppBtnCmp } from "./WebAppBtnCmp.jsx"
import { WebAppImgCmp } from "./WebAppImgCmp.jsx"

export function DynamicCmp({ cmp, onDeleteCmp }) {
    function getCmp(type) {
        switch (type) {
            case 'section':
                return <WebAppSectionCmp cmp={cmp} onDeleteCmp={onDeleteCmp} />
            case 'txt':
                return <WebAppTxtCmp cmp={cmp} onDeleteCmp={onDeleteCmp} />
            case 'navbar':
                return <WebAppNavbarCmp cmp={cmp} onDeleteCmp={onDeleteCmp} />
            case 'btn':
                return <WebAppBtnCmp cmp={cmp} onDeleteCmp={onDeleteCmp} />
            case 'img':
                return <WebAppImgCmp cmp={cmp} onDeleteCmp={onDeleteCmp} />
            default:
                console.log('if U got here, things got messed up')
        }
    }

    return (
        getCmp(cmp.type)
    )
}