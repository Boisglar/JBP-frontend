import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../features/cart.slice'
import { addCompare } from '../../../features/compare.slice'
import styles from "../phoneCards/Card.module.scss"

function PhoneCard({ item }) {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart.productId)
  const valid = products.find((element) => element.productId === item._id)

  const handleCompare = (id) => {
      dispatch(addCompare(id))
  }

  const handleCart = (id) => {
    if (!valid) {
      dispatch(addToCart(id))
    }
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
          <button className={styles.buttonBasket} onClick={() => handleCart(item._id)}>КУПИТЬ</button>
          <button className={styles.buttonCompare} onClick={() => handleCompare(item._id)}>СРАВНИТЬ</button>
        </div>
      </div>
  )
}
export default PhoneCard