"use client";
import dynamic from "next/dynamic";
import styles from "./OurPartners.module.css";

const ScrollCarousel = dynamic(
  () => import("@/components/SlidePartners/SlidePartners"),
  { ssr: false }
);

export const OurPartners = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Partners</h2>
      <ScrollCarousel />
    </section>
  );
};
