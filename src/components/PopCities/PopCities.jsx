"use client";
import Image from "next/image";
import ScrollCarousel from "scroll-carousel-react";
import { useMediaQuery } from "react-responsive";
import styles from "./PopCities.module.css";

const arrImg = [
  { url: "/nicosia.png", name: "Nicosia" },
  { url: "/limassol.png", name: "Limassol" },
  { url: "/paphos.png", name: "Paphos" },
  { url: "/larnaka.png", name: "Larnaka" },
];

const PopCities = () => {
  const isLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  if (isLaptop) {
    return (
      <>
        <h3 className={styles.title}>Most popular cities</h3>
        <div className={styles.wrap}>
          {arrImg.map((img, i) => (
            <div className={styles.thumb} key={i}>
              <Image width={129} height={123} src={img.url} alt={img.name} />
              <div className={styles.wrapContent}>
                <p className={styles.desc}>{img.name}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <h3 className={styles.title}>Most popular cities</h3>
      <ScrollCarousel autoplay autoplaySpeed={1} speed={8}>
        <div className={styles.wrap}>
          {arrImg.map((img, i) => (
            <div className={styles.thumb} key={i}>
              <Image width={129} height={123} src={img.url} alt={img.name} />
              <div className={styles.wrapContent}>
                <p className={styles.desc}>{img.name}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollCarousel>
    </>
  );
};

export default PopCities;
