import React, { forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AlertDialog = ({ open, handleDialog }) => {

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Unsaved project was found"}</DialogTitle>
                <DialogContent >
                    <DialogContentText id="alert-dialog-slide-description">
                        Would you like to resume your project?
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <Button style={{ color: "royalblue", padding: "10px" }} onClick={() => { handleDialog(false) }}>Start New</Button>
                    <Button style={{ color: "royalblue", padding: "10px" }} onClick={() => { handleDialog(true) }}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>

    );
}