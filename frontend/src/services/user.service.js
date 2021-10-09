import { httpService } from "./http.service"

const STORAGE_KEY_LOGGEDIN = "loggedinUser"

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
}


async function login(credentials) {
    try {
        const user = await httpService.post(`/api/auth/login`, credentials)
        // localStorageService.saveToStorage(STORAGE_KEY_LOGGEDIN, user)
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        return user
    } catch (err) {
        console.log(err)
    }
}


async function signup(credentials) {

    try {
        const user = await httpService.post(`/api/auth/signup`, credentials)
        // localStorageService.saveToStorage(STORAGE_KEY_LOGGEDIN, user)
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        return user

    } catch (err) {
        console.log(err)
    }
}

async function logout() {
    try {
        await httpService.post(`/api/auth/logout`)
        // localStorageService.removeFromStorage(STORAGE_KEY_LOGGEDIN)
        sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)

    } catch (err) {
        console.log(err)
    }
}


async function getLoggedinUser() {
    // const loggedInUser = localStorageService.loadFromStorage(STORAGE_KEY_LOGGEDIN)
    const loggedInUser = JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
    if (!loggedInUser) return null
    try {
        const user = await httpService.get(`/api/user/${loggedInUser._id}`)
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        return user
    } catch (err) {
        console.log(err)
    }
}

