const initialState = {
    cmps: [],
}



export const cmpReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_CMPS':

            return state = { ...state, cmps: action.cmps }
        default:
            return state
    }
}