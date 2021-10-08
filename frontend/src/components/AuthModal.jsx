import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { userService } from '../services/user.service';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions/user.action';
import { GoogleAuth } from './GoogleAuth';
import { alertMessage } from '../services/alert.service'
import { utilService } from '../services/util.service';




const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),

        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(5),
        },
        '& .MuiInputBase-input': {
            color: '#f0eeee'
        },
        '& .MuiFormHelperText-root': {
            color: '#c6c6c6'
        }
    },
}));



export const AuthModal = ({ onToggleAuthModal }) => {

    const [isLogin, setIsLogin] = useState(true)
    const dispatch = useDispatch()
    const classes = useStyles();
    const { handleSubmit, control } = useForm();

    const onSubmit = async data => {


        let user = null;
        try {
            if (isLogin) {
                user = await userService.login(data)
            } else {
                user = await userService.signup(data)
            }

            if (!user) {
                alertMessage('Invalid username or password', 'danger', 2500)

            } else {
                dispatch(setUser())
                // Add notification
                alertMessage('Logged in successfully', 'success', 2000)
                onToggleAuthModal(false)
            }

        } catch (err) {
            console.log(err);
        }
    };

    const switchAuth = () => {
        setIsLogin(!isLogin)
    }

    const guestSignUp = async (ev) => {

        ev.preventDefault()

        const data = {
            username: `guest-${utilService.makeId(5)}`,
            password: utilService.makeId(10),
            fullname: "Guest Ghost"
        }

        let user = null;
        try {
            user = await userService.signup(data)

            if (!user) {
                alertMessage('Something went wront', 'danger', 2500)

            } else {
                dispatch(setUser())
                alertMessage('Logged in successfully as guest', 'success', 2500)
                onToggleAuthModal(false)
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="auth-modal-container">
            <div className="auth-form-container">
                <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        {!isLogin &&
                            <Controller
                                name="fullname"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                        InputLabelProps={{
                                            style: { color: '#c6c6c6' },
                                        }}
                                        label="Full name"
                                        value={value}
                                        color="success"
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                    />
                                )}
                                rules={{ required: 'Full name required' }}
                            />
                        }
                        <Controller
                            name="username"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    InputLabelProps={{
                                        style: { color: '#c6c6c6' },
                                    }}
                                    label="Username"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{ required: 'Username required' }}
                        />
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    InputLabelProps={{
                                        style: { color: '#c6c6c6' },
                                    }}
                                    label="Password"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={!isLogin && 'Password required (4-12 characters)'}
                                    type="password"
                                />
                            )}
                            rules={{ required: 'Password required (4-12 characters)', minLength: 4, maxLength: 12 }}
                        />
                    </div>
                    <div style={{
                        gap: "5px",
                        marginTop: "3rem",
                        position: "absolute",
                        bottom: "1rem",
                    }} >
                        <div style={{
                            display: "flex",
                            gap: "10px",
                        }}>
                            <Button style={{
                                margin: "0",
                                width: "12.5rem",
                                backgroundColor: "#141923",
                            }} type="submit" variant="contained" color="primary" onClick={guestSignUp}>
                                Continue As Guest
                            </Button>
                            {isLogin ?
                                <Button style={{
                                    margin: "0",
                                    width: "6rem",
                                    backgroundColor: "#141923",
                                }} type="submit" variant="contained" color="primary">
                                    Login
                                </Button>
                                :
                                <Button style={{
                                    margin: "0",
                                    width: "6rem",
                                    backgroundColor: "#141923",
                                }} type="submit" variant="contained" color="primary">
                                    Sign Up
                                </Button>


                            }
                        </div>
                        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", marginTop: "1rem" }}>
                            <GoogleAuth onToggleAuthModal={onToggleAuthModal} />
                        </div>

                        <div style={{
                            textAlign: "center"
                        }}>

                            {isLogin ?
                                <p className="auth-form-txt">Need an account? <span onClick={switchAuth}>Sign Up</span> </p>
                                :
                                <p className="auth-form-txt">Have an account? <span onClick={switchAuth}>Login</span> </p>
                            }
                        </div>
                    </div>
                </form>
            </div>

        </div>

    );
};