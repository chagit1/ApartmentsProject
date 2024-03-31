import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { Box } from '@mui/system';
import { GetByNumOfBadEqual } from './api';


export const Booking = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [numBad, setNumBad] = useState()
    const handleClickOpen = (event) => {
        setNumBad(event)
        // const user = {
            // email: event.target[0].value,
        // GetByNumOfBadEqual(numBad)
        // .then(response => {
        //     if(response!=null)

        //     console.log(x);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
              setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
         to invent 
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Enter how many beds you need "}
          </DialogTitle>
        <form onSubmit={(e) => handleClose(e)}>

          {/* <DialogContent> */}
            <Box
                
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}>
    {/* <DialogContentText> */}
          <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
    </Box> 
    <Button className='buttenSend' type='submit' variant="text">invent</Button>
            <br></br>
        </form>
           
            {/* </DialogContentText> */}
          {/* </DialogContent> */}
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
            cancel 
            </Button>
            {/* <Button onClick={handleClose} autoFocus>
              invent
            </Button> */}
          </DialogActions>
        </Dialog>
        </React.Fragment>
    );
  }
  