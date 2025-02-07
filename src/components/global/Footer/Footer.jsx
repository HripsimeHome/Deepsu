import styles from "./Footer.module.scss"
//import { NavLink } from "react-router-dom";

import {   
  logoWhiteImage,
 } from "../../../assets/images";

import {    
  //homePagePath
} from "../../../router/path";

import {
  twitterUrl,
  telegramUrl, 
  mailAddress
} from "../../../constants/contacts";
 
const Footer = () => {
  return (
    <footer className={styles.footer}> 
      <div className={`${styles.footer__container} container`}>    
       
        <div>
          <img
              src={logoWhiteImage}
              alt="Logo"/>
            <p className={styles.footer__copyright}>
              &copy; 2025 Deepsu.ai. All rights reserved.
            </p>
        </div>

        <div className={styles.footer__menuContainer}> 


          <div>
          <h3 className={styles.footer__menuTitle}>Resources</h3>
            <ul className={styles.footer__menuList}>
              <li>Documentation</li>
              <li>Terms of use</li>
              <li>Disclaimer</li>
            </ul>          
          </div>

          <div>
            <h3 className={styles.footer__menuTitle}>Social Media</h3>
            <ul className={styles.footer__menuList}>           
              <a
                  target="_blank"
                  rel="noreferrer"
                  href={twitterUrl}            
                > 
                  <li>Twitter</li>                              
              </a>               
                  
              <a
                target="_blank"
                rel="noreferrer"
                href={telegramUrl}            
              > 
                <li>Telegram</li>                               
              </a>
            </ul>
          </div>

          <div>
            <h3 className={styles.footer__menuTitle}>Contact</h3>
            <ul className={styles.footer__menuList}>
              <a
                target="_blank"
                rel="noreferrer"
                href={`mailto:${mailAddress}`}
                className={styles.footer__contactLink}
            >
              <li>info@deepsu.ai</li>
           </a>     
         </ul>
        </div>    



        </div> {/* /menuContainer*/}
      </div>  
    </footer>
  );
};

export default Footer;   