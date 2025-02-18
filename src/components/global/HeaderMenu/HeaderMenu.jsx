import styles from "./HeaderMenu.module.scss";
import { Link, NavLink } from "react-router-dom";
import { headerMenuItems } from "../../../constants/menuItems"
import Svg from "../../layout/Svg/Svg";
import { twitterUrl, telegramUrl } from "../../../constants/contacts";

import {
  logoGreenImage
} from "../../../assets/images";

import { 
  twitterIcon, 
  telegramIcon, 
  burgerIcon, 
  crossIcon
} from "../../../assets/svg";

import {
  chatPagePath,
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
            <nav className={styles.headerMenu__menu}>  
              {headerMenuItems.map(({ text, link }, index) => (  
              <NavLink 
                to={link}
                key={index}
                className={({ isActive }) =>
                 isActive
                      ? `${styles.headerMenu__menuLink} ${styles.headerMenu__menuLink_active}`
                      : styles.headerMenu__menuLink
                  }
                >
                {text}
              </NavLink> 
             ))}
            </nav>
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



          <button>
            <Svg 
              id={burgerIcon} 
              className={styles.headerMenu__burgerIcon}
              />
          </button>





            <Link
             to={chatPagePath}
             className={styles.headerMenu__btnConnect}>
            Connect Wallet
            </Link>
          </div>        
        </div> {/* Right block */ }
      </div>    
    </div>    
  );
};

export default HeaderMenu;