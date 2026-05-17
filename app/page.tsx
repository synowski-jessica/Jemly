import { Metadata } from "next";
import Header from "./(public)/_components/header";
import Hero from "./(public)/_components/hero";

export const metadata: Metadata = {
  title: "Jemly Studio — Création de logo et identité visuelle sur mesure",
  description: "Designer graphique freelance, je crée votre logo et identité visuelle sur mesure. Approche humaine, rendu rofessionnel. Devis gratuit sous 24h.",
};

export default function Home() {
  return (
    <>
    <Header/>
    <div className="">
      <main className="">
        <Hero/>
      </main>
    </div>
    </>
  );
}
