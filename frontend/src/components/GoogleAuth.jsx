import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../services/refresh-token-setup.service';
import { store } from 'react-notifications-component';
import { userService } from '../services/user.service';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions/user.action';
// refresh token

const clientId =
    '705339567682-tmahsuufu2r3kvk142ve3jcridnr7p0m.apps.googleusercontent.com';

export const GoogleAuth = ({ onToggleAuthModal }) => {

    const dispatch = useDispatch()
    const onSuccess = async (res) => {
        const credentials = {
            fullname: res.profileObj.name,
            username: res.profileObj.email,
            password: res.profileObj.googleId,
            isGoogle: true
        }
        refreshTokenSetup(res);
        onToggleAuthModal(false)

        const user = await userService.signup(credentials)
        if (user) {
            dispatch(setUser())

            store.addNotification({
                message: "Logged in seccessfully!",
                type: "success",
                insert: "top",
                container: "top-right",
                fontFamily: "Lato regular,sans-serif",
                animationIn: ["animate__animated", "animate__backInRight"],
                animationOut: ["animate__animated", "animate__backOutRight"],
                dismiss: {
                    duration: 2000,
                    onScreen: true
                }
            });
        }
    };

    const onFailure = (res) => {

        store.addNotification({
            message: "Something went wrong",
            type: "danger",
            insert: "top",
            container: "top-right",
            fontFamily: "Lato regular,sans-serif",
            animationIn: ["animate__animated", "animate__backInRight"],
            animationOut: ["animate__animated", "animate__backOutRight"],
            dismiss: {
                duration: 2000,
                onScreen: true
            }
        });
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={false}
            />
        </div>
    );
}