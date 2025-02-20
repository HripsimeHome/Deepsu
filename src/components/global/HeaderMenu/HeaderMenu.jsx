import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";
import { headerMenuItems } from "../../../constants/menuItems";
import { twitterUrl, telegramUrl } from "../../../constants/contacts";
import { twitterIcon, telegramIcon, burgerIcon, crossIcon } from "../../../assets/svg";
import { logoGreenImage } from "../../../assets/images";
import { chatPagePath, homePagePath } from "../../../router/path";
import Svg from "../../layout/Svg/Svg";

const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerMenu}>
      <div className={`${styles.headerMenu__container} container`}>
        {/* Left Block */}
        <div className={styles.headerMenu__leftBlock}>
          <Link to={homePagePath}>
            <img src={logoGreenImage} alt="DeepsuAI" className={styles.headerMenu__logoImg} />
          </Link>

          {/* Hamburger Button  */}
          <button className={styles.headerMenu__burger} onClick={toggleMenu}>
            <Svg id={burgerIcon} className={styles.headerMenu__burgerIcon} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className={`${styles.headerMenu__menu} ${isMenuOpen ? styles.headerMenu__menu_open : ""}`}>
          {/* Close Button for Mobile */}
          {isMenuOpen && (
            <button className={styles.headerMenu__close} onClick={toggleMenu}>
              <Svg id={crossIcon} className={styles.headerMenu__crossIcon} />
            </button>
          )}

          {/* Menu Items */}
          {headerMenuItems.map(({ text, link }, index) => (
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
          ))}
        </nav>

        {/* Right Block (Social Icons & Connect Wallet) */}
        <div className={styles.headerMenu__rightBlock}>
          <a href={telegramUrl} target="_blank" rel="noreferrer">
            <Svg id={telegramIcon} className={styles.headerMenu__socIcon} />
          </a>
          <a href={twitterUrl} target="_blank" rel="noreferrer">
            <Svg id={twitterIcon} className={styles.headerMenu__socIcon} />
          </a>
          <Link to={chatPagePath} className={styles.headerMenu__btnConnect}>
            Connect Wallet
          </Link>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && <div className={styles.headerMenu__overlay} onClick={toggleMenu}></div>}
    </div>
  );
};

export default HeaderMenu;
