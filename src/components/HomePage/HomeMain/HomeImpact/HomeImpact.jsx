import styles from "./HomeImpact.module.scss";
 

const HomeImpact = () => {  
  return (
    <>
      <section className={styles.homeImpact}>
        <h2 className="titleh2">Impact</h2>
        <h2 className={styles.homeImpact__title}>
         <span className="textlightGreen">start </span>
          your smart journey to
          <span className="textlightGreen"> profitable defi </span>
          decisions today
        </h2>

      </section>
    </>
  );
};

export default HomeImpact;