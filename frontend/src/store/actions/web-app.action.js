
import { webAppService } from "../../services/web-app.service";

// TEMPLATES
export const loadWebApps = () => {
    return async dispatch => {
        try {
            const webApps = await webAppService.query()
            dispatch({
                type: "SET_WEBAPPS",
                webApps
            })
            return webApps



        } catch (err) {
            console.log(err);
        }
    }
}

export const loadWebApp = (webAppId) => {
    return async dispatch => {
        try {
            const webApp = await webAppService.getById(webAppId)


            dispatch({
                type: "SET_WEBAPP",
                webApp
            })
            console.log(webApp, 'webApp action');
            return webApp;
        } catch (err) {
            console.log(err);
        }
    }
}

export const setWebApp = (webApp) => {
    return dispatch => {
        try {
            dispatch({
                type: "SET_WEBAPP",
                webApp
            })
        } catch (err) {
            console.log(err);
        }
    }
}



export const clearLoadedWebApp = () => {
    return async dispatch => {
        try {
            dispatch({
                type: "CLEAR_WEBAPP"
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const saveWebApp = (webApp) => {
    return async dispatch => {
        try {
            await webAppService.save(webApp)
        } catch (err) {
            console.log(err)
        }
    }
}
