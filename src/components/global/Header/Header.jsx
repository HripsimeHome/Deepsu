import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
 
import Svg from "../../layout/Svg/Svg"

import {
  logoTextImage,  
  aiAgentImage,
  suiImage,  
} from "../../../assets/images";

import {
   docIcon,
   twitterIcon,
   arrowPrevIcon,
   telegramIcon
} from "../../../assets/svg"; 

import {
  twitterUrl,
  telegramUrl, 
} from "../../../constants/contacts";

const Header = () => {      
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__headerBg}>
        </div>


        <img 
          src={logoTextImage} 
          alt="Logo"/>

        <div className={styles.header__container}>

          {/* First block */} 
          <div>

            <div className={styles.header__title}>                              
              <div>Next 
              <img 
                    src={suiImage} 
                    alt="SUI"
                    className={styles.header__suiImg}
                    /> 
              </div>                  
                          
              <div>Gen 
                <span className={styles.header__titleGreen}>AI</span>
              </div>               
            </div>   


  
          
            <div className={styles.header__text}>
              DeFi token management platform on Sui blockchain. Use AI and data analytics to simplify crypto operations, optimize portfolios, and secure assets.      
            </div>

            <div className={styles.header__btnPosition}>
              <button className={styles.header__btn}>Launch App</button>         
           
              <div className={styles.header__docPosition}>
             
                <Svg 
                  id={docIcon} 
                  className={styles.header__docIcon}
                />
                 <a href="/download_doc.pdf" download="download_doc.pdf">
                  <span className={styles.header__docText}>
                    Documentation
                  </span>                                
                </a>
              </div>
            </div> 

            <div className={styles.header__socIconsPosition}>              
              <a
                target="_blank"
                rel="noreferrer"
                href={telegramUrl}            
              >
                <Svg id={telegramIcon}  />            
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href={twitterUrl}            
              >
                <Svg id={twitterIcon}  />            
              </a>
            </div> {/* /socIconsPosition}*/}

          </div>{/* /First block */} 





          {/* Second block */} 
          <div>
            <img src={aiAgentImage} alt="AI Agent"/>
          </div>

        </div>  {/* container */} 
      </header>
    </>
  );
};

export default Header;