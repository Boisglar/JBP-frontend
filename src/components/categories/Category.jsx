import React from 'react'
import laptop from './photo-category/laptop.png'
import styles from '../categories/category.module.scss'
import watch from './photo-category/watch.png'
import wphones from './photo-category/wphones.png'
import tablet from './photo-category/tablet.png'

<<<<<<< HEAD
export default function Category () {
    return (
        <div className={styles.category_main}>
            <h2 className={styles.main_text}>Shop our latest offers and categories</h2>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor.
                Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul>
                <div className={styles.upper_ul}>
                    <div className={styles.laptop_div}>
                        <img className={styles.photo} src={laptop} alt="" />

                        <li className={styles.true_laptop}>True Laptop Solution</li>
=======
export default function Category
() {
  return (
    <category className={styles.category_main}>
    
        <h2 className={styles.main_text}>Наши последние предложения и категории</h2>
        <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. 
            Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className={styles.div_ul}>
                <div className={styles.upper_ul}>
                    <div className={styles.laptop_div}>
                    <img className={styles.photo} src={laptop} alt="" />
                    
                        <li className={styles.true_laptop}>Настоящее решение для ноутбука</li>
>>>>>>> main
                    </div>
                    <div className={styles.watch_div}>
<<<<<<< HEAD
                        <img className={styles.photo} src={watch} alt="" />
                        <li className={styles.watch_text}>Not just stylisht</li>
=======

                    <img className={styles.photo} src={watch} alt="" />
                        <li className={styles.watch_text}>Не просто стильный</li>

>>>>>>> main
                    </div>
                </div>
                <div className={styles.under_div}>
                    <div className={styles.wphones_div}>
<<<<<<< HEAD
                        <img className={styles.photo} src={wphones} alt="" />
                        <li class={styles.wphones_text}>Your day to day life</li>
=======

                    <img className={styles.photo} src={wphones} alt="" />
                        <li class={styles.wphones_text}>Ваша повседневная жизнь</li>
>>>>>>> main
                    </div>
                    <div className={styles.tablet_div}>
                        <li className={styles.tablet_text}>Расширьте возможности</li>
                        <img className={styles.photo4} src={tablet} alt="" />
                    </div>
                </div>
            </ul>
        </div>
    )
}
