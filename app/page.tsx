import { Metadata } from "next";
import Hero from "./(public)/_components/hero";
import Services from "./(public)/_components/services";
import Creations from "./(public)/_components/creations/creations";
import About from "./(public)/_components/about";

export const metadata: Metadata = {
  title: "Jemly Studio — Création de logo et identité visuelle sur mesure",
  description: "Designer graphique freelance, je crée votre logo et identité visuelle sur mesure. Approche humaine, rendu rofessionnel. Devis gratuit sous 24h.",
};

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <Services/>
        <Creations/>
        <About/>
      </main>
    </>
  );
}
