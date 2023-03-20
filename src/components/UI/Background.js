import React from 'react'
import './Background.css';
import WelcomeMessage from './WelcomeMessage';
import Buttons from './Buttons';
const Background = () => {
  return (
    <div>
    <div class="context">
    <h1><WelcomeMessage/></h1>
    <Buttons/>
</div>



</div>

  )
}

export default Background