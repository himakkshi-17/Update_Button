import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField, InputLabel, InputAdornment } from '@material-ui/core';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Security</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To update any security, please fill the following details.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="Security ID"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Security Name"
            type="name"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="buying_date"
            label="Buying Date"
            type="date"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* An empty element to occupy the space where the default placeholder would be */}
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="maturity_Date"
            label="Maturity Date"
            type="date"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* An empty element to occupy the space where the default placeholder would be */}
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
