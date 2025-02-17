import styles from "./ChatWrapper.module.scss"
import ChatSidebar from "../ChatSidebar/ChatSidebar"
import ChatMain from "../ChatMain/ChatMain"

function ChatWrapper() {
  return (                           
    <div className={`${styles.chatWrapper} container`}>
      <ChatSidebar />
      <ChatMain />
    </div>    
  )
}

export default ChatWrapper