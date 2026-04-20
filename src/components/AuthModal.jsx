import React, { useState } from "react"
import { createPortal } from "react-dom"
import "./AuthModal.css"

const AuthModal = ({ isOpen, onClose, initialTab = "signup" }) => {
  const [activeTab, setActiveTab] = useState(initialTab || "signup")
  const [formData, setFormData] = useState({
    loginContact: "",
    loginPassword: "",
    signupName: "",
    signupContact: "",
    signupPassword: "",
    signupConfirm: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleGoogleAuth = (mode) => {
    console.log("Google auth:", mode)
  }

  if (!isOpen) return null

  return createPortal(
    <div className="auth-modal-overlay" onClick={onClose}>
      <div
        className="auth-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="auth-modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="auth-content">
          {/* SIGNUP SECTION - DEFAULT */}
          <div
            className={`auth-section ${activeTab === "signup" ? "active" : ""}`}
          >
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="signupName"
                  placeholder="Enter your full name"
                  value={formData.signupName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email or Phone</label>
                <input
                  type="text"
                  name="signupContact"
                  placeholder="Enter email or phone"
                  value={formData.signupContact}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="signupPassword"
                  placeholder="Create a password"
                  value={formData.signupPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="signupConfirm"
                  placeholder="Confirm your password"
                  value={formData.signupConfirm}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary btn-signup">
                Sign Up
              </button>
            </form>

            <div className="divider">OR</div>

            <button
              className="btn-google"
              onClick={() => handleGoogleAuth("signup")}
            >
              <i className="fab fa-google"></i> Sign up with Google
            </button>
          </div>

          {/* LOGIN SECTION */}
          <div
            className={`auth-section ${activeTab === "login" ? "active" : ""}`}
          >
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email or Phone</label>
                <input
                  type="text"
                  name="loginContact"
                  placeholder="Enter email or phone"
                  value={formData.loginContact}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="loginPassword"
                  placeholder="Enter your password"
                  value={formData.loginPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary">
                Login
              </button>

              <a href="#!" className="forgot-link">
                Forgot Password?
              </a>
            </form>

            <div className="divider">OR</div>

            <button
              className="btn-google"
              onClick={() => handleGoogleAuth("login")}
            >
              <i className="fab fa-google"></i> Login with Google
            </button>
          </div>
        </div>

        {/* UNIFIED ACCOUNT TOGGLE BAR - ALWAYS VISIBLE */}
        <div className="account-toggle">
          {activeTab === "signup" ? (
            <>
              <span>Already have an account?</span>
              <button
                className="toggle-btn"
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
            </>
          ) : (
            <>
              <span>Don't have an account?</span>
              <button
                className="toggle-btn"
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default AuthModal
