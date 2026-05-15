
import './ManageNetwork.css'
import { FaUserFriends, FaUser, FaBuilding,FaNewspaper  } from "react-icons/fa";
import { MdGroups, MdEvent } from "react-icons/md";
function ManageNetwork(){
    return(
        <>

        <div className="manage-network-box">

         <header className='header'>
        <h3>Manage my network</h3>
        </header>

    <ol className='list-of-items'>

       <li className='manage-network-item'>
  <div className="manage-network-label">
    <FaUserFriends />
    Connections
  </div>
  <div className="manage-network-count">
    <span>438</span>
  </div>
</li>

<li className='manage-network-item'>
  <div className="manage-network-label">
    <FaUser />
    Following & Followers
  </div>
</li>

<li className='manage-network-item'>
  <div className="manage-network-label">
    <MdGroups />
    Groups
  </div>
</li>

<li className='manage-network-item'>
  <div className="manage-network-label">
    <MdEvent />
    Events
  </div>
</li>

<li className='manage-network-item'>
  <div className="manage-network-label">
    <FaBuilding />
    Pages
  </div>
</li>

<li className='manage-network-item'>
  <div className="manage-network-label">
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
