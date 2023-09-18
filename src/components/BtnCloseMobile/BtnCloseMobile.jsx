import styles from "./BtnCloseMobile.module.css";

export const BtnCloseMobile = () => {
  return (
    <button
      className={styles.btn}
      type="button"
      aria-label="button open mobile menu"
    >
      <svg width={24} height={24}>
        <use xlinkHref="/sprite.svg#icon-menu"></use>
      </svg>
    </button>
  );
};
