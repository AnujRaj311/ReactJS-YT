import React from 'react'
import styles from '../header/Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Anuj Raj</h3>
      <button className='btn'>Login</button>
    </div>
  )
}

export default Header
