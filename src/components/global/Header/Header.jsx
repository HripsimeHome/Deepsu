import styles from "./Header.module.scss";
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

const Header = () => {
  const { isInView, ref } = useLazy(0.8)

  return (
    <>
      <header className={styles.header} ref={ref}>       
        <div className={`${styles.header__wrapper} container`}>   
          <TransitionProvider
            inProp={isInView}
            style={TransitionStyleTypes.left}              
            delay={500}
          >     
            <img
              src={logoTextImage}
              alt="Logo"
              className={styles.header__logoImg}
            />
          </TransitionProvider>

          <div className={styles.header__container}>
            {/* First block */}           
            <div>  
              <TransitionProvider
                inProp={isInView}
                style={TransitionStyleTypes.left}              
                delay={1000}
              >                 
              <h1 className={styles.header__title}>
                <div className={styles.header__suiBlock}>
                  <span>Next</span>

                  <div className={styles.header__suiPosition}>
                    <a href="https://sui.io" target="_blank" rel="noreferrer">
                      <img
                        src={suiImage}
                        alt="SUI"
                        className={styles.header__suiImg}
                      />
                    </a>
                    <span className={styles.header__suiTitle}>build on</span>
                  </div>
                </div>

                <div>
                  Gen&nbsp;
                  <span className={styles.header__titleGreen}>AI</span>
                </div>
              </h1>
              </TransitionProvider>

              <TransitionProvider
                inProp={isInView}
                style={TransitionStyleTypes.left}              
                delay={1500}
              >
               <div className={styles.header__text}>
                  DeFi token management platform on Sui blockchain. Use AI and
                  data analytics to simplify crypto operations, optimize
                  portfolios, and secure assets.
                </div>
              </TransitionProvider>

              <TransitionProvider
                inProp={isInView}
                style={TransitionStyleTypes.left}              
                delay={2000}
              >     
                <div className={styles.header__btnPosition}>
                  <button className={styles.header__btn}>Launch App</button>
                  <div className={styles.header__docPosition}>
                    <a
                      href={documentation}
                      target="_blank"
                      className={styles.header__docText}
                    >
                      <Svg id={docIcon} className={styles.header__docIcon} />{" "}
                      Documentation
                    </a>
                  </div>
                </div>
                </TransitionProvider>

                <TransitionProvider
                  inProp={isInView}
                  style={TransitionStyleTypes.left}              
                  delay={2500}                  
                >  
                  <div className={styles.header__socIconsPosition}>               
                    <a target="_blank" rel="noreferrer" href={telegramUrl}>
                      <Svg id={telegramIcon} className={styles.header__socIcon} />
                    </a>
                    <a target="_blank" rel="noreferrer" href={twitterUrl}>
                      <Svg id={twitterIcon} className={styles.header__socIcon} />
                    </a>               
                </div>   
              </TransitionProvider>            
            </div>
            
            {/* /First block */}

            {/* Second block */}
            <TransitionProvider
                inProp={isInView}
                style={TransitionStyleTypes.top}              
                delay={1000}
                className={styles.header__aiAgent}
              >    
            <div>
              <img
                src={aiAgentImage}
                alt="AI Agent"
                className={styles.header__aiAgent_img}
              />
            </div> 
            </TransitionProvider>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;