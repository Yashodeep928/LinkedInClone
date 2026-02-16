
import './profileCard.css'
import { Link } from 'react-router-dom';

function ProfileCard (){
    return(
        <>
<div className="card">


     <div className="profile-card">

            <Link className='links' to ="/profile">

               <div className="profile-wrapper">

               <img className='banner-img' src="/src/assets/spacex.png" alt="" />

             <img className='profile-img' src="/src/assets/Yashodeep.JPG" alt="" />
            
               </div>
              

            <div className="profile-info">
                <h3>Yashodeep Deshpande</h3>
                <p>Aspiring Software Engineer | React • JavaScript | Turning Ideas into</p>
                <address>Chhatrapati Sambhajinagar, Maharashtra</address>
            </div>


            </Link>

             <button className='profile-card-btn'>+ Experince</button>


        </div>
</div>
       
        </>
    )
}

export default ProfileCard;