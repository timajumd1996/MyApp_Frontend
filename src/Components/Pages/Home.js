import React from 'react';
// import Navbar from '../Customer/Navbar';
import AppCarousel from '../Basics/AppCarousel';
import About from '../Basics/About';
import '../css/carousel.css';
import Footer from '../Basics/Footer';
import Category from '../Basics/Category';
import Cart from '../Customer/Cart';

const Home = () => {
  return (
    <div>
        <div className='carousel-container'>
            <AppCarousel />
        </div>
        <div className='category-container'>
            <Category />
        </div>
        <div className='about-container'>
            <About />
        </div>
        <div className='footer-container'>
            <Footer />
        </div>
        <div className='cart-container'>
            <Cart />
        </div>
    </div>
  )
}

export default Home

