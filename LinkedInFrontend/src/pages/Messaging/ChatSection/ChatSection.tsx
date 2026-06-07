import "./ChatSection.css"
import { Ellipsis,Edit2, Star,  Paperclip,
  Image,
  Smile,
  Film ,
  ChevronDown} from "lucide-react"

  import {useState} from "react"

function ChatSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const [isHeight,setIsHeight] = useState<boolean>(false)

  const IncreaseHeight = () => {
    setIsHeight((prev) => !prev)
  }
  

  const openModal = () =>{

    setIsOpen((prev) => !prev)

  }
  return (
    <>
    <div className="messaging-chat-section">
        <div className="Header">

            <div className="header-left">
               <h2>Messaging</h2>
               <input type="text" placeholder="Search Messages"/>
             </div>
          
            <div className="header-right">

                 <button type="button">
                   <Ellipsis/>
                 </button>
                 <button type="button">
                   <Edit2/>
                 </button>

            </div>
         
        </div>

        <div className="menu-content">

          <button>Focused</button>
          <button>Jobs</button>
          <button>Unread</button>
          <button>Connections</button>
          <button>InMail</button>
          <button>Starred</button>
          
        </div>


        <div className="Conversation-Area">

          <div className="ChatList">

            <div className="ChatList-Item">

              <div className="Chat-List-Item-left">
                <img src="" alt="Profile Picture"/>

                <div className="Profile-Info">
                  <h4>Yashodeep</h4>
                  <p>Hey, how are you?</p>
                </div>
                
              </div>

    
              <div className="Chat-List-Item-right">
                <p>12:30 PM</p>
                
              </div>
            </div>

            <div className="ChatAreaLayout">
              
              <div className="ChatAreaHeader">

                <div className="chat-profile">
                   <h3 className="chat-user-name">Yashodeep</h3>
                   <p className="chat-user-status">Active Now</p>
                </div>

                <div className="chat-header-actions">
                     <Ellipsis />
                     <Star />
               </div>
                
              </div>

              <div className="ChatAreaContent">
                <p>This is where the chat messages will be displayed.</p>
                </div>

                <div className="ChatAreaTextBox">

                  <div className="textBox">


                     <textarea style={
                      {
                        height:isHeight ?"100px":"auto",                
                      }
                     } className="textArea" placeholder="Write some message" />

                     <button type="button" onClick={IncreaseHeight}>
                
                        <ChevronDown style={
                          {
                            transform: isHeight ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease"
                          }
                          }/>
                      
                      </button>         

                  </div>

                  <div className="Attachment-Toolbar">

                   <div className="left-Attachment-actions">

                      <button>  <Paperclip/> </button>
                      <button>  <Image/>     </button>
                      <button>  <Smile/>     </button>
                      <button>  <Film/>      </button>

                   </div>
                   <div className="right-Attachment-actions">
                        <span>{message}</span>

                       <div className="dropdown-wrapper">
                         <button onClick={openModal}><Ellipsis/></button>

                         {
                          isOpen && (
                            <div className ="attachment-dropdown">


                            <div className="press-enter">

                                <input type="checkbox" id="press-enter" value="Press Enter to Send"  onChange={(e) =>{ if(e.target.checked){
                                       setMessage(e.target.value)
                                }}}  />
                                <label htmlFor="press-enter">Press Enter to Send</label>

                            </div>

                             <div className="click-to-send">

                                <input type="checkbox" id="click-to-send" value="Click to send" onChange={(e) =>{ if(e.target.checked){
                                       setMessage(e.target.value)
                                }}}  />
                                <label htmlFor="click-to-send">Click to send</label>
                              
                             </div>
                             

                              <button onClick={()=>setIsOpen(!isOpen)} type="button">CUT</button>
                            </div>
                          )
                         }
                       </div>
                   </div>
                   
                                   
                  </div>
                 

                </div>

            </div>

          </div>


        </div>
        

    </div>
    
    
    </>
  )
}

export default ChatSection
