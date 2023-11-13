import React from 'react'

const BookingForm = () => {
  return (
    <div>
  <form className='formBooking'>
   <label className="label-book" htmlFor="res-date">Choose date</label>
   <input className='input-book' type="date" id="res-date"/>
   <label className="label" htmlFor="res-time">Choose time</label>
   <select className='input-book' id="res-time">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label className="label" htmlFor="guests">Number of guests</label>
   <input className='input-book' type="number" placeholder="1" min="1" max="10" id="guests"/>
   <label className="label"  htmlFor="occasion">Occasion</label>
   <select className='input-book' id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input className='submit' type="submit" value="Make Your reservation"/>
  </form>
    </div>
  )
}

export default BookingForm