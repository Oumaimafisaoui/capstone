import React from 'react'

export const TestimonialCard = ({name, rating, text, image}) => {
  return (
    <div className='CardTest'>
        <div className='rating'>{rating}</div>
        <div className='body-test'>
            <img src={image} alt="image" className='image-test'/>
            <div className='name-test'>{name}</div>
        </div>
        <div className='text-test'>
            {text}
      
        </div>
    </div>
  )
}
