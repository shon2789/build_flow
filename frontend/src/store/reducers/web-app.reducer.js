import { cloneDeep } from "lodash"
import { cmpService } from "../../services/cmp.service";
import { utilService } from "../../services/util.service";




const initialState = {
    webApps: [],
    currWebApp: []
}



export const webAppReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_WEBAPPS':
            return state = { ...state, webApps: action.webApps }
        case 'SET_WEBAPP':
            return state = { ...state, currWebApp: action.webApp }
        case 'CLEAR_WEBAPP':
                return state = {...state, currWebApp: []}
        default:
            return state
    }
}