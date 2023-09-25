import styles from "./Map.module.css";
import cn from "classnames";

export const Map = ({ click }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>FIND THE IDEAL LOCATION TO CALL HOME</h2>
      <p className={styles.subTitle}>Tap on any city to learn more about it</p>
      <div className={cn(styles.wrap, styles.partPaphos)}>
        <img
          onClick={() => click("Paphos")}
          className={styles.imgPaphos}
          src="/paphos_map_image.png"
          alt="part map"
        />
        <p className={cn(styles.title, styles.titlePaphos)}>PAPHOS</p>
      </div>
      <div className={cn(styles.wrap, styles.partLimassol)}>
        <img
          onClick={() => click("Limassol")}
          className={styles.imgLimassol}
          src="/limassol_map_image.png"
          alt="part map"
        />
        <p className={cn(styles.title, styles.titleLimassol)}>LIMASSOL</p>
      </div>
      <div className={cn(styles.wrap, styles.partNicosia)}>
        <img
          onClick={() => click("Nicosia")}
          className={styles.imgNicosia}
          width={180}
          src="/nicosia_map_image.png"
          alt="part map"
        />
        <p className={cn(styles.title, styles.titleNicosia)}>NICOSIA</p>
      </div>
      <div className={cn(styles.wrap, styles.partLarnaka)}>
        <img
          onClick={() => click("Larnaka")}
          className={styles.imgLarnaka}
          src="/larnaka_map_image.png"
          alt="part map"
        />
        <p className={cn(styles.title, styles.titleLarnaka)}>LARNAKA</p>
      </div>
      <div className={cn(styles.wrap, styles.partOne)}>
        <img
          className={styles.imgNoName1}
          width={120}
          src="/cyprus-map-2.png"
          alt="part map"
        />
      </div>
      <div className={cn(styles.wrap, styles.partTwo)}>
        <img
          className={styles.imgNoName2}
          width={120}
          src="/cyprus-map.png"
          alt="part map"
        />
      </div>
    </div>
  );
};
