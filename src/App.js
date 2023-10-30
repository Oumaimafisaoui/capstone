import React from 'react';
import { Routes, Route, createBrowserRouter } from "react-router-dom"
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Card from './components/Card';
import Testimonials from './components/Testimonials';


const router = createBrowserRouter([
 {

 },
 {

 },
 {

 },
 {
  
 } 
])



function App() {
  return (
    <div className='container'>
    <Nav/>
    <Header/>
    <Main/>
    <Testimonials/>
    <Footer/>
    </div>
  ) 
}

export default App;
