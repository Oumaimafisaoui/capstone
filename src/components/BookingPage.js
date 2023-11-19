import React from 'react'
import BookingForm from './BookingForm'
import Layout from './Layout'

const BookingPage = ({availableTimes , dispatch}) => {
  return (
    <div className='container'>
    <Layout>
      <div className='booking'>
      <div className='title-book'>
         Booking online:
      </div>
      <div className=''>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
      </div>
    </Layout>
    </div>
  )
}

export default BookingPage