import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import Navbar from './components/common/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Categories from './components/Categories'
import Trending from './components/Trending'
import Service from './components/Service'
import Blog from './components/Blog'
import Accordian from './components/Accordian'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Cart from './components/Cart'


function App() {

  return (
    <Routes>
      <Route path="/" element={
        <div>
          <Header />
          <Navbar />
          <Hero />
          <Featured />
          <Categories />
          <Trending />
          <Service />
          <Blog />
          <Accordian />
          <Newsletter />
          <Footer />
        </div>
      } />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
