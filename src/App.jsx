import React from "react"
import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import TourPage from "./pages/TourPage"
import ContactPage from "./pages/ContactPage"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tours" element={<TourPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
