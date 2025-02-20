import styles from "./HamburgerMenu.module.scss";
import { useState } from "react";
 
 
const HamburgerMenu = () => {  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(isOpen);
  };
   
 
  return (            
    <div className="hamburger-container">
      <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`hamburger-menu ${isOpen ? 'show' : ''}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>  
  );
};

export default HamburgerMenu;