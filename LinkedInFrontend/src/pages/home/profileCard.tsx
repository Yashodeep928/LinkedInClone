
import './profileCard.css'
import { Link } from 'react-router-dom';

function ProfileCard (){
    return(
        <>
<div className="card">


     <div className="profile-card">



            <Link className='links' to ="/profile">

              <div className="banner-img">
               Banner <img src="banner" alt="" />
            </div>

            <div className="profile-img">
             Profile Image  <img src="profile" alt="" />
            </div>

            <div className="profile-info">
                <h3>Yashodeep Deshpande</h3>
                <p>Aspiring Software Engineer | React • JavaScript | Turning Ideas into</p>
                <address>Chhatrapati Sambhajinagar, Maharashtra</address>
            </div>
            </Link>

             <button className='btn'>+ Experince</button>


        </div>
        



</div>
       
        </>
    )
}

export default ProfileCard;