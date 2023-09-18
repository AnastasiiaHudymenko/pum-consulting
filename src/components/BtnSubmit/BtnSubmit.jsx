import cn from "classnames";
import styles from "./BtnSubmit.module.css";

export const BtnSubmit = ({ color }) => {
  return (
    <button
      className={cn(styles.btn, {
        [styles.light]: color === "light",
        [styles.dark]: color === "dark",
      })}
      type="submit"
    >
      Submit
    </button>
  );
};
