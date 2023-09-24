"use client";

import { Header, QuestionsCards } from "@/components";
import { BtnPrimary } from "@/components/BtnPrimary/BtnPrimary";
import { BtnSubmit } from "@/components/BtnSubmit/BtnSubmit";
import { ServicesCard } from "@/components/ServicesCard/ServicesCard";
import { Hero } from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      {/* <Hero /> */}
      {/* <BtnPrimary text="Find Out More" color="dark" />
      <BtnPrimary text="Find Out More" color="light" />
      <BtnSubmit color="light" />
      <BtnSubmit color="dark" /> */}
      <ServicesCard />
      <QuestionsCards />
    </main>
  );
}
