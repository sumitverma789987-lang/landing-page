import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import Navbar from './components/common/Navbar'
import Hero from './components/Sections/Hero'
import Featured from './components/Sections/Featured'
import Categories from './components/Sections/Categories'
import Trending from './components/Sections/Trending'
import Service from './components/Sections/Service'
import Blog from './components/Sections/Blog'
import Accordian from './components/Sections/Accordian'
import Newsletter from './components/Sections/Newsletter'
import Footer from './components/Sections/Footer'
import Cart from './components/common/Cart'


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
