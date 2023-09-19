"use client";

import { BtnPrimary } from "../BtnPrimary/BtnPrimary";
import dynamic from "next/dynamic";
import { OfferText } from "../OfferText/OfferText";

import styles from "./Hero.module.css";

const ScrollCarousel = dynamic(
  () => import("@/components/PopCities/PopCities"),
  { ssr: false }
);

export const Hero = () => {
  return (
    <section className={styles.section}>
      <OfferText />
      <div className={styles.container}>
        <h1 className={styles.title}></h1>
        <p className={styles.descTitle}></p>
        <p className={styles.desc}></p>
        <BtnPrimary text="Find Out More" color="light" />
      </div>
      <ScrollCarousel />
    </section>
  );
};
