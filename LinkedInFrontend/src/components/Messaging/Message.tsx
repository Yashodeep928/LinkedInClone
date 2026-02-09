
import "./Message.css"
import { FaCaretDown, FaCaretUp,FaEdit, FaEllipsisH } from 'react-icons/fa';
import { useState } from "react";

function Message (){


    const [open,setOpen] = useState(false);


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
                        <button className="btn"><FaEdit/></button>
                        <button onClick={togglebtn}className="btn">{open ? <FaCaretUp /> : <FaCaretDown />}</button>

                    </div>
                </div>

                
                       <div className={`secondHeader ${open ? "active" : ""}`}>
                       <input placeholder="Search messages" type="search" />
                        </div>

               </div>


        </>
    )
}

export default Message;