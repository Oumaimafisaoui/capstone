import React from 'react'
import '../index'
import greek from '../assets/greek salad.jpg'
import lemon from '../assets/lemon dessert.jpg'
import rest from '../assets/restaurant chef B.jpg'
// import icon from ''
const cards = [
  {
    title: "Greek salad",
    desc: "Antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt.",
    price : "12.99$",
    image: greek,
  },
  {
    title: "Lemon desert",
    desc: "Antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt.",
    price : "13.99$",
    image: lemon,

  },
  {
    title: "Vegis Salad",
    desc: "Antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt.",
    price : "15.99$",
    image: rest,
  }
]
const Main = () => {
  return (
    <div className='main'>
      <div className='title-main'>
          <div className='headline'>This week specials!</div>
          <button className='btn-menu'>Online Menu</button>
      </div>
      <div className='cards'>
          <div className='card'>
          <img src={greek} alt="greek" className='image-main'>
          </img>
          <div className='body-main'>
            <div className='body-card'>
              <div>Greek salad</div>
              <div>12.99$</div>
            </div>
            <div className='para-card'>
            <div>
            Variations may include toppings of tomato, vegetables, beans, cured meat, or cheese. In Italy, bruschetta is often prepared using a brustolina grill.
            </div>
            <div className='bottom'>
<div>
  Order Delivery
</div>
{/* <img src={icon} alt="icon"></img> */}
            </div>
            </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Main