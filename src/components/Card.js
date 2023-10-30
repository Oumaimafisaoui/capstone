import React from 'react'
import bike from '../assets/bike.svg'

const Card = ({title, price, description, image}) => {
  return (
    <div className='card'>
    <img src={image} alt="iamge" className='image-main'>
    </img>
    <div className='body-main'>
      <div className='body-card'>
        <div className='title-card'>{title}</div>
        <div className='price'>{price}</div>
      </div>
      <div className='para-card'>
      <div className='text'>
      {description}
      </div>
      <div className='bottom'>
      <div>
        Order Delivery
      </div>
      <img className='bike' src={bike} alt="icon"></img>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Card