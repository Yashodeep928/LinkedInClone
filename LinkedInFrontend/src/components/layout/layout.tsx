import NewsCard from "../../pages/home/NewsCard"
import ProfileCard from "../../pages/home/profileCard"
import SearchBar from "../../pages/home/searchBar"
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

        <div className="mainContent">

            <div className="profileSection">
            <ProfileCard/>
        </div>


        <div className="middleSection">
            <SearchBar/>
        </div>

        <div className="rightSection">
            <NewsCard/>
        </div>



        </div>

       



     </div>


    </>
    
)
}

export default Layout