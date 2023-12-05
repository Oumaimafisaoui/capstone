import React, {useEffect, useReducer, useState} from 'react'
import BookingForm from './BookingForm'
import Layout from './Layout'
import { fetchAPI } from '../api';



async function updateTimes(availableTimes, action)
{
  switch(action.type)
  {
    case 'SET_DATE':
      try {
      
        const date = action.payload;
        const newAvailableTimes = await fetchAPI(date);
        return { ...availableTimes, select: date, times: newAvailableTimes };
      } catch (error) {
        console.log('Error fetching available times:', error);
        return availableTimes; 
      }
    default:
      return availableTimes;
  }
}


const BookingPage = () => {

  const [first, setFirst] = useState([])

  useEffect(() =>
  {
     initializeTimes();
  }, [])


  async function initializeTimes()
  {
      try {
      const date = new Date();
      const times = await fetchAPI(date); 
      setFirst(times);
      console.log(times);
    } catch (error) {
      console.error('Error fetching available times:', error);
      // Handle the error appropriately, e.g., show an error message to the user
    }
  }
  

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