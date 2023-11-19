import {React, useReducer} from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import BookingPage from './components/BookingPage';
import Home from './components/Home';

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

function  initializeTimes()
{
  return {select : null};
}


const App = ()  =>{
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
    </Routes>
  ) 
}

export default App;
