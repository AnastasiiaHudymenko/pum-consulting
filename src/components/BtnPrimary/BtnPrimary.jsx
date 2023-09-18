import cn from "classnames";
import styles from "./BtnPrimary.module.css";

export const BtnPrimary = ({ text, color }) => {
  return (
    <button
      className={cn(styles.btn, {
        [styles.light]: color === "light",
        [styles.dark]: color === "dark",
      })}
      type="button"
    >
      {text}
    </button>
  );
};
