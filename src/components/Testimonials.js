import React from 'react'
import { TestimonialCard } from './TestimonialCard'
import person from '../assets/him.jpeg'
import personOne from  '../assets/hiim.jpeg'
import personTwo from  '../assets/hiiim.jpeg'
const Test = [
    {
        rating: "5/5",
        name:"Tom Berry",
        text:"Amazing restaurent...",
        image: person
    },
    {
        rating: "4/5",
        name:"Tim Wahs",
        text:"I love the food...",
        image: personOne

    },
    {
        rating: "5/5",
        name:"Frild loko",
        text:"I love the service...",
        image: personTwo

    },
    {
        rating: "5/5",
        name:"Frild loko",
        text:"I love the service...",
        image: personTwo

    },
]

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className='head'>Testimonials</div>
        <div className='says'>
            {
                Test.map((test, index) =>
                {
                    return <TestimonialCard rating={test.rating} key={index} name={test.name} text={test.text} image={test.image}/>
                })
            }
        </div>
    </div>
  )
}

export default Testimonials