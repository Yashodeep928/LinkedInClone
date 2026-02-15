
import "./Message.css"
import { FaCaretDown, FaCaretUp,FaEdit, FaEllipsisH, FaTimes} from 'react-icons/fa';
import { FiZoomIn } from 'react-icons/fi';
import { useState ,useRef,useEffect } from "react";

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
  },
  {
    id: 3,
    name: "Aarav Mehta",
    title: "Frontend Developer | React & UI Specialist",
    image: "image"
  },
  {
    id: 4,
    name: "Ishita Sharma",
    title: "Backend Developer | Node.js & Microservices",
    image: "image"
  },
  {
    id: 5,
    name: "Rohan Deshmukh",
    title: "Full Stack Developer | MERN Stack",
    image: "image"
  },
  {
    id: 6,
    name: "Sneha Kulkarni",
    title: "UI/UX Designer | Figma & Design Systems",
    image: "image"
  },
  {
    id: 7,
    name: "Aditya Patil",
    title: "DevOps Engineer | AWS & CI/CD",
    image: "image"
  },
  {
    id: 8,
    name: "Priya Verma",
    title: "Data Analyst | SQL & Power BI",
    image: "image"
  },
  {
    id: 9,
    name: "Kunal Joshi",
    title: "Mobile App Developer | React Native",
    image: "image"
  },
  {
    id: 10,
    name: "Meera Nair",
    title: "Software Engineer | Java & Spring Boot",
    image: "image"
  },
  {
    id: 11,
    name: "Rahul Kapoor",
    title: "Cloud Engineer | Azure & Kubernetes",
    image: "image"
  },
  {
    id: 12,
    name: "Ananya Gupta",
    title: "QA Engineer | Automation Testing",
    image: "image"
  },
  
];

function Message (){

    const contentRef = useRef(null)
    const [open,setOpen] = useState(false);
    const [openDialog,setopenDialog] = useState(false)
    const [query,setquery] = useState("")
    const [filteredData, setFilteredData] = useState(dummyData);


  const Dialog = ()=>{
    setopenDialog(!openDialog)

  }
    const togglebtn = ()=>{
     setOpen(!open)        
    }

useEffect(()=>{
  const timer = setTimeout(() => {
  const result = dummyData.filter((person)=>
  person.name.toLowerCase().includes(query.trim().toLowerCase())
)  
setFilteredData(result) 
  }, 5000);

  return ()=> clearTimeout(timer)

},[query])


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


                        {openDialog &&
                        <div ref={contentRef} className="dialogbox">

                           <div className="header">
                            <h4>New Messages</h4>
                                
                           <div className="icons">
                            <span><FiZoomIn/></span>
                            <button onClick={()=> setopenDialog(false)} className="closeBtn"><span><FaTimes/></span></button>
                           </div>
                            
                           </div>
                           <div className="Searchbar">
                           <input value={query} onChange={(e)=> setquery(e.target.value)}type="Searchbar" placeholder="Type a name or multiple names" />

                           </div>

                        <div className="suggested-container">
                            <h3>Suggested</h3>
                        </div>   
                            <ul className="suggested-list">


                                {
                                  filteredData.map((person)=>(
                                   <li key={person.id} className="suggested-item">

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