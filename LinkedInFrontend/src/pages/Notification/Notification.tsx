import Footer from "../../components/Footer/Footer"
import ProfileCard from "../home/profileCard/profileCard"
import Content from "./content/Content"

function Notification() {

  return (

    <>

<div className="profileSection">
    <ProfileCard/>
</div>


<div className="middleSection">
    <Content/>

</div>

<div className="rightSection">
    <Footer/>
</div>



 

    
    
    </>


  )
}

export default Notification