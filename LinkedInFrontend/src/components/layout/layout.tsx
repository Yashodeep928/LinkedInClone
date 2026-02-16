import ProfileCard from "../../pages/home/profileCard"
import Message from "../Messaging/Message"
import Navbar from "../Navbar/Navbar"
import "./layout.css"
function Layout (){
    return(
    
     <>

     <div className="layoutheader">

        <div className="mainheader">
        <Navbar/>
        </div>

        <div className="messagingSection">
            <Message/>
        </div>

        <div className="profileSection">
            <ProfileCard/>
        </div>

     </div>


    </>
    
)
}

export default Layout