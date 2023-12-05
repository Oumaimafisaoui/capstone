import React, {useEffect, useReducer, useState} from 'react'
import BookingForm from './BookingForm'
import Layout from './Layout'



function updateTimes(availableTimes, action)
{
  switch(action.type)
  {
    case 'SET_DATE':
        return {...availableTimes, select: action.payload};
    default:
      return availableTimes;
  }
}


const BookingPage = () => {
  const [first, setFirst] = useState({})

  useEffect(() =>
  {
      const date = new Date().toISOString().split('T')[0];
      setFirst({select: date});
  }, []);


  const [availableTimes, dispatch] = useReducer(updateTimes, first);
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