
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
                            <h3>New Messages</h3>

                            <span><FiZoomIn/></span>
                            <span>< FaTimes/></span>
                           </div>

                        </div>
                        }

               </div>


        </>
    )
}

export default Message;