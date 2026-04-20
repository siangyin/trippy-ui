import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import ContactForm from "../components/ContactForm"

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImage="https://plus.unsplash.com/premium_photo-1663076518116-0f0637626edf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Contact"
        btnClass="hide"
      />

      <ContactForm />
      <Footer />
    </div>
  )
}

export default ContactPage
