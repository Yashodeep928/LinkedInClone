
import "./Message.css"
import { FaCaretDown, FaCaretUp,FaEdit, FaEllipsisH, FaTimes} from 'react-icons/fa';
import { FiZoomIn, FiZoomOut } from 'react-icons/fi';

import { useState ,useRef } from "react";

function Message (){

    const contentRef = useRef(null)
    const [open,setOpen] = useState(false);
    const [openDialog,setopenDialog] = useState(false)

  const Dialog = ()=>{
    setopenDialog(!openDialog)

  }
    const togglebtn = ()=>{
         setOpen(!open)        
    }

    const dummyData = [
  {
    id: 1,
    name: "Nidhi Pimpalkar",
    title: "Junior Software Developer | Building Production-Grade Systems",
    image: "image"
  },
  {
    id: 2,
    name: "Onkar Budrukkar",
    title: "Software Engineer at Zensar Technologies",
    image: "image"
  }
];

    return(
        <>
           
               <div className="container"> 

                <div className="mainHeader">

                    <div className="left">
                    <img className="image" src="/src/assets/Yashodeep.JPG" alt="" />
                    <span className="msgs">Messaging</span>
                    </div>


                    <div className="right">

                        <button className="btn"><FaEllipsisH/></button>
                        <button onClick={Dialog} className="btn"><FaEdit/></button>
                        <button onClick={togglebtn}className="btn">{open ? <FaCaretUp /> : <FaCaretDown />}</button>

                    </div>
                </div>


                       <div ref={contentRef} className={`secondHeader ${open ? "active" : ""}`}>
                       <input placeholder="Search messages" type="search" />
                        </div>


                        { openDialog &&
                        <div ref={contentRef} className="dialogbox">

                           <div className="header">
                            <h4>New Messages</h4>
                                
                           <div className="icons">
                            <span><FiZoomIn/></span>
                            <button onClick={()=> setopenDialog(false)} className="closeBtn"><span><FaTimes/></span></button>
                           </div>
                            
                           </div>
                           <div className="Searchbar">
                           <input type="Searchbar" placeholder="Type a name or multiple names" />

                           </div>

                        <div className="suggested-container">
                            <h3>Suggested</h3>
                        </div>   
                            <ul className="suggested-list">


                                {
                                    dummyData.map((person)=>(
                                   <li className="suggested-item">

                                  <div className="listimage">
                                    {person.image}
                                  </div>

                                  <div className="details">
                                    {person.name}
                                    {person.title}
                                  </div>
                                   
                                    
                                    </li>  
                                        
                                    ))

                                }
                     
                              
                            </ul>

                            

                           
                        </div>
                        }

               </div>


        </>
    )
}

export default Message;