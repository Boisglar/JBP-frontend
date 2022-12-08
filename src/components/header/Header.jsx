import React from 'react'
import img from './photo/search.png'
import img2 from './photo/basket.jpg'
import styles from './header.module.css'
import { NavLink } from 'react-router-dom'
// import styles from './header.module.scss'


    

const Header = () => {
  return (
    <header className={styles.header_start}>
      <h3>GROZNY</h3>
      <ul className={styles.ul_div}>
        <NavLink to = "/products"  className={styles.main}>ALL PRODUCTS </NavLink>
        <NavLink to = "/noPage" className={styles.main}>SOLUTIONS </NavLink>
        <NavLink to = "/about" className={styles.main}>ABOUT </NavLink>
        <NavLink to = "/comparison" className={styles.main}>SUPPORT </NavLink>
      </ul>
      <div className={styles.header_end}>
        <img className={styles.search} src={img} alt="" />
        <img className={styles.basket} src={img2} alt="" />
      </div>
    </header>

  )
}

export default Header
