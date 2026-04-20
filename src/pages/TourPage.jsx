import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Tours from "../components/Tours"

const TourPage = () => {
  return (
    <div>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImage="https://plus.unsplash.com/premium_photo-1683306661472-d7bd9497c82a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Tours"
        btnClass="hide"
      />

      <Tours
        header="Best Selling"
        subheader="Our best selling tours, rated highly by travelers for unforgettable experiences, great value, and seamless journeys."
      />
      <Footer />
    </div>
  )
}

export default TourPage
