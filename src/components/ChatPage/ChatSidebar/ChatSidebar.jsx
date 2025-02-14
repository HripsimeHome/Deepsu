import styles from "./ChatSidebar.module.scss"
 
import {
  getUsImage
} from "../../../assets/images"

function ChatSidebar() {
  return (
    <div className={styles.chatSidebar}>
        <div className={styles.chatSidebar__deskWallet}>
          Swap

          <button className={styles.chatSidebar__btnWallet}>
            Connect Walet
          </button>

          <img 
            src={getUsImage}
            className={styles.chatSidebar__logoImg}
          />

        </div>

    </div>
  )   
}

export default ChatSidebar