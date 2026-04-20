import React from "react"
import "./Destination.css"

const DestinationData = (props) => {
  return (
    <div className={props.className}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img alt="img" src={props.img1} />
        <img alt="img" src={props.img2} />
      </div>
    </div>
  )
}

const popularSites = [
  {
    className: "first-des",
    heading: "🇯🇵 Japan",
    text: "From serene shrines to neon-lit streets, Tokyo offers a dynamic contrast of old and new. Indulge in world-class sushi, explore unique neighborhoods like Shibuya and Asakusa, and experience a city that constantly surprises at every turn.",
    img1: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img2: "https://images.unsplash.com/photo-1549139433-c3d632588d07?q=80&w=667&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    className: "first-des-reverse",
    heading: "🇰🇷 South Korea",
    text: "A city where tradition meets trend — discover royal palaces by day and buzzing night markets after sunset. Shop the latest fashion in Myeongdong, enjoy authentic Korean BBQ, and immerse yourself in the heart of K-culture.",
    img1: "https://plus.unsplash.com/premium_photo-1661948404806-391a240d6d40?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img2: "https://images.unsplash.com/photo-1729533035374-444c3b649634?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>
        Explore our most-loved destinations across Asia — from vibrant cities to
        hidden gems, all carefully curated for unforgettable journeys.
      </p>
      {popularSites.map((s) => (
        <DestinationData {...s} />
      ))}
    </div>
  )
}

export default Destination
