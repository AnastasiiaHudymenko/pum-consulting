"use client";

import { useEffect, useState } from "react";
import styles from "./MapCards.module.css";

const mapImgDesc = [
  {
    url1: "/map_card_larnaka_images_1-4.png",
    url2: "/map_card_larnaka_images_1.png",
    url3: "/map_card_larnaka_images_1-2.png",
    alt: "larnaka photo city",
    title: "Larnaka",
    desc: `Being the third largest city in Cyprus and home to the island’s most busy airport, it offers visitors a variety of activities and experiences that will remain unforgettable to any individual. It is known for its Salt Lake that hosts thousands of Flamingos each year as well as for its sandy beaches and historical sites.The rapidly increasing corporate ecosystem and comfortable lifestyle create an exceptional livingenvironment for anyone who is looking to enjoy a relaxed life by the sea.`,
  },
  {
    url1: "/map_card_larnaka_images_2-3.png",
    url2: "/map_card_larnaka_images_2.png",
    url3: "/map_card_larnaka_images_3-2.png",
    alt: "photo Limassol city",
    title: "Limassol",
    desc: "The sunny city of Limassol is the second largest city of the island, and it is among the most desirable travel and business destinations both for families and for entrepreneurs looking to expand their business horizons.The combination of elegant accommodation and ancient architectural views is bound to capture the interest of people of any age. The Limassol Marina is the first marina to harbor yachts in Cyprus and it is surrounded by renowned bars and restaurants. The residents of Limassol pride themselves on their cultural values and festivities as hundreds of theatrical performances take place each year at the Rialto theater, and the city holds an annual Wine Festival and Carnival Parade.",
  },
  {
    url1: "/map_card_larnaka_images_3.png",
    url2: "/map_card_larnaka_images_1-2.png",
    url3: "/map_card_larnaka_images_1-4.png",
    alt: "Nicosia photo city",
    title: "Nicosia",
    desc: "Also known as Lefkosia, Nicosia is the capital city of Cyprus and the only divided capital city in the world. The unique urban scenery is built upon a rich historical past and its mixture with modern lifestyle.It is in close proximity to every other city in Cyprus, giving residents the flexibility of choosing to enjoy the breathtaking views from the mountain tops and soothing beaches of the coastal cities within minutes. Nicosia has become an attractive cosmopolitan city made of diverse cultural communities, excellent healthcare facilities and every aspect one requires to build the lifestyle of your dreams.",
  },
  {
    url1: "/map_card_larnaka_images_2-3.png",
    url2: "/map_card_larnaka_images_3-2.png",
    url3: "/map_card_larnaka_images_3.png",
    alt: "Paphos photo city",
    title: "Paphos",
    desc: "Paphos is located on the southwest coast of Cyprus, and it is one of the most popular cities for expat communities. The crystal-clear, family-friendly beaches are a frequent holiday retreat for millions of tourists all year round. Its exceptional infrastructure includes a huge shopping mall, hospitals, the second largest airport of the island, and many schools.These are only a few reasons why people choose to move to Paphos, as there are many more reasons it is considered one of the most excellent places to live in Europe.",
  },
];

export const MapCards = ({ city }) => {
  const [card, setCard] = useState({});
  useEffect(() => {
    const markup = mapImgDesc.find((place) => place.title === city);
    setCard(markup);
  }, [city]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapImg}>
        <img className={styles.img} src={card?.url1} alt={card?.alt} />
        <img className={styles.img} src={card?.url2} alt={card?.alt} />
        <img className={styles.img} src={card?.url3} alt={card?.alt} />
      </div>
      <h2 className={styles.title}>{card?.title}</h2>
      <p className={styles.desc}>{card?.desc}</p>
    </div>
  );
};
