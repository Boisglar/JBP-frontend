import React from 'react'
import { useDispatch } from 'react-redux'
import { addCompare } from '../../../features/compare.slice'
import styles from "../phoneCards/Card.module.scss"

function PhoneCard({ item }) {
  const dispatch = useDispatch()

  const handleCompare = (id) => {
    dispatch(addCompare(id))
  }
  return (
      <div className={styles.Card} key={item._id}>
        <div className={styles.image}>
          <img className={styles.photo} src={`http://localhost:4000${item.image[0]}`} alt={item.image[0]} />
        </div>
        <div className={styles.phoneDescription}>
          <h3 className={styles.name}>{item.manufacturer}</h3>
          <span className={styles.model}>{item.model}</span>
          <div className={styles.description}>
            <div className={styles.memory}>
              {item.specification.memory.ram}-/-
              {item.specification.memory.rom}
            </div>
            <div className={styles.battery}>
              {item.specification.battery}
            </div>
          </div>
          <div className={styles.price}>{item.price} руб</div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.buttonBasket}>КУПИТЬ</button>
          <button className={styles.buttonCompare} onClick={() => handleCompare(item._id)}>СРАВНИТЬ</button>
        </div>
      </div>
  )
}
export default PhoneCard