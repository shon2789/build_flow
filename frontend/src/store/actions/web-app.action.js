
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

