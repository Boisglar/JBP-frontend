import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCompare } from '../../../features/compare.slice'
import { getPhone } from '../../../features/phone.slice'
import styles from "../phoneCards/Card.module.scss"


function PhoneCards() {
const phones = useSelector((state) => state.phones.phones)
const dispatch = useDispatch()

const handleCompare = (id) => {
  dispatch(addCompare(id))
}

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
        <button className={styles.buttonCompare} onClick={() => handleCompare(item._id)}>Compare</button>
        </div>
      </div>
        )
      })}
  </div>
)
}
export default PhoneCards