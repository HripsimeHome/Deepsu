import styles from "./ChatMain.module.scss"
import Svg from "../../layout/Svg/Svg";

import {
  suiBlueImage
} from "../../../assets/images"

import {    
  attachmentIcon,
  arrowTopIcon
} from "../../../assets/svg";

const panelTexts = [
  "What is Sui Blockchain?",
  "What are the top tokens on Sui?",
  "Tell me about Sui's memecoins.",
  "Explain the SUI tokenomics.",
  "Which wallets support Sui tokens?",
];

function ChatMain() {
  return (
    <section className={styles.chatMain}>
      <div className={styles.chatMain__container}> 

        <h1 className={styles.chatMain__title}>
          How can I  
          <span>&nbsp;assist</span>&nbsp;you in 
          <span>&nbsp;exploring</span>&nbsp;Sui?
        </h1>

        <div className={styles.chatMain__suiBock}> 
          <span className={styles.chatMain__suiBockText}>build on
          </span>      
          <a 
          href="https://sui.io/"
          target="_blank"
          >
            <img 
              src={suiBlueImage} 
              className={styles.chatMain__suiBock_img}        
            />
         </a>
        </div>
       


        <div>
        <div className={styles.chatMain__panelContainer}>
          {panelTexts.map(( text, index ) => (
          <input 
            type="text"
            placeholder={text}  
            key={index} 
            className={styles.chatMain__panel} 
            />         
          )
        )}
        </div>

</div>

        <div className={styles.chatMain__panelTextarea}>
          <textarea
            className={styles.chatMain__chatTextarea}
            placeholder="Hi! Tell me about $CETUS token on Sui Network?"
          >
          </textarea>

          <div className={styles.chatMain__actionContainer}>           
            <label>
              <input
                type="file" 
                hidden 
              />
              <Svg 
                id={attachmentIcon}
                className={styles.chatMain__attachmentIcon}        
              />
            </label>           

            <button className={styles.chatMain__btnSend}>
              <Svg 
                id={arrowTopIcon}
                className={styles.chatMain__btnSend_arrowTopIcon}        
                />     
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatMain