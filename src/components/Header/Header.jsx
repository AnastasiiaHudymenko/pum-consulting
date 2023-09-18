import Image from "next/image";
import logo from "../../../public/commonImg/logo.png";
import styles from "./Header.module.css";
import { BtnCloseMobile } from "../BtnCloseMobile/BtnCloseMobile";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Image width={80} height={50} src={logo} alt="logo app" />
        <BtnCloseMobile />
      </div>
    </header>
  );
};
