import styles from "./Header.module.scss";
//import Svg from "../../layout/Svg/Svg";

import {
  logoTextImage,  
  aiAgentImage,
  suiImage,  
} from "../../../assets/images";

import {
   //arrowPrevIcon 
} from "../../../assets/svg"; 

const Header = () => {      
  return (
    <>
      <header className={styles.header}>
        <img src={logoTextImage} alt="Logo"/>
        <div className={styles.header__container}>


        <div className={styles.header__infoBLock}>

          <div>
            <h1 className={styles.header__title}>Next
             {/* <img src={suiImage} alt="SUI"/>*/}
             Gen  <span className="texGreen">AI</span>
            </h1>             
          </div>
          
          <div className={styles.header__infoText}>
          DeFi token management platform on Sui blockchain. Use AI and data analytics to simplify crypto operations, optimize portfolios, and secure assets.        
          
          </div>

          <div className={styles.header__btnPosition}>
          <button className={styles.header__btn}>Launch App</button>
          Documentaiton
          </div>

        </div> {/* /infoBLock}*/}





          <div>
            <img src={aiAgentImage} alt="AI Agent"/>
          </div>




        </div>   
      </header>
    </>
  );
};

export default Header;