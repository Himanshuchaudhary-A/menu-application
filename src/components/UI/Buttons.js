import React from 'react'
import { Button } from '@mui/material';
import './Buttons.css';
const Buttons = () => {
  return (
    <div className='buttons'>

     <Button variant="contained" className='Order-OnlineButton'>Order Online!</Button>
     
     <Button variant="contained" className='Dine-InButton'>Dine In</Button>
    </div>
 )
}

export default Buttons;
