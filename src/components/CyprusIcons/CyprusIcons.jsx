import styles from "./CyprusIcons.module.css";
const cyprusIcons = [
  {
    url: "/money-bag.png",
    alt: "in hand money bag",
    title: "Progressive tax system",
    desc: "Offering one of the most attractive tax regimes in Europe",
  },
  {
    url: "/haze.png",
    alt: "sun",
    title: "Stunning weather and climate",
    desc: "Enjoy a high quality of life with over 324 days of sun annually",
  },
  {
    url: "/human-resources.png",
    alt: "people around",
    title: "Blooming expat community",
    desc: "Become part of an increasingly diverse community",
  },
  {
    url: "/house.png",
    alt: "house",
    title: "Family-oriented values",
    desc: "Excellent education standards and extremely low crime rates",
  },
];

const gradients = [
  "linear-gradient(180deg, #828cde -21.43%, #6d31d0 201.93%)",
  "linear-gradient(66deg, #FE6F2D -10.45%, #FFD059 76.78%)",
  "linear-gradient(133deg, #2EA3F2 -3.48%, #A651FB 130.9%)",
  "linear-gradient(135deg, rgba(255, 185, 175, 0.30) -3.89%, #A651FB 94.34%)",
];

export const CyprusIcons = () => {
  return (
    <ul className={styles.listCard}>
      {cyprusIcons.map((icon, i) => (
        <li className={styles.itemCard} key={i}>
          <div
            className={styles.thumb}
            style={{ background: gradients[i % gradients.length] }}
          >
            <img className={styles.img} src={icon.url} alt={icon.alt} />
          </div>
          <h3 className={styles.title}>{icon.title}</h3>
          <p className={styles.desc}>{icon.desc}</p>
        </li>
      ))}
    </ul>
  );
};
