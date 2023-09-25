"use client";
import ScrollCarousel from "scroll-carousel-react";

const arrImgPartners = [
  { url: "/partner1.png", name: "partner1" },
  { url: "/partner2.png", name: "partner2" },
  { url: "/partner3.png", name: "partner3" },
  { url: "/partner4.png", name: "partner4" },
  { url: "/partner5.png", name: "partner5" },
  { url: "/partner6.png", name: "partner6" },
];

const SlidePartners = () => {
  return (
    <ScrollCarousel autoplay autoplaySpeed={1} speed={8}>
      {arrImgPartners.map((img, i) => (
        <div key={i}>
          <img src={img.url} alt={img.name} />
        </div>
      ))}
    </ScrollCarousel>
  );
};

export default SlidePartners;
