import styles from "./ChatSidebar.module.scss"
 
import {
  getUsImage,
  widgetImage
} from "../../../assets/images"

function ChatSidebar() {
  return (
    <div className={styles.chatSidebar}>   
         
      <img src={widgetImage}  className={styles.chatSidebar__deskWallet} />

        {/*
        <button className={styles.chatSidebar__btnWallet}>
          Connect Walet
        </button>

        <img 
          src={getUsImage}
          className={styles.chatSidebar__logoImg}
        />
        */}      

    </div>
  )   
}

export default ChatSidebar