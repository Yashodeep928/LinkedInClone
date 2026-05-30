import "./ChatSection.css"
import { Ellipsis,Edit2, Star } from "lucide-react"

function ChatSection() {
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

                     <textarea placeholder="Write some message" />

                  </div>

                  <div className="text-links">
                    
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