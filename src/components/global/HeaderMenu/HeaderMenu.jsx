import styles from "./HeaderMenu.module.scss";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import { useLazy } from "../../../hooks/useLazy";


import { 
  headerMenuItems
 } from "../../../constants/menuItems";

import { 
  twitterUrl,
  telegramUrl 
} from "../../../constants/contacts";

import {
   twitterIcon,
   telegramIcon, 
   burgerIcon,
   crossIcon 
} from "../../../assets/svg";

import {
  logoGreenImage,
  logoGreenWebpImage
 } from "../../../assets/images";

import {
  chatPagePath,
  homePagePath 
} from "../../../router/path";


const HeaderMenu = () => {

  const { isInView, ref } = useLazy(0.8);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerMenu}>
      <div className={`${styles.headerMenu__container} container`}>
        {/* Left Block */}
        
        <div className={styles.headerMenu__leftBlock}>
        
          <Link 
            to={homePagePath}>
            <ImageWebp 
              src={logoGreenImage} 
              srcSet={logoGreenWebpImage}
              alt="DeepsuAI" 
              className={styles.headerMenu__logoImg} />
          </Link> 
           
                   
          <nav ref={ref} className={`
            ${styles.headerMenu__menu}
            ${isMenuOpen ? styles.headerMenu__menu_open : ""}`}>
            {isMenuOpen && (
              <TransitionProvider
                inProp={isInView}
                style={TransitionStyleTypes.zoomIn}
                delay={300}              
              >
               <>             
                <Link 
                  to={homePagePath}>
                  <ImageWebp 
                    src={logoGreenImage} 
                    srcSet={logoGreenWebpImage}
                    alt="DeepsuAI" 
                    className={styles.headerMenu__logoImg} />
                </Link>   

                <button className={styles.headerMenu__btnClose} onClick={toggleMenu}>
                  <Svg 
                    id={crossIcon} 
                    className={styles.headerMenu__crossIcon} />
                </button>                
              </>
              </TransitionProvider>
            )}

            {headerMenuItems.map(({ text, link }, index) => (
              <TransitionProvider
                inProp={isInView}
                style={TransitionStyleTypes.opacity}
                delay={300}              
              >
              <NavLink
                to={link}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.headerMenu__menuLink} ${styles.headerMenu__menuLink_active}`
                    : styles.headerMenu__menuLink
                }
                onClick={() => isMenuOpen && setIsMenuOpen(false)}
              >
                {text}
              </NavLink>
              </TransitionProvider>
            ))}
           
            <div className={styles.headerMenu__btnConnectMobile}>
              <Link              
                to={chatPagePath}
                onClick={toggleMenu} 
                className={styles.headerMenu__btnConnect}>
                Connect Wallet
              </Link>
            </div>            
          </nav>         
        </div>

        {/* Right Block */}
        <div className={styles.headerMenu__rightBlock}>
          <div className={styles.headerMenu__socIconsPosition}>
            <a 
            href={telegramUrl} 
            target="_blank" 
            rel="noreferrer">
              <Svg 
              id={telegramIcon} 
              className={styles.headerMenu__socIcon} />
            </a>
            <a 
              href={twitterUrl} 
              target="_blank" 
              rel="noreferrer">
              <Svg 
                id={twitterIcon} 
                className={styles.headerMenu__socIcon} />
            </a>
          </div>
         
          <Link to={chatPagePath} className={styles.headerMenu__btnConnect}>
            Connect Wallet
          </Link>

          <button 
            className={styles.headerMenu__btnBurger} 
            onClick={toggleMenu}>
            <Svg 
              id={burgerIcon} 
              className={styles.headerMenu__burgerIcon} />
          </button>
        </div>       
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && <div 
        className={styles.headerMenu__overlay} 
        onClick={toggleMenu} />}
    </div>
  );
};

export default HeaderMenu;