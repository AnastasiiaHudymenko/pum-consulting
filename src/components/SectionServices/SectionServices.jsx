import { ServicesCard } from "../ServicesCard/ServicesCard";
import styles from "./SectionServices.module.css";

export const SectionServices = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      <ServicesCard />
    </section>
  );
};
