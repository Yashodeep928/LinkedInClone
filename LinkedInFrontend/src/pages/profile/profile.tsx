import { Pencil } from "lucide-react"
import "./profile.css"
function profile() {
  return (
    <>
    <div className="profile-section">

      <div className="profile-left">

        <div className="profile-summary">

          <img className="banner" src="Banner" alt="my banner image" />
          <img className="profile-pic" src="ProfilePic" alt="my profile picture"/>

          <button type="button">Edit</button>


          <div className="profile-title">
            <h3>Yashodeep Deshpande</h3>
             <p>Full Stack Developer | Building scalable web applications for businesses | Responsive UIs, API integration custom      components | Next.js typescript GoLang Chhatrapati Sambhajinagar, Maharashtra, IndiaContact info</p>

             <button>M.G.M's Jawaharlal Nehru College of Engineering</button>
          </div>

          <div className="profile-btns">

            <button>Open to</button>
            <button>Add Section</button>
            <button>Enhance Profile</button>
            <button>---</button>


            <div className="profile-carousel">

              <button>Prev</button>

               <div className="card"></div>
               <div className="card"></div>
               <div className="card"></div>
               <div className="card"></div>

              <button>Next</button>

            </div>
             
          </div>

        </div>

        <div className="profile-analytics">
          <h3>Analytics</h3>
          <button>Show All</button>
        </div>

        <div className="profile-about">
          <h3>About</h3>

        </div>

        <div className="profile-activity">


          <div className="activity-header">

            <div className="activity-header-info">
              <h2>Activity</h2>
              <button>526 follwers</button>
              <button>Post</button>
              <button>Comments</button>
              <button>Videos</button>
              <button>Images</button>

            </div>
            

            <div className="activity-btn-group">
                <button>Create Post</button>
                <button>Edit</button>
            </div>
          
          </div>
          
        </div>

        <div className="profile-experince">

          <div className="experince-section-header">

            <h3>Experince</h3>

            <div className="experince-btn-group">
              <button>+</button>
              <button><Pencil/></button>
            </div>

            <div className="experince-details">
              <img src="" alt="" />
              <div className="experince-profile-details">
                <h3>Software Enginner</h3>
                <p>
                  Bharat Software Labs · Full-time Jun 2026 - Present · 2 mos   Aurangabad,  Maharashtra, India · On-site
                  Front-End Development and Software Infrastructure
                </p>
              </div>
            </div>


          </div>

        </div>



        <div className="profile-education">
             <div className="profile-education-details">
               <h3>Education</h3>
                <div className="university">
                  <img src="" alt="" />
                  <p>M.G.M's Jawaharlal Nehru College of Engineering,Master of Computer Applications - MCA</p>
                </div>
             </div>

        </div>

        <div className="profile-projects">
          <h3>Projects</h3>
          
        </div>

        <div className="profile-skills">
          <h3>Skills</h3>
          
        </div>

        <div className="profile-interest">
          <h3>Interest</h3>
        
      </div>

     

      </div>

      <div className="profile-right">

      </div>


      

     

    </div>
    

    
    </>
  )
}

export default profile