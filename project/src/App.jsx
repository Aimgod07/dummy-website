import { useState } from 'react'
import './App.css'
import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Samples from './components/Samples'
import AboutUs from './components/AboutUs'
import Ticket from './components/Ticket'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/buynow" element={<Ticket />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  )
}

export default App
