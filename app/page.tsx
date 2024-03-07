"use client";
import Footer from "../components/Footer";
import SectionHero from "./SectionHero";
import SectionLetsConnect from "./SectionLetsConnect";
import SectionMyLatestProject from "./SectionMyLatestProject";
import SectionQuote from "./SectionQuote";
import SectionTechnologyStack from "./SectionTechnologyStack";
import Skills from "./Skills3D";
import Contact from "../pages/Contact";
export default function Home() {
  return (
    <div className="safe-layout">
      <SectionHero />
      <SectionTechnologyStack />
      <SectionMyLatestProject />
      <SectionLetsConnect />
      <Contact />
      <SectionQuote />

      <Footer />
    </div>
  );
}
