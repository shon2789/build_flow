
const initialState = {
    webApps: [],
    loadedWebApp: []
}


export const webAppReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_WEBAPPS':
            return state = { ...state, webApps: action.webApps }
        case 'SET_WEBAPP':
            return state = { ...state, loadedWebApp: action.webApp }
        case 'CLEAR_WEBAPP':
            return state = { ...state, loadedWebApp: [] }
        default:
            return state
    }
}