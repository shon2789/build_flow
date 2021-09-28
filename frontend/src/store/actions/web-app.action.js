
import { webAppService } from "../../services/web-app.service";

// TEMPLATES
export const loadWebApps = (filterBy = {}) => {
    return async dispatch => {
        try {
            const webApps = await webAppService.query(filterBy)
            dispatch({
                type: "SET_WEBAPPS",
                webApps
            })

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
            return webApp;
        } catch (err) {
            console.log(err);
        }
    }
}

export const clearCurrWebApp = () => {
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
