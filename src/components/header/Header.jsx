import React from 'react'
import img from './photo/search.png'
import img2 from './photo/basket.jpg'
 import styles from './header.module.css'


export default function Header() {
  return ( 
    


       <header className={styles.header_start}>
    <h3>GROZNY</h3>
    <ul className={styles.ul_div}>
        <li className={styles.main}>ALL PRODUCTS</li>
        <li className={styles.main}>SOLUTIONS</li>
        <li className={styles.main}>ABOUT</li>
        <li className={styles.main}>SUPPORT</li>
    </ul>
    
    <div className={styles.header_end}>
    <img className={styles.search} src={img} alt="" />
    <img className={styles.basket} src={img2} alt="" />
 
    </div>
    
    
    </header> 
    
  )
}
