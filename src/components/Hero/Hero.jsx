"use client";

import { BtnPrimary } from "../BtnPrimary/BtnPrimary";
import dynamic from "next/dynamic";
import styles from "./Hero.module.css";
import { OfferText } from "../OfferText/OfferText";

const ScrollCarousel = dynamic(
  () => import("@/components/PopCities/PopCities"),
  { ssr: false }
);

export const Hero = () => {
  return (
    <section className={styles.section}>
      <OfferText />
      <div className={styles.container}>
        <h1 className={styles.title}>Relocating to Cyprus</h1>
        <p className={styles.descTitle}>Seamless – Exceptional – Experience.</p>
        <p className={styles.desc}>
          The captivating Mediterranean island of Cyprus has become a business
          haven with a flourishing expat community. The strategic location that
          grants networking opportunities and the stability of being in the EU
          offers entrepreneurs the abilities they need to thrive.
        </p>
        <BtnPrimary text="Find Out More" color="light" />
      </div>
      <ScrollCarousel />
    </section>
  );
};
