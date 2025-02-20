import styles from "./Header.module.scss";
import { Link } from "react-router-dom"
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

import { useLazy } from "../../../hooks/useLazy";

import {
  logoTextImage,
  logoTextWebpImage,
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

import {
  chatPagePath
} from "../../../router/path"

const Header = () => {
  const { isInView, ref } = useLazy(0.8)

  return (
    <>
      <header className={styles.header} ref={ref}>   
         {/*} <div className={`${styles.header__wrapper} container`}>  */}    
        <div className="container">     
          <TransitionProvider
            inProp={isInView}
            style={TransitionStyleTypes.left}              
            delay={500}
          >     
            <ImageWebp
              src={logoTextImage}
              srcSet={logoTextWebpImage}
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
                <div className={styles.header__aiAgentMobile}>   
                  <img
                    src={aiAgentImage}
                    alt="AI Agent"
                    className={styles.header__aiAgent_img}
                  />           
                </div>
              </TransitionProvider>

              <TransitionProvider
                inProp={isInView}
                style={TransitionStyleTypes.left}              
                delay={2000}
                className={styles.header__btnPosition}
              >
                <Link to={chatPagePath} 
                  className={styles.header__btnLaunch}>Launch App
                </Link>
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
              </TransitionProvider>

              <TransitionProvider
                inProp={isInView}
                style={TransitionStyleTypes.bottom}              
                delay={2300}   
                className={styles.header__socIconsPosition}               
              > 
                <a target="_blank" rel="noreferrer" href={telegramUrl}>
                  <Svg id={telegramIcon} className={styles.header__socIcon} />
                </a>
                <a target="_blank" rel="noreferrer" href={twitterUrl}>
                  <Svg id={twitterIcon} className={styles.header__socIcon} />
                </a>    
              </TransitionProvider>            
            </div>
            
            {/* /First block */}

            {/* Second block */}
            <TransitionProvider
                inProp={isInView}
                style={TransitionStyleTypes.top}              
                delay={2000}
                className={styles.header__aiAgent}
              >   
               <img
                  src={aiAgentImage}
                  alt="AI Agent"
                  className={styles.header__aiAgent_img}
                />           
            </TransitionProvider>
          </div>         
        </div>
      </header>
    </>
  );
};

export default Header;