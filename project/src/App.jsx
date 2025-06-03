
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Samples from './pages/Samples'
import AboutUs from './pages/AboutUs'
import Ticket from './pages/Ticket'
import Footer from './components/Footer'
import axios from 'axios'

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
    
      </Router>
    </>
  )
}

export default App;
