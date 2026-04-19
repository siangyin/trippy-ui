import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

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
    cls: "nav-links",
  },
]

const NavBar = () => {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>

      <ul className="nav-menu">
        {navItems.map((n, i) => (
          <li key={i} className={n.cls}>
            <i className={n.icon}></i>
            <Link to={n.href}>{n.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
