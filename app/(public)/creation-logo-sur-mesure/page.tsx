import { Metadata } from "next";
import { ClientTypeSection } from "./_components/clientTypeSection";
import { HeroSection } from "./_components/heroSection";
import { IncludeLogoSection } from "./_components/includeLogoSection";
import { ChoiceOffer } from "./_components/choiceOffer";
import { CustomLogoFaqSection } from "./_components/customLogoFaqSection";
import { CtaSection } from "./_components/ctaSection";


export const metadata: Metadata = {
  title: "Création de logo sur mesure — Jemly Studio",
  description: "Un logo unique qui vous ressemble, pensé pour durer. De l'écoute au fichier final, je construis avec vous une identité visuelle forte et cohérente.",
};

export default function CreationLogoSurMesure() {
  return (
    <>
      <div className="flex flex-col gap-10 mt-30 mb-20 py-5 px-5  w-full max-w-324.25 mx-auto">
        <HeroSection/>

        <ClientTypeSection/>

        <IncludeLogoSection/>

        <ChoiceOffer/>    

        <CustomLogoFaqSection/>

        <CtaSection/>
      </div>
    </>
  );
}
