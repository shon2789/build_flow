
import { cmpService } from "../../services/cmp.service"

// COMPONENTS
export const loadCmps = () => {
    return async dispatch => {
        try {
            const cmps = await cmpService.query()
            dispatch({
                type: "SET_CMPS",
                cmps
            })

            return cmps

        } catch (err) {
            console.log(err);
        }
    }
}

