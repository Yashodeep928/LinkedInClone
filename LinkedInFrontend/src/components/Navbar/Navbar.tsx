import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaEnvelope,
  FaBell,
  FaBusinessTime
} from "react-icons/fa";
import './Nav.css'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const openLinks = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="navbar">
      <div className="nav-container">

        {/* Left Section */}
        <div className="nav-left">

          <div className="logo">
            <Link to="/">
              <img src="/src/assets/linkedinlogo.png" alt="LOGO" />
            </Link>
          </div>

          <form className="search-bar">
            <input type="search" placeholder="Search" aria-label="Search" />
          </form>

        </div>

        {/* Right Section */}
        <ul className={`nav-right ${isOpen ? "active" : ""}`}>

          <li>
  <Link to="/" className="nav-link">
    <FaHome />
    <span>Home</span>
  </Link>
</li>

<li>
  <Link to="/network" className="nav-link">
    <FaUserFriends />
    <span>My Network</span>
  </Link>
</li>

<li>
  <Link to="/jobs" className="nav-link">
    <FaBriefcase />
    <span>Jobs</span>
  </Link>
</li>

<li>
  <Link to="/messaging" className="nav-link">
    <FaEnvelope />
    <span>Messaging</span>
  </Link>
</li>

<li>
  <Link to="/notifications" className="nav-link">
    <FaBell />
    <span>Notifications</span>
  </Link>
</li>

          <li className="navbar-item">
            <img src="/src/assets/Yashodeep.JPG" alt="Profile" />
            <button className="navbar-btn">Me</button>
          </li>

          <li className="business-item">
            <button className="business-btn">
              <FaBusinessTime className="nav-icon" />
              <span>
                For Business <span className="caret">▾</span>
              </span>
            </button>
          </li>

          <li>
            <Link to="/premium" className="premium-link">
              Try Premium for ₹0
            </Link>
          </li>

        </ul>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={openLinks}>
          ☰
        </button>

      </div>
    </div>
  )
}

export default Navbar