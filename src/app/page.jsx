import {
  Hero,
  MapCardsSection,
  OurPartners,
  SectionChoose,
  SectionServices,
} from "@/components";

const descSectionServices = [
  " When you’re searching for the ideal home you want everything to be perfect. This is why over the years more and more people from all around the world are choosing Cyprus as their ultimate destination.This smal Mediterranean mesmerizes millions of visitors every year.",
];

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

const howMakeIcons = [
  {
    url: "/listener.png",
    alt: "ear",
    title: "We listen",
    desc: "Our most prominent purpose is to understand and identify with your needs so we can effectively find ways to provide solutions.",
  },
  {
    url: "/target.png",
    alt: "We strategize",
    title: "We strategize",
    desc: "According to your requirements, our team designs a thorough series of steps that will make the relocation process as smooth as possible.",
  },
  {
    url: "/heart.png",
    alt: "We provide",
    title: "We strategize",
    desc: "We implement our services that are based on efficient strategic planning that respond to your family’s and business’s goals and ambitions.",
  },
  {
    url: "/manage.png",
    alt: "We manage",
    title: "We manage",
    desc: "Once you are settled, we make sure that everything is according to your expectations and your vision of the quality of our services.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionServices />
      <SectionChoose
        title="Why Choose Cyprus?"
        desc={descSectionServices[0]}
        icons={cyprusIcons}
      />
      <OurPartners />
      <MapCardsSection />
      <SectionChoose title="how we make it happen" icons={howMakeIcons} />
    </main>
  );
}
