
import { cmpService } from "../../services/cmp.service"

// COMPONENTS
export const loadCmps = (filterBy = {}) => {
    return async dispatch => {
        try {
            const cmps = await cmpService.getCmps(filterBy)
            dispatch({
                type: "SET_CMPS",
                cmps
            })

        } catch (err) {
            console.log(err);
        }
    }
}

