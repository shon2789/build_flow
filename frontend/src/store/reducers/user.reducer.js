import { localStorageService } from "../../services/storage.service"

const initialState = {
    loggedInUser: localStorageService.loadFromStorage('loggedinUser') || null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return state = { ...state, loggedInUser: action.user }
        default:
            return state
    }
}