import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
import { footerMenuItems } from "../../../constants/menuItems"
import { logoWhiteImage } from "../../../assets/images";

import { 
  homePagePath 
} from "../../../router/path";

import {  
  emailAddress  
} from "../../../constants/contacts";

const Footer = () => {
  return (
    <footer className={styles.footer}>      
      <div className={`${styles.footer__container} container`}>
        <div className={styles.footer__logoBlock}>
          <Link 
            to={homePagePath}              
            >
            <img 
            src={logoWhiteImage} 
            alt="Logo" 
            className={styles.footer__logoImg}/>
          </Link>
          <p className={styles.footer__copyright}>
            &copy; {new Date().getFullYear()} Deepsu.ai. All rights reserved.
          </p>
          <a 
            href={`mailto:${emailAddress}`}
            className={styles.footer__emailAddress}>{emailAddress}
            </a>
        </div>

        <div className={styles.footer__menuContainer}>
          {footerMenuItems.map((menu, index) => (
            <div key={index}>
              <h3 className={styles.footer__menuTitle}>
                {menu.title}
              </h3>
              <nav className={styles.footer__menu}>
                {menu.items.map((item, i) => (
                  <NavLink 
                    key={i}                      
                    to={item.link}   
                    target={item.target 
                      ? item.target 
                      : "_self"}                    
                    rel={item.target === "_blank" ? "noreferrer"
                      : undefined}   
                    className={({ isActive }) =>
                      isActive
                      ? `${styles.footer__menuLink} ${styles.footer__menuLink_active}`
                      : styles.footer__menuLink
                      }                  
                    >
                    {item.text}                 
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>      
    </footer>
  );
};
export default Footer;