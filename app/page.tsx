import { Metadata } from "next";
import Hero from "./(public)/_components/hero";
import Services from "./(public)/_components/services";
import Creations from "./(public)/_components/creations/creations";
import About from "./(public)/_components/about";
import Work from "./(public)/_components/work/work";
import { Contact } from "./(public)/_components/contact/contact";

export const metadata: Metadata = {
  title: {
    absolute: "Jemly Studio | Création de logo et identité visuelle sur mesure",
  },
  description: "Designer graphique freelance basé à Chambles dans la Loire, je crée votre logo et identité visuelle sur mesure partout en France. Approche humaine, rendu professionnel. Devis gratuit sous 24h.",
  openGraph: {
    title: "Jemly Studio | Création de logo et identité visuelle sur mesure",
    description: "Designer graphique freelance basé à Chambles dans la Loire, je crée votre logo et identité visuelle sur mesure partout en France. Approche humaine, rendu professionnel. Devis gratuit sous 24h.",
    url: 'https://jemly-studio.fr',
    type: 'website',
  },
}

export default async function Home({ searchParams }: { searchParams: Promise<{ offer?: string }>}) {
  const params = await searchParams;
  const type = params.offer ?? "";
  return (
    <>
      <main>
        <Hero/>
        <Services/>
        <Creations/>
        <About/>
        <Work/>
        <Contact type={type}/>
      </main>
    </>
  );
}
