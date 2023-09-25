"use client";

import { useState } from "react";
import { Map } from "../Map/Map";
import { MapCards } from "../MapCards/MapCards";
import styles from "./MapCardsSection.module.css";

export const MapCardsSection = () => {
  const [city, setCity] = useState("Larnaka");

  const handleClickPartMap = (city) => {
    setCity(city);
  };
  return (
    <div className={styles.container}>
      <Map click={handleClickPartMap} />
      <MapCards city={city} />
    </div>
  );
};
