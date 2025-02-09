import styles from "./HomeMain.module.scss";
import HomeImpact from "./HomeImpact/HomeImpact";
import HomeAdvantages from "./HomeAdvantages/HomeAdvantages"

const HomeMain = () => {
  return (
    <>
      <section>     
        <HomeAdvantages />
        <HomeImpact /> 
      </section>
    </>
  );
};

export default HomeMain;