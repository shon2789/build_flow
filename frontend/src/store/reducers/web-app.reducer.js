



const initialState = {
    webApps: [],
}



export const webAppReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_WEBAPPS':
            return state = { ...state, webApps: action.webApps }
        default:
            return state
    }
}