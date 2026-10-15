import React from "react";
import PamidorHero from "../../components/Pamidor/PamidorHero";
import TrustStats from "../../components/HomeSections/TrustStats";
import HomeServices from "../../components/HomeSections/HomeServices";
import FeaturedWork from "../../components/HomeSections/FeaturedWork";
import WhyWorkWithMe from "../../components/HomeSections/WhyWorkWithMe";
import HowIWork from "../../components/HomeSections/HowIWork";
import HomeTechStack from "../../components/HomeSections/HomeTechStack";
import ClientExperience from "../../components/HomeSections/ClientExperience";
import HomeCurrentlyBuilding from "../../components/HomeSections/HomeCurrentlyBuilding";
import FinalCTA from "../../components/HomeSections/FinalCTA";

export default function Home() {
  return (
    <main className="w-full relative">
      {/* 02. Hero */}
      <PamidorHero />

      {/* 03. Trust / Quick Stats */}
      <TrustStats />

      {/* 04. Services */}
      <HomeServices />

      {/* 05. Featured Work */}
      <FeaturedWork />

      {/* 06. Why Work With Me */}
      <WhyWorkWithMe />

      {/* 07. How I Work */}
      <HowIWork />

      {/* 08. Tech Stack */}
      <HomeTechStack />

      {/* 09. Client / Project Experience */}
      <ClientExperience />

      {/* 10. Currently Building */}
      <HomeCurrentlyBuilding />

      {/* 11. Final CTA */}
      <FinalCTA />
    </main>
  );
}
