import React from 'react'
import { Button } from '@mui/material';
import './Buttons.css';
import Menu from '../Menu.js';
import { useState } from 'react';
const Buttons = () => {

    const [showMenu, setShowMyMenu] = useState(false);
  
    const handleButtonClick = () => {
      setShowMyMenu(!showMenu);
    };
  return (
    <div className="buttons">

     <Button variant="contained" className="Order-OnlineButton" onClick={handleButtonClick}>Order Online!</Button>
     {/* {showMenu && <Menu/>} */}
     <Button variant="contained" className="Dine-InButton">Dine In</Button>
    </div>
 )
}

export default Buttons;
