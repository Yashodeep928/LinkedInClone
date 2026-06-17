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
  const [modal,setModal] = useState(false)
  const [businessModal,setBusinessModal] = useState(false)

  const openLinks = () => {
    setIsOpen(prev => !prev);
  }

  const OpenMe = () =>{
    setModal(prev => !prev )
  }

  const OpenBusinessModal = () =>{
    setBusinessModal(prev => !prev)
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

          <li onClick={OpenMe} className="navbar-item">
            <img src="/src/assets/Yashodeep.JPG" alt="Profile" />
            <button className="navbar-btn">Me</button>
          </li>

          <li className="business-item">
            <button className="business-btn">
              <FaBusinessTime className="nav-icon" />
              <span>
               <button onClick={OpenBusinessModal} type="button">For Business <span className="caret">▾</span></button> 
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


      {
        modal && (
          <div className="profile-modal">


           <div className="modal-profile-info">   

            <div className="profile-details">

              <img className="image" src="/Yashodeep.JPG" alt="my image" />
              
              <div className="title">
                <p>Full Stack Developer | Building scalable web applications for businesses | Responsive UIs, API integrations, custom components | Next.js typescript GoLang</p>
              </div>

            </div>
            
            <div className="view-profile-btn">

                <Link to="/profile">
                  <button>View Profile</button>
                </Link>

            </div>
          
           </div>

           <div className="account-info">
             <h4>Account</h4>
             <Link to="/settings">Settings & Privacy</Link>
             <Link to="/help">Help</Link>
             <Link to="/language">Language</Link>
           </div>

           <div className="manage-info">
             <h4>Manage</h4>
             <Link to="/post">Post & Activity</Link>             
             <Link to="/job-post">Job Posting Account</Link>             

           </div>

           <button className="sign-out-btn" type="button">Sign out</button>
    

          </div>
        )
      }


      {
        businessModal && 

        <div className="business-modal">

          <div className="modal-container">

          <div className="my-apps">

          <h2>My Apps</h2>

          <li>Sell</li>
          <li>Groups</li>
          <li>Hire with AI</li>
          <li>Talent Insights</li>
          <li>Services Marketplace</li>

         </div>

         <div className="explore-business">

          <h2>Explore more for business</h2>


          <li>Hire for LinkedIn</li>
          <li>Sell with LinkedIn</li>
          <li>Post a Job for free</li>

           

         </div>

          </div>
         
         

        </div>

        
      }




    </div>
  )
}

export default Navbar