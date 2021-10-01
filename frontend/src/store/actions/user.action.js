import { userService } from "../../services/user.service"


// COMPONENTS
export const setUser = () => {
    return async dispatch => {
        try {
            const user = await userService.getLoggedinUser() || null
            dispatch({
                type: "SET_USER",
                user
            })
            return user
        } catch (err) {
            console.log(err);
        }
    }
}

