import { httpService } from "./http.service";
import { localStorageService } from "./storage.service";


const STORAGE_KEY_LOGGEDIN = "loggedinUser";

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
};


async function login(credentials) {
    try {
        const user = await httpService.post(`/api/auth/login`, credentials)
        localStorageService.saveToStorage(STORAGE_KEY_LOGGEDIN, user);
        return user
    } catch (err) {
        console.log(err);
    }
}


async function signup(credentials) {
    try {
        const user = await httpService.post(`/api/auth/signup`, credentials)
        localStorageService.saveToStorage(STORAGE_KEY_LOGGEDIN, user);
        return user

    } catch (err) {
        console.log(err);
    }
}

async function logout() {
    try {
        await httpService.post(`/api/auth/logout`)
        localStorageService.removeFromStorage(STORAGE_KEY_LOGGEDIN);

    } catch (err) {
        console.log(err);
    }
}


async function getLoggedinUser() {
    const loggedInUser = localStorageService.loadFromStorage(STORAGE_KEY_LOGGEDIN)
    try {
        const user = await httpService.get(`/api/user/${loggedInUser._id}`)
        localStorageService.saveToStorage(STORAGE_KEY_LOGGEDIN, user);
        return user
    } catch (err) {
        console.log(err);
    }
}

