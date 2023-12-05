import {React, useState} from 'react'
import {submitAPI} from '../api'

import { useNavigate } from "react-router-dom";

const BookingForm = ({availableTimes , dispatch}) => {

  const [time, setTime] = useState('');
  const [people, setPeople] = useState(0);
  const [occasion, setOccasion] = useState('');
  const [confirmed, setConfirmed] = useState(true)

  function submitForm(e)
  {
    e.preventDefault();
      const data = {
        time, 
        people,
        occasion,
        availableTimes
      }
      const submit = submitAPI(data);
      console.log(`submit: ${submit}`, availableTimes)
      setConfirmed(true)
  }

    const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    dispatch({ type: 'SET_DATE', payload: selectedDate});
  };


  const navigate = useNavigate();

  return (
    !confirmed ?
    (
 <div>
 <form className='formBooking' onSubmit={submitForm}>
  <label className="label-book" htmlFor="res-date">Choose date</label>
  <input className='input-book' type="date" id="res-date" onChange={handleDateChange} required={true}/>
  <label className="label" htmlFor="res-time">Choose time</label>
  <select className='input-book' id="res-time" onChange={(e) => setTime(e.target.value)} required={true}>
     <option>17:00</option>
     <option>18:00</option>
     <option>19:00</option>
     <option>20:00</option>
     <option>21:00</option>
     <option>22:00</option>
  </select>
  <label className="label" htmlFor="guests">Number of guests</label>
  <input className='input-book' type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setPeople(e.target.value)} required={true}/>
  <label className="label"  htmlFor="occasion">Occasion</label>
  <select className='input-book' id="occasion" onChange={(e) => setOccasion(e.target.value)} required={true}>
     <option>Birthday</option>
     <option>Anniversary</option>
  </select>
  <input className='submit' type="submit" value="Book Now"/>
 </form>
   </div>
    ):
    (
      <div className='confirmation'>
      <div>
      <div>Booking Confirmed thank you !</div>
      <button className="but" onClick={() => navigate("/")}>Go to home.</button>
      </div>
      </div>
    )
  )
}

export default BookingForm