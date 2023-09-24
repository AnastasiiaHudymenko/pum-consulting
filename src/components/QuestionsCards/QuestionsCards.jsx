import Image from "next/image";
import Carousel from "react-multi-carousel";

import styles from "./QuestionsCards.module.css";
import "react-multi-carousel/lib/styles.css";

const questionsCardsArr = [
  {
    url: "/img-questions.png",
    alt: "people on the beach",
    label: "Business",
    title: " Question: How is the business environment in Cyprus?",
    desc: "Answer: Cyprus is considered to be one of the most business-oriented countries of the EU, offering business entrepreneurs a variety of opportunities to expand their corporate dreams and ambitions.",
  },
  {
    url: "/img-questions.png",
    alt: "people on the beach",
    label: "Prices",
    title: "Question: What is the cost of living in Cyprus?",
    desc: "Answer: In comparison to other countries of the EU, the cost of living is relatively low. Of course, the cost of living varies from city to city. For example, this means that living in Paphos might be a bit cheaper than living in Limassol. ",
  },
  {
    url: "/img-questions.png",
    alt: "people on the beach",
    label: "Migration",
    title: "Question: What are the best cities in Cyprus for expats?",
    desc: "Answer: As Cyprus is among the most attractive destinations for people from different parts of the globe, large and thriving expat communities can be found in Paphos, Limassol, Larnaca, Nicosia.",
  },
  {
    url: "/img-questions.png",
    alt: "people on the beach",
    label: "Taxes",
    title: "Question: What is the Tax system like in Cyprus?",
    desc: "Answer: With one of the lowest corporate tax rates (12.5%) in the European Union, the tax system is attractive to foreign investors. Neither succession taxes nor gains from the disposal of securities are subject to tax.",
  },
  {
    url: "/img-questions.png",
    alt: "people on the beach",
    label: "Investment",
    title: "How long does it take to buy a property in Cyprus?",
    desc: "Answer: The whole procedure for pur-chasing property in Cyprus should only take about 1-3 months. Of course, each situation is different and this timeframe may vary from one individual to another. Our relocation services aim to simplify this process by providing guidance and assistance from start to finish. ",
  },
  {
    url: "/img-questions.png",
    alt: "people on the beach",
    label: "Family Relocation",
    title: "Question: Is Cyprus a good country to live with a family?",
    desc: "Answer: Cyprus is a perfect location for every type of family looking for a place to settle with their children. The stunning weather combined with great education programs, excellent healthcare system, and the ability to live in one of the safest countries in the world makes Cyprus a top choice among thousands every year.",
  },
  {
    url: "/img-questions.png",
    alt: "people on the beach",
    label: "Invest in Cyprus",
    title: "Question: Does PAM Consulting offer any Investment Plans?",
    desc: "Answer: Of course! Our services include the provision of a variety of investment opportunities you can choose from, depending on your needs and economic outlook.",
  },
  {
    url: "/img-questions.png",
    alt: "people on the beach",
    label: "Migration",
    title:
      "Question: Am I eligible to receive public healthcare if I am a permanent resident of Cyprus?",
    desc: "Answer: Yes, you are. In accordance with National Legislation, Cyprus citizens with permanent residency rights and those whose ordinary residence is in an area controlled by the Cyprus Government are entitled to healthcare services under GHS.",
  },
  {
    url: "/img-questions.png",
    alt: "people on the beach",
    label: "Family Relocation",
    title:
      "Question: Do my children have the option of attending a private or public school in Cyprus if I have a permanent residency?",
    desc: "Answer: Yes. Public schools are free, while private educational institutions have tuition.",
  },
  {
    url: "/img-questions.png",
    alt: "people on the beach",
    label: "Migration",
    title: "Question: How can I contact PAM Consulting?",
    desc: "Answer: You can contact our team by simply visiting the “Contact Us” page, where you can find out contact details (email, telephone number) or fill in a form so we can get back to you as soon as possible.",
  },
];

export const QuestionsCards = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1399, min: 1000 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 999, min: 461 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 646, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      // containerClass="carousel-container"
      containerClass={styles.container}
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-40-px"
    >
      {questionsCardsArr.map((card, i) => (
        <div key={i} className={styles.wrap}>
          <div className={styles.thumb}>
            <Image
              width={320}
              height={200}
              src="/img-questions.png"
              alt="people on the beach"
            />
            <span className={styles.label}>{card.label}</span>
          </div>
          <div className={styles.wrapContent}>
            <h4 className={styles.title}>{card.title}</h4>
            <p className={styles.desc}>{card.desc}</p>
          </div>
        </div>
      ))}
    </Carousel>

    // <div className={styles.container}>
    //   {questionsCardsArr.map((card, i) => (
    //     <div key={i} className={styles.wrap}>
    //       <div className={styles.thumb}>
    //         <Image
    //           width={320}
    //           height={200}
    //           src="/img-questions.png"
    //           alt="people on the beach"
    //         />
    //         <span className={styles.label}>{card.label}</span>
    //       </div>
    //       <div className={styles.wrapContent}>
    //         <h4 className={styles.title}>{card.title}</h4>
    //         <p className={styles.desc}>{card.desc}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};
