import React from 'react'
import styles from './Background.module.css'
import WelcomeMessage from './WelcomeMessage';
import Buttons from './Buttons';
const Background = () => {
  return (
    <div>
    <div className={styles.homepagebody} >
    <h1><WelcomeMessage/></h1>
    <Buttons/>
</div>



</div>

  )
}

export default Background