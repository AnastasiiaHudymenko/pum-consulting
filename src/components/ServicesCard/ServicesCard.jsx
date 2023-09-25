import { BtnPrimary } from "../BtnPrimary/BtnPrimary";
import styles from "./ServicesCard.module.css";

const servicesCardsImg = [
  {
    url: "/services_family.jpg",
    url2x: "/services_family@2x.jpg",
    name: "family by the sea",
    title: "Family Relocation",
    desc: "With strategic planning, we simplify the moving process so you and your family can feel safe and confident.",
  },
  {
    url: "/services_heands.jpg",
    url2x: "/services_heands@2x.jpg",
    name: "heands",
    title: "Business Relocation",
    desc: "We handle the responsibility of moving your business to Cyprus, so you can focus on your business goals.",
  },
  {
    url: "/services_mini-house.jpg",
    url2x: "/services_mini-house@2x.jpg",
    name: "small house in the heand",
    title: "Investments schemes",
    desc: "Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan.",
  },
];

export const ServicesCard = () => {
  return (
    <ul className={styles.listCard}>
      {servicesCardsImg.map((img, i) => (
        <li className={styles.itemCard} key={i}>
          <div className={styles.thumb}>
            <picture>
              <source
                srcSet={`${img.url} 1x, ${img.url2x} 2x`}
                type="image/jpeg"
              />
              <img
                className={styles.img}
                loading="lazy"
                src={img.url}
                alt={img.name}
              />
            </picture>
          </div>
          <div className={styles.wrapContent}>
            <h2 className={styles.title}>{img.title}</h2>
            <p className={styles.desc}>{img.desc}</p>
            <BtnPrimary text="Find Out More" color="light" />
          </div>
        </li>
      ))}
    </ul>
  );
};
