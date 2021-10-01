import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { userService } from '../services/user.service';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions/user.action';
import { useHistory } from 'react-router';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),


        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
            color: "white",

        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(5),
        },
    },
}));

export const AuthModal = ({ setIsAuthModalOpen }) => {


    const [isLogin, setIsLogin] = useState(true)
    const dispatch = useDispatch()
    const history = useHistory()

    const classes = useStyles();
    const { handleSubmit, control } = useForm();

    const onSubmit = async data => {

        try {
            if (isLogin) {
                const user = await userService.login(data)
            } else {
                const user = await userService.signup(data)
            }
            dispatch(setUser())
            history.push('/user')
            setIsAuthModalOpen(false)

        } catch (err) {
            console.log(err);
        }

    };

    const switchAuth = () => {
        setIsLogin(!isLogin)
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
                                name="fullName"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
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

                        gap: "10px",
                        marginTop: "3rem",
                        position: "absolute",
                        bottom: "3rem",

                    }} >

                        <div style={{
                            display: "flex",
                            gap: "10px",

                        }}>


                            <Button style={{
                                margin: "0",
                                width: "12.5rem",
                                backgroundColor: "#141923",
                            }} type="submit" variant="contained" color="primary">
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