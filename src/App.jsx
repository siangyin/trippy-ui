import React from "react"
import { Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import AboutUs from "./components/AboutUs"
import Trip from "./components/Trip"
import ContactForm from "./components/ContactForm"

const App = () => {
  return (
    <div className="App">
      <NavBar />
      App
      <Routes>
        {/* <Route path="/" element={<Hero />} />
        <Route path="/destination" element={<Destination />} /> */}
        <Route path="/tours" element={<Trip />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  )
}

export default App
