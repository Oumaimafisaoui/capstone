import {React, useState} from 'react'

const BookingForm = ({setAvailableTimes , availableTimes}) => {


  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);
  const [occasion, setOccasion] = useState('');


  function submitForm(e)
  {
    e.preventDefault();
    console.log(availableTimes, time, people, occasion)
  }

  return (
    <div>
  <form className='formBooking' onSubmit={submitForm}>
   <label className="label-book" htmlFor="res-date">Choose date</label>
   <input className='input-book' type="date" id="res-date" onChange={(e) => setAvailableTimes(e.target.value)}/>
   <label className="label" htmlFor="res-time">Choose time</label>
   <select className='input-book' id="res-time" onChange={(e) => setTime(e.target.value)}>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label className="label" htmlFor="guests">Number of guests</label>
   <input className='input-book' type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setPeople(e.target.value)}/>
   <label className="label"  htmlFor="occasion">Occasion</label>
   <select className='input-book' id="occasion" onChange={(e) => setOccasion(e.target.value)}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input className='submit' type="submit" value="Make Your reservation"/>
  </form>
    </div>
  )
}

export default BookingForm