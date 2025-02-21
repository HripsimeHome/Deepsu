import styles from "./ChatSidebar.module.scss"
 
import {
  getUsImage,
  widgetImage
} from "../../../assets/images"

function ChatSidebar() {
  return (
    <div className={styles.chatSidebar}>            
      <img
        src={widgetImage} 
        className={styles.chatSidebar__deskWallet} />

        {/*      
        <img 
          src={getUsImage}         
        />
        */}      

    </div>
  )   
}

export default ChatSidebar