import React from 'react'
import '../index'
import greek from '../assets/greek salad.jpg'
import lemon from '../assets/lemon dessert.jpg'
import rest from '../assets/restaurant chef B.jpg'
import Card from './Card'
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
        {
          cards.map((dish) => {
           return  <Card title={dish.title} price={dish.price} description={dish.desc} image={dish.image} />
          })
        }
      </div>
    </div>
  )
}

export default Main