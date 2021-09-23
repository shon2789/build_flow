
import { WebAppHeaderCmp } from "../editable-cmps/WebAppHeaderCmp"

export function DynamicCmp({ cmp }) {
    function getCmp(type) {
        switch (type) {
            case 'header':
                return <WebAppHeaderCmp cmp={cmp} />
            case '':
                return
        }
    }

    return (
        getCmp(cmp.type)
    )
}