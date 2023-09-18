import styles from "./OfferText.module.css";

export const OfferText = () => {
  return (
    <div className={styles.wrap}>
      <span className={styles.span}>investments</span>
      <span className={styles.span}>business relocation</span>
      <span className={styles.span}>family relocation</span>
    </div>
  );
};
