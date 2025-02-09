import styles from "./Footer.module.scss";
//import { NavLink } from "react-router-dom";

import { logoWhiteImage } from "../../../assets/images";

import //homePagePath
"../../../router/path";

import {
  twitterUrl,
  telegramUrl,
  emailAddress,
  documentation,
} from "../../../constants/contacts";

const menuItems = [
  {
    title: "Resources",
    items: [
      {
        text: "Documentation",
        link: documentation,
      },
      { text: "Terms of use", link: "#" },
      { text: "Disclaimer", link: "#" },
    ],
  },
  {
    title: "Social Media",
    items: [
      { text: "Twitter", link: twitterUrl },
      { text: "Telegram", link: telegramUrl },
    ],
  },
  {
    title: "Contact",
    items: [
      {
        text:  emailAddress,
        link: `mailto:${emailAddress}`,
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <div className={styles.footer__logoBlock}>
          <img src={logoWhiteImage} alt="Logo" />
          <p className={styles.footer__copyright}>
            &copy; {new Date().getFullYear()} Deepsu.ai. All rights reserved.
          </p>
          <a 
            href={`mailto:${emailAddress}`}
            className={styles.footer__emailAddress}>{emailAddress}
            </a>
        </div>

        <div className={styles.footer__menuContainer}>
          {menuItems.map((menu, index) => (
            <div key={index}>
              <h3 className={styles.footer__menuTitle}>{menu.title}</h3>
              <ul className={styles.footer__menuList}>
                {menu.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className={item.className ? styles[item.className] : ""}
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
    </footer>
  );
};
export default Footer;