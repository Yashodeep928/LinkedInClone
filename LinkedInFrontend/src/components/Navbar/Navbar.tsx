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
import { Users, Briefcase, ShoppingBag, UserPlus } from "lucide-react";

import './Nav.css'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [modal,setModal] = useState(false)
  const [businessModal,setBusinessModal] = useState(false)
  const [premiumModal,setPremiumModal] = useState(false)

  const openLinks = () => {
    setIsOpen(prev => !prev);
  }

  const OpenMe = () =>{
    setModal(prev => !prev )
  }

  const OpenBusinessModal = () =>{
    setBusinessModal(prev => !prev)
  }

  const showPremiumModal = ( )=>{
    setPremiumModal((prev)=>(!prev))

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

               <button className="for-business" onClick={OpenBusinessModal} type="button">
                <span>For Business</span>
                <span className="caret">▾</span>
                </button>

              </span>
            </button>
          </li>

          <li>
            <button onClick={showPremiumModal} className="premium-link">
              Try Premium for ₹0
            </button>
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

          <h3>My Apps</h3>
         <ul className="my-list">
  <li>
    <ShoppingBag size={18} />
    Sell
  </li>

  <li>
    <Users size={18} />
    Groups
  </li>

  <li className="talent">
    <span className="sub-heading">Talent</span>
    <ul className="talent-ul">
      <li>
        <UserPlus size={16} />
        Hire with AI
      </li>
      <li>
        <Briefcase size={16} />
        Talent Insights
      </li>
    </ul>
  </li>

  <li className="Sales">
    <span className="sub-heading">Sales</span>
    <ul className="sales-ul">
      <li>
        <ShoppingBag size={16} />
        Services Marketplace
      </li>
    </ul>
  </li>
   
</ul>
          

         </div>

         <div className="explore-business">

          <h3>Explore more for business</h3>

          <ul className="my-business-list">

          <li>Hire for LinkedIn <span>Find, attract and recruit talent</span></li>
          
          <li>Sell with LinkedIn <span>Unlock sales opportunities</span></li>
          <li>Post a Job for free <span>Find Quality Candidates</span></li>
          <li>Advertise on linkedin <span>Acquire customers and grow your business</span></li>
          <li>Get Started with premium <span>Expand and leverage your network</span></li>
          <li>learn on linkedin <span>courses to develop your employess</span></li>
          <li>Admin Center <span>Manage Billing and Account Details</span></li>
          </ul>
         </div>

          </div>
        </div> 
      }




      {
        premiumModal && (
          <div></div>
        )
      }
    </div>
  )
}

export default Navbar