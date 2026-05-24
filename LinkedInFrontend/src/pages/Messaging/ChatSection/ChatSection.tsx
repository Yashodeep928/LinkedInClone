import "./ChatSection.css"
import { EllipsisVertical } from "lucide-react"
function ChatSection() {
  return (
    <>
    <div className="messaging-chat-section">
        <div className="Header">
          <h1>Messaging</h1>
          <input type="text" placeholder="Search Messages"/>

          <button type="button">
            <EllipsisVertical/>
          </button>
        </div>

    </div>
    
    
    </>
  )
}

export default ChatSection