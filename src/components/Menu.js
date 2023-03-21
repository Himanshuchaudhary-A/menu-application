import React from 'react'
import { Fragment } from 'react';
import Blankfood from '../assets/Blank_Food.jpg';
import '../components/Menu.css';
const Menu = () => {
    return (
        <Fragment>
            <header className="header">
                <h1>Cake Shake</h1>
            </header>
            
            <div className="main-image">
             <img src={Blankfood} alt ='food'/>
            </div>
        </Fragment>

    )
}

export default Menu