import React from 'react'
import BookingForm from './BookingForm'
import Layout from './Layout'

const BookingPage = ({setAvailableTimes , availableTimes}) => {
  return (
    <div className='container'>
    <Layout>
      <div className='booking'>
      <div className='title-book'>
         Booking online:
      </div>
      <div className=''>
        <BookingForm setAvailableTimes={setAvailableTimes} availableTimes={availableTimes} />
      </div>
      </div>
    </Layout>
    </div>
  )
}

export default BookingPage