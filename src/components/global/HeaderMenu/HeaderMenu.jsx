import styles from "./HeaderMenu.module.scss";
import Svg from "../../layout/Svg/Svg";

import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import { useLazy } from "../../../hooks/useLazy";

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
  telegramUrl,
  documentation,
} from "../../../constants/contacts";

const HeaderMenu = () => {
 

  return (
    <>
      <header className={styles.headerMenu}>       
       Header
      </header>
    </>
  );
};

export default HeaderMenu;