import React from "react"
import "./Tours.css"

const TourDetail = (props) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="img"></img>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  )
}

const tours = [
  {
    heading: "🇯🇵 Japan Classic Highlights",
    text: "Explore Tokyo, Kyoto, and Osaka with a perfectly balanced itinerary covering iconic sights, culture, and cuisine.",
    image:
      "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    heading: "🇨🇳 Beijing & Xi’an Heritage Tour",
    text: "Walk the Great Wall and see the Terracotta Warriors — a deep dive into China’s ancient civilizations.",
    image:
      "https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    heading: "🇹🇭 Thailand Island & City Combo",
    text: "Combine Bangkok’s vibrant energy with relaxing island vibes in Phuket or Krabi.",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const Tours = (props) => {
  return (
    <div className="trip">
      <h1>{props.header}</h1>
      <p>{props.subheader}</p>
      <div className="tripcard">
        {tours.map((t) => (
          <TourDetail {...t} />
        ))}
      </div>
    </div>
  )
}

export default Tours
