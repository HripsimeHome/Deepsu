import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
import { footerMenuItems } from "../../../constants/menuItems"
import { logoWhiteImage } from "../../../assets/images";

import { 
  homePagePath 
} from "../../../router/path";

import {  
  emailAddress,
  
} from "../../../constants/contacts";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={`${styles.footer__container} container`}>
          <div className={styles.footer__logoBlock}>
            <Link 
              to={homePagePath}              
              >
              <img src={logoWhiteImage} alt="Logo" />
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
                <h3 className={styles.footer__menuTitle}>{menu.title}</h3>
                <ul className={styles.footer__menuList}>
                  {menu.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.link}   
                        target={item.target ? item.target 
                          : "_self"}                    
                          rel={item.target === "_blank" ? "noreferrer"
                          : undefined}                     
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;