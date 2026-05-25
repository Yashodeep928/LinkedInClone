import Footer from "../../components/Footer/Footer"
import "./Chat.css"
import ChatSection from "./ChatSection/ChatSection"
function Chat() {
  return (
    <>

    <div className="chats-sidebar">
       <ChatSection/>

    </div>

    <div className="chats-main">
      <Footer/>
    </div>    
    
    
    </>
  )
}

export default Chat