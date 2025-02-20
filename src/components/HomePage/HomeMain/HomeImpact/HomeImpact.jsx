import styles from "./HomeImpact.module.scss";
import ImageWebp from "../../../layout/ImageWebp/ImageWebp";

import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../../providers/TransitionProvider";

import { useLazy } from "../../../../hooks/useLazy";

import {
  empoweringEveryoneImage,
  empoweringEveryoneWebpImage,
  boostingSecurityImage,
  boostingSecurityWebpImage,
  drivingEfficiencyImage,
  drivingEfficiencyWebpImage,
  enhancingTransparencyImage,
  enhancingTransparencyWebpImage,
} from "../../../../assets/images";

const impactCard = [
  {
    image: empoweringEveryoneImage,
    webpImage: empoweringEveryoneWebpImage,
    title: "Empowering Everyone",
    text: "DeepsuAI simplifies DeFi, making it accessible and profitable for users of all experience.",
    transitiontype: TransitionStyleTypes.top,
  },
  {
    image: boostingSecurityImage,
    webpImage: boostingSecurityWebpImage,
    title: "Boosting Security",
    text: "Our anti-scam tools ensure your assets are always protected.",
    transitiontype: TransitionStyleTypes.top,
  },
  {
    image: drivingEfficiencyImage,
    webpImage: drivingEfficiencyWebpImage,
    title: "Driving Efficiency",
    text: "Automation and real-time insights save time and maximize your returns.",
    transitiontype: TransitionStyleTypes.top,
  },
  {
    image: enhancingTransparencyImage,
    webpImage: enhancingTransparencyWebpImage,
    title: "Enhancing Transparency",
    text: "Clear metrics and real-time analytics help you make informed, data-driven decisions.",
    transitiontype: TransitionStyleTypes.top,
  },
];

const HomeImpact = () => {
  const { isInView: isInView1, ref: ref1 } = useLazy(0.8);
  const { isInView: isInView2, ref: ref2 } = useLazy(0.4);

  return (
    <section className={styles.homeImpact}>
      <h2 className="titleh2">Impact</h2>
      <div className={styles.homeImpact__cardContainer} ref={ref1}>
        {impactCard.map(
        ({ image, webpImage, title, text, transitiontype }, index) => (
        <TransitionProvider
          inProp={isInView1}
          style={transitiontype}
          key={index}
          delay={index * 500}
        >
          <div className={styles.homeImpact__card}>
            <div className={styles.homeImpact__cardImgWrapper}>
              <ImageWebp
                src={image}
                srcSet={webpImage}
                alt={"Impact"}
                className={styles.homeImpact__cardImg}
              />
            </div>
            <div className={styles.homeImpact__cardTextWrapper}>
              <h4 className={styles.homeImpact__cardTitle}>{title}</h4>
              <p className={styles.homeImpact__cardDescription}>{text}</p>
            </div>
          </div>
        </TransitionProvider>
        )
        )}
      </div>
      <div ref={ref2}>
        <TransitionProvider
         inProp={isInView2}
         style={TransitionStyleTypes.top}
         delay={700}
         >        
          <h2 className={styles.homeImpact__title}>
            <span className="textlightGreen">start </span>
            your smart journey to
            <span className="textlightGreen"> profitable defi </span>
            decisions today
          </h2>
        </TransitionProvider>
      </div>
    </section>
  );
};

export default HomeImpact;