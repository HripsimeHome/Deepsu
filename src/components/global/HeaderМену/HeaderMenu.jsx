import styles from "./HeaderMenu.module.scss";
import Svg from "../../layout/Svg/Svg";

import {
  logoTextImage,
  aiAgentImage,
  suiImage
} from "../../../assets/images";

import { 
  docIcon,
  twitterIcon, 
  telegramIcon 
} from "../../../assets/svg";

import {
  twitterUrl,
  telegramUrl  
} from "../../../constants/contacts";

const HeaderMenu = () => {
 

  return (
    <>
      <header className={styles.հeaderMenu}>       
        Header menu
      </header>
    </>
  );
};

export default HeaderMenu;