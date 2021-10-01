import { httpService } from "./http.service";


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
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
        return user

    } catch (err) {
        console.log(err);
    }
}


async function signup(credentials) {
    console.log("credentials", credentials);

    try {
        const user = await httpService.post(`/api/auth/signup`, credentials)
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
        return user

    } catch (err) {
        console.log(err);
    }
}

async function logout() {
    try {
        await httpService.post(`/api/auth/logout`)
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null);

    } catch (err) {
        console.log(err);
    }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN));
}