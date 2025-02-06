import styles from "./HomeAdvantages.module.scss";
import ImageWebp from "../../../layout/ImageWebp/ImageWebp"


import { 
  aIInsightsImage,
  aIInsightsWebpImage,

  instantActionImage,
  instantActionWebpImage,

  portfolioOptimizationImage,
  portfolioOptimizationWebpImage
  } from "../../../../assets/images";
  

  
const HomeAdvantages = () => {  
  return (    
    <section className={styles.homeAdvantages}>        
      <h2 className="titleh2">Advantages</h2>
      <div className={styles.homeAdvantages__cardContainer}>

      <div className={styles.homeAdvantages__card}> 
        <h4 className={styles.homeAdvantages__cardTitle}>
        AI Insights
        </h4>

        <p className={styles.homeAdvantages__cardDscription}>
        DeepsuAI uses advanced artificial intelligence to deliver real-time analytics, deep token analysis, and anti-scam tools. Our platform processes millions of data points instantly, uncovering market trends, evaluating token fundamentals, and detecting fraudulent activities like rug pulls. 

        With actionable insights and enhanced security, DepsuAI empowers you to make smarter, safer decisions in DeFi effortlessly.
        </p> 
      </div>


      <div className={styles.homeAdvantages__card}> 

        <h4 className={styles.homeAdvantages__cardTitle}>
        Instant Action
        </h4>

        <p className={styles.homeAdvantages__cardDscription}>
        DeepsuAI lets you instantly buy or sell tokens directly within the app after analysis.
        </p> 
      </div>


      <div className={styles.homeAdvantages__card}> 
        <h4 className={styles.homeAdvantages__cardTitle}>
        Automated Portfolio Optimization
        </h4>

        <p className={styles.homeAdvantages__cardDscription}>
        AI-driven tools automatically analyze and optimize your portfolio, balancing risk and reward.
        </p> 
      </div>




      </div>
 
    </section>
    
  );
};

export default HomeAdvantages;



/*

        <ImageWebp
          src={instantActionImage}
          srcSet={instantActionWebpImage}
          alt="Instant Action"
          className={styles.homeMain__testImg}
          />     

*/