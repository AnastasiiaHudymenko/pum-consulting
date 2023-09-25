import { CyprusIcons } from "../CyprusIcons/CyprusIcons";
import styles from "./SectionChoose.module.css";

export const SectionChoose = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapContent}>
        <h2 className={styles.title}>Why Choose Cyprus? </h2>
        <p className={styles.desc}>
          When you’re searching for the ideal home you want everything to be
          perfect. This is why over the years more and more people from all
          around the world are choosing Cyprus as their ultimate destination.
          This smal Mediterranean mesmerizes millions of visitors every year.
        </p>
      </div>
      <CyprusIcons />
    </section>
  );
};
