import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import AuthModal from "./AuthModal"

const navItems = [
  { title: "Home", href: "/", icon: "fa-solid fa-house", cls: "nav-links" },
  {
    title: "About",
    href: "/about",
    icon: "fa-solid fa-circle-info",
    cls: "nav-links",
  },
  {
    title: "Tours",
    href: "/tours",
    icon: "fa-solid fa-suitcase",
    cls: "nav-links",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: "fa-solid fa-envelope",
    cls: "nav-links",
  },
  {
    title: "Sign Up",
    href: "/sign-up",
    icon: "fa-solid fa-user",
    cls: "nav-links-mobile",
  },
]

const NavBar = () => {
  const [clicked, setClicked] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authInitialTab, setAuthInitialTab] = useState("login")

  const clickHandler = () => {
    setClicked(!clicked)
  }

  const handleSignupClick = () => {
    setAuthInitialTab("signup")
    setAuthModalOpen(true)
    setClicked(false)
  }

  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">Trippy</h1>

      <div className="menu-icons" onClick={clickHandler}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {navItems.map((n, i) => (
          <li key={i}>
            <Link className={n.cls} to={n.href}>
              <i className={n.icon}></i>
              {n.title}
            </Link>
          </li>
        ))}

        <button onClick={handleSignupClick} className="nav-btn">
          <i className={"fa-solid fa-user"}></i>Sign Up
        </button>
      </ul>

      <AuthModal
        isOpen={authModalOpen}
        initialTab={authInitialTab}
        onClose={() => setAuthModalOpen(false)}
      />
    </nav>
  )
}

export default NavBar
