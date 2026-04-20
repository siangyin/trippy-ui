import React from "react"
import "./AboutUs.css"

const content = [
  {
    header: "🌍 Discover the world, your way.",

    body: "At Trippy, we believe travel should be more than just visiting places — it should be about experiencing cultures, creating memories, and discovering new perspectives. We specialize in thoughtfully curated land tours across Asia, designed for travelers who want authentic, seamless, and meaningful journeys.",
  },
  {
    header: "🕰️ Our History",
    body: `Trippy was founded with a simple idea: to make exploring Asia easier, more accessible, and more enriching for travelers from around the world.

What started as a passion for travel and storytelling has grown into a platform that connects global travelers with carefully selected tour experiences. By working closely with trusted local operators in each destination, we bring together the best of each country — from iconic landmarks to hidden gems — all in one place.`,
  },
  {
    header: "🎯 Our Mission",
    body: `To create unforgettable travel experiences by offering high-quality, well-curated tours that are seamless, reliable, and tailored to modern travelers.

We aim to remove the stress of planning, so our customers can focus on what truly matters — enjoying the journey.`,
  },
  {
    header: "🌟 Our Vision",
    body: `To become a trusted global travel platform for discovering Asia — known for quality, authenticity, and exceptional customer experience.

We envision a future where travelers can explore the world with confidence, knowing every journey is thoughtfully designed and backed by local expertise.`,
  },
]

const AboutUs = () => {
  return (
    <div className="about-container">
      {content.map((p) => (
        <>
          <h1>{p.header}</h1>
          <p>{p.body}</p>
        </>
      ))}
    </div>
  )
}

export default AboutUs
