import React from 'react'
import { Carousel } from 'react-bootstrap'
import iphone14pro from "./img/ayfon-12-pro-maks-2560x1440-ayfon-12-pro-maks-23066 (1).jpg"
import macbook from "./img/macbook-pro-13-inch (1).jpg"
import image3 from "./img/thumb-1920-1174774 (1).jpg"
import s from "./Carousel.module.scss"



export default function CarouselBox() {
  return (
    <div className={s.carouselInner}>
      <Carousel>
        <Carousel.Item>
          <img src={iphone14pro} alt=""
          className='d-block w-100' 
          />
         <Carousel.Caption>
          <h3>web developer blog</h3>
          <p>do od nostrud est aliqua</p>
         </Carousel.Caption>
        
        </Carousel.Item>
        <Carousel.Item>
          <img src={macbook} alt=""
          className='d-block w-100'
          />
         <Carousel.Caption>
          <h3>web developer blog</h3>
          <p>do od nostrud est aliqua</p>
         </Carousel.Caption>
        
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} alt=""
          className='d-block w-100'
          />
         <Carousel.Caption>
          <h3>web developer blog</h3>
          <p>do od nostrud est aliqua</p>
         </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}
