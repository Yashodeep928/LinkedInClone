import { Link } from "react-router-dom";
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
  return (
    <>
        <nav className="navbar">

          <div className="nav-left">

           <div className="logo">
           <Link to="/"><img src="..." alt="LOGO" /></Link>
           </div>
           
           <form className="search-bar">
             <input type="search" placeholder="Search" aria-label="Search" />
            </form>

           <ul className="nav-links">
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

  <li className="profile-item">
    <img src="profile.jpg" alt="Profile" className="profile-img" />
    <button className="profile-btn">Me</button>
  </li>
</ul>


          </div>
  <div className="nav-right">
  <ul className="right-nav-links">

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
</div>

        </nav>

      
    
    </>
  )
}

export default Navbar