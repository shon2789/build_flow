
import { WebAppSectionCmp } from "./WebAppSectionCmp"
import { WebAppTxtCmp } from "./WebAppTxtCmp.jsx"
import { WebAppNavbarCmp } from "./WebAppNavbarCmp.jsx"
import { WebAppBtnCmp } from "./WebAppBtnCmp.jsx"
import { WebAppImgCmp } from "./WebAppImgCmp.jsx"

export function DynamicCmp({ cmp }) {
    function getCmp(type) {
        switch (type) {
            case 'section':
                return <WebAppSectionCmp cmp={cmp} />
            case 'txt':
                return <WebAppTxtCmp cmp={cmp} />
            case 'navbar':
                return <WebAppNavbarCmp cmp={cmp} />
            case 'btn':
                return <WebAppBtnCmp cmp={cmp} />
            case 'img':
                return <WebAppImgCmp cmp={cmp} />
            default:
                console.log('if U got here, things got messed up')
        }
    }

    return (
        getCmp(cmp.type)
    )
}