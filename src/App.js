import React from 'react';
import { Routes, Route, createBrowserRouter } from "react-router-dom"
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Card from './components/Card';
import Testimonials from './components/Testimonials';
import Chicago from './components/Chicago';
import Layout from './components/Layout';




function App() {
  return (
    <div className='container'>
    <Layout>
    <Header/>
    <Main/>
    <Testimonials/>
    <Chicago/>
    </Layout>
    </div>
  ) 
}

export default App;
