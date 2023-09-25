import { CyprusIcons } from "../CyprusIcons/CyprusIcons";
import styles from "./SectionChoose.module.css";

export const SectionChoose = ({ title, desc, icons }) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapContent}>
        <h2 className={styles.title}>{title} </h2>
        <p className={styles.desc}>{desc}</p>
      </div>
      <CyprusIcons icons={icons} />
    </section>
  );
};
