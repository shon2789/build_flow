import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& .MuiTextField-root': {
      width: '270px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
    },
    '& .MuiInputBase-input': {
      color: '#f0eeee'
    },
    '& .MuiFormHelperText-root': {
      color: '#c6c6c6'
    }
  },
}));

export const PromptDialog = ({ open, handleDialog }) => {

  const [ans, setAns] = useState('');
  const classes = useStyles();
  const handleChange = (ev) => {
    setAns(ev.target.value)
  }


  return (
    <div >
      <Dialog open={open}
        PaperProps={{
          style: {
            backgroundColor: '#2b3039',
            color: '#f0eeee',
            width: '20rem',
            borderRadius: '5px',
          },
        }}
        className={classes.root}
      >
        <DialogTitle>Name your project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter project name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            InputLabelProps={{
              style: { color: '#c6c6c6' },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button style={{ backgroundColor: '#141923', color: "#f0eeee", padding: '0.3rem 0.5rem', borderRadius: '4px' }} onClick={() => { handleDialog(ans) }}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}
