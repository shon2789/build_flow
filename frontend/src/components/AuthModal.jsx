import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

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
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(5),
        },
    },
}));

export const AuthModal = ({ handleClose }) => {


    const [isLogin, setIsLogin] = useState(true)
    const classes = useStyles();
    const { handleSubmit, control } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    const switchAuth = () => {
        setIsLogin(!isLogin)
    }


    return (
        <>

            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>

                {!isLogin &&
                    <Controller
                        name="fullName"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Full name"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{ required: 'First name required' }}
                    />
                }
                <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            label="User name"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                    rules={{ required: 'Last name required' }}
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
                            helperText={error ? error.message : null}
                            type="password"
                        />
                    )}
                    rules={{ required: 'Password required' }}
                />
                <div style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "3rem",

                }} >

                    <Button style={{
                        margin: "0",
                        width: "12.5rem",
                        backgroundColor: "#292929",
                    }} type="submit" variant="contained" color="primary">
                        Continue As Guest
                    </Button>
                    {isLogin ?
                        <Button style={{
                            margin: "0",
                            width: "6rem",
                            backgroundColor: "#292929",
                        }} type="submit" variant="contained" color="primary">
                            Login
                        </Button>
                        :
                        <Button style={{
                            margin: "0",
                            width: "6rem",
                            backgroundColor: "#292929",
                        }} type="submit" variant="contained" color="primary">
                            Sign Up
                        </Button>

                    }
                </div>
                {isLogin ?
                    <p className="auth-form-txt">Need an account? <span onClick={switchAuth}>Sign Up</span> </p>
                    :
                    <p className="auth-form-txt">Have an account? <span onClick={switchAuth}>Login</span> </p>
                }
            </form>

        </>
    );
};