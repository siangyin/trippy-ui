import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import AboutUs from "../components/AboutUs"

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImage="https://plus.unsplash.com/premium_photo-1664908364593-729f67b1a0e4?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="About"
        btnClass="hide"
      />

      <AboutUs />
      <Footer />
    </div>
  )
}

export default AboutPage
