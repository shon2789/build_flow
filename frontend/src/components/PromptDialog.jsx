import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';


export const PromptDialog = ({ open, handleDialog }) => {

  const [ans, setAns] = useState('');

  const handleChange = (ev) => {
    setAns(ev.target.value)
  }

  return (
    <div >
      <Dialog open={open}>
        <DialogTitle>Name your project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="project-name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "#5289bd" }} onClick={() => { handleDialog(ans) }}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}
