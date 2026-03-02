
import './ManageNetwork.css'
import { FaUserFriends, FaUser, FaCalendarAlt, FaBuilding,FaNewspaper  } from "react-icons/fa";
import { MdGroups, MdEvent } from "react-icons/md";
function ManageNetwork(){
    return(
        <>

        <div className="manage-network-box">

         <header className='header'>
        <h3>Manage my network</h3>
        </header>

    <ol className='list-of-items'>

       <li className='item'>
  <div className="right">
    <FaUserFriends />
    Connections
  </div>
  <div className="left">
    <span>438</span>
  </div>
</li>

<li className='item'>
  <div className="right">
    <FaUser />
    Following & Followers
  </div>
</li>

<li className='item'>
  <div className="right">
    <MdGroups />
    Groups
  </div>
</li>

<li className='item'>
  <div className="right">
    <MdEvent />
    Events
  </div>
</li>

<li className='item'>
  <div className="right">
    <FaBuilding />
    Pages
  </div>
</li>

<li className='item'>
  <div className="right">
    <FaNewspaper />
    Newsletters
  </div>
</li>

    </ol>

        </div>
         
        </>
    )
}
export default ManageNetwork