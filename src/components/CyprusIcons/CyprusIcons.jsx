import styles from "./CyprusIcons.module.css";

const gradients = [
  "linear-gradient(180deg, #828cde -21.43%, #6d31d0 201.93%)",
  "linear-gradient(66deg, #FE6F2D -10.45%, #FFD059 76.78%)",
  "linear-gradient(133deg, #2EA3F2 -3.48%, #A651FB 130.9%)",
  "linear-gradient(135deg, rgba(255, 185, 175, 0.30) -3.89%, #A651FB 94.34%)",
];

export const CyprusIcons = ({ icons }) => {
  return (
    <ul className={styles.listCard}>
      {icons.map((icon, i) => (
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
