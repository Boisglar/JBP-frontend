import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhone } from '../../features/phone.slice'
import styles from "../phoneCards/Card.module.scss"
export default function PhoneCards() {
  const phones = useSelector((state) => state.phones)
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(getPhone())
  }, [dispatch])
  
  return (
    <div className={styles.Cards}>
        {phones.map((item) => {
          return(
          <div className={styles.Card} key={item._id}>
          <div className={styles.image}>
              <img src={`http://localhost:4000${item.image[0]}`} alt={item.image[0]} />
          </div>
          <div className={styles.phoneDescription}>
              <h3 className={styles.name}>{item.manufacturer}</h3>
              <span>{item.model}</span>
              <div className={styles.description}>
                {item.specification.memory.ram} <br />
                {item.specification.memory.rom} <br />
                {item.specification.battery}
                </div>
              <div className={styles.price}>{item.price} руб</div>
          </div>
          <div className={styles.buttons}>
          <button className={styles.buttonBasket}> Basket</button>
          <button className={styles.buttonCompare}>Compare</button>
          </div>
       </div>
          )
        })}
    </div>
  )
}
