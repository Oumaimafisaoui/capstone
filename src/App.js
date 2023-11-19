import {React, useState} from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import BookingPage from './components/BookingPage';
import Home from './components/Home';

const App = ()  =>{
  const [availableTimes, setAvailableTimes] = useState([]);
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />} />
    </Routes>
  ) 
}

export default App;
