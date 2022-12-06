import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import style from "./About.module.scss"

export default function YandexMap() {
  return (
    <div className={style.Map}> 
    
      <YMaps>
        <Map defaultState={{ center: [43.324675, 45.692376], zoom: 12 }} width={"100%"} height={"300px"}>
          <Placemark defaultGeometry={[43.324675, 45.692376]}/> 
        </Map>
      </YMaps>
    </div>
  )
}
