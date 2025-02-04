import styles from "./HomeMain.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp"

import { 
  instantActionImage, 
  instantActionWebpImage
 } from "../../../assets/images";

const HomeMain = () => {
  return (
    <>
      <section className={styles.homeMain}>
        HOme main
        <ImageWebp
          src={instantActionImage}
          srcSet={instantActionWebpImage}
          alt="Instant Action"
          className={styles.homeMain__testImg}
          />     
      </section>
    </>
  );
};

export default HomeMain;