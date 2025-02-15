import styles from "./HeaderMenu.module.scss";
import { Link } from "react-router-dom";
import { headerMenuItems } from "../../../constants/menuItems"
import Svg from "../../layout/Svg/Svg";
import { twitterUrl, telegramUrl } from "../../../constants/contacts";


import {
  logoGreenImage
} from "../../../assets/images";

import { 
  twitterIcon, 
  telegramIcon 
} from "../../../assets/svg";

import {
   homePagePath 
} from "../../../router/path";
 

const HeaderMenu = () => {
  return (    
    <div className={styles.headerMenu}>    
      <div className={`${styles.headerMenu__container} container`}>
        <div>
          <div className={styles.headerMenu__leftBlock}>
            <Link to={homePagePath}>
              <img
                src={logoGreenImage} 
                alt="DeepsuAI"
                className={styles.headerMenu__logoImg}
              />
            </Link>
           
            {headerMenuItems.map(({ text, link }, index) => (
            <ul className={styles.headerMenu__menuList}>  
              <li>
                <Link 
                  to={link}
                  key={index}
                >
                {text}
                </Link>
                </li>                          
              </ul>
            ))}
          </div>
        </div>
         
        <div> 
          <div className={styles.headerMenu__rightblock}>
            <a 
              href={telegramUrl}
              target="_blank" 
              rel="noreferrer"
            >
              <Svg 
              id={telegramIcon} 
              className={styles.headerMenu__socIcon} 
              />
            </a>
            <a 
              href={twitterUrl}
              target="_blank" 
              rel="noreferrer"           
            >
              <Svg 
                id={twitterIcon} 
                className={styles.headerMenu__socIcon} 
              />
            </a>    

            <button className={styles.headerMenu__btnConnect}>
            Connect Wallet
            </button>
          </div>        
        </div> {/* Right block */ }

      </div>    
    </div>    
  );
};

export default HeaderMenu;