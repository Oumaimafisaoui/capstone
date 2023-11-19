import React from 'react'
import Header from './Header'
import Main from './Main'
import Testimonials from './Testimonials';
import Chicago from './Chicago';
import Layout from './Layout';

const Home = () => {
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

export default Home