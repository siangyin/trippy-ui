import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Destination from "../components/Destination"
import Tours from "../components/Tours"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero
        cName="hero"
        heroImage="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        url="/"
        btnClass="show"
        buttonText="Travel Plan"
      />

      <Destination />
      <Tours
        header="Traveler Favorites"
        subheader="Our most loved tours, rated highly by travelers for unforgettable experiences, great value, and seamless journeys."
      />
      <Footer />
    </div>
  )
}

export default Home
