import styles from "./HomeAdvantages.module.scss";
import ImageWebp from "../../../layout/ImageWebp/ImageWebp";

import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../../providers/TransitionProvider";

import { useLazy } from "../../../../hooks/useLazy";

import {
  aIInsightsImage,
  aIInsightsWebpImage,
  instantActionImage,
  instantActionWebpImage,
  portfolioOptimizationImage,
  portfolioOptimizationWebpImage,
} from "../../../../assets/images";

const HomeAdvantages = () => {
  const { isInView, ref } = useLazy(0.8);

  return (
    <section className={styles.homeAdvantages} ref={ref}>
      <h2 className="titleh2">Advantages</h2>
      <div className={styles.homeAdvantages__cardContainer}>
        <TransitionProvider
          inProp={isInView}
          style={TransitionStyleTypes.zoomIn}
          delay={4000}
          className={styles.homeAdvantages__animationContainer}
        >
          <div className={styles.homeAdvantages__card}>
            <ImageWebp
              src={aIInsightsImage}
              srcSet={aIInsightsWebpImage}
              alt="AI Insights"
              className={`
                ${styles.homeAdvantages__insightsPosition}
                ${styles.homeAdvantages__cardImg}
                `}
            />

            <div className={styles.homeAdvantages__cardTextWrapper}>
              <h4 className={styles.homeAdvantages__cardTitle}>AI Insights</h4>

              <p className={styles.homeAdvantages__cardDescription}>
                DeepsuAI uses advanced artificial intelligence to deliver
                real-time analytics, deep token analysis, and anti-scam tools.
                Our platform processes millions of data points instantly,
                uncovering market trends, evaluating token fundamentals, and
                detecting fraudulent activities like rug pulls.
                <br />
                <br />
                With actionable insights and enhanced security, DepsuAI empowers
                you to make smarter, safer decisions in DeFi effortlessly.
              </p>
            </div>
          </div>
        </TransitionProvider>

        <div className={styles.homeAdvantages__cardColumn}>
          <TransitionProvider
            inProp={isInView}
            style={TransitionStyleTypes.zoomIn}
            delay={4200}
          >
            <div className={styles.homeAdvantages__cardRow}>
              <ImageWebp
                src={instantActionImage}
                srcSet={instantActionWebpImage}
                alt="Instant Action"
               // className={styles.homeAdvantages__cardImg}

               className={`
                ${styles.homeAdvantages__actionsImg}
                ${styles.homeAdvantages__cardImg}
                `}
                pictureClass={styles.homeAdvantages__cardPicture}
              />

              <div
                className={`${styles.homeAdvantages__cardTextWrapper}
              ${styles.homeAdvantages__actionPosition}`}
              >
                <h4 className={styles.homeAdvantages__cardTitle}>
                  Instant Action
                </h4>

                <p className={styles.homeAdvantages__cardDescription}>
                  DeepsuAI lets you instantly buy or sell tokens directly within
                  the app after analysis.
                </p>
              </div>
            </div>
          </TransitionProvider>

          <TransitionProvider
            inProp={isInView}
            style={TransitionStyleTypes.zoomIn}
            delay={4400}
          >
            <div className={styles.homeAdvantages__card}>
              <ImageWebp
                src={portfolioOptimizationImage}
                srcSet={portfolioOptimizationWebpImage}
                alt="Instant Action"
                className={styles.homeAdvantages__cardImg}
              />
              <div
                className={`${styles.homeAdvantages__cardTextWrapper} 
              ${styles.homeAdvantages__portfolioPosition}
              `}
              >
                <h4 className={styles.homeAdvantages__cardTitle}>
                  Automated Portfolio
                </h4>

                <p className={styles.homeAdvantages__cardDescription}>
                  AI-driven tools automatically analyze and optimize your
                  portfolio, balancing risk and reward.
                </p>
              </div>
            </div>
          </TransitionProvider>
        </div>
      </div>
    </section>
  );
};

export default HomeAdvantages;
