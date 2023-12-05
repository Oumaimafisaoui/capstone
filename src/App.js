import {React} from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import BookingPage from './components/BookingPage';
import Home from './components/Home';


const App = ()  =>{

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
    </Routes>
  ) 
}

export default App;
