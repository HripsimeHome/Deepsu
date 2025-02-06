import styles from "./Footer.module.scss"
//import Svg from "../../layout/Svg/Svg";
//import { NavLink } from "react-router-dom";
//import ImageWebp from "../../layout/ImageWebp/ImageWebp"

import { 
  //instantActionImage, 
  //instantActionWebpImage,
  logoWhiteImage,
 } from "../../../assets/images";

import {    
  //homePagePath
} from "../../../router/path";

import {
  //moneyIcon,
 
} from "../../../assets/svg";
 
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
          
        <div className={styles.footer__menu}>
        <h3 className={styles.footer__menuTitle}>Resources</h3>
          <ul className={styles.footer__menuList}>
            <li>Documentation</li>
            <li>Terms of use</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        <div className={styles.footer__menu}>
        <ul className={styles.footer__menuList}>
          <h3 className={styles.footer__menuTitle}>Social Media</h3>
            <li>Twitterert</li>      
            <li>Telegram</li>
          </ul>
        </div>

        <div className={styles.footer__menu}>
        <ul className={styles.footer__menuList}>
            <h3 className={styles.footer__menuTitle}>Contact</h3>
            <li>info@deepsu.ai</li>       
          </ul>
        </div>

      </div>  
    </footer>
  );
};

export default Footer;

        
      /* <ImageWebp
            src={instantActionImage}
            srcSet={instantActionWebpImage}
            alt="Instant Action"
            className={styles.homeMain__testImg}
            />  */