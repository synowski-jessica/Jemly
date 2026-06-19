import { Metadata } from "next";
import { ReasonIdentityFull } from "./_components/reasonIdentityFull";
import { IncludeIdentitySection } from "./_components/includeIdentitySection";
import { HeroSection } from "./_components/heroSection";
import { CtaSection } from "./_components/ctaSection";
import { IdentityFaqSection } from "./_components/identityFaqSection";

export const metadata: Metadata = {
  title: "Identité visuelle complète sur mesure — Jemly Studio",
  description: "Logo, palette de couleurs, typographies, charte graphique PDF — tout ce qu'il faut pour une image cohérente sur tous vos supports.",
};

export default function IdentiteVisuelleComplete() {
  return (
    <>
      <div className="flex flex-col gap-10 mt-30 mb-20 py-5 px-5  w-full max-w-324.25 mx-auto">
        <HeroSection/>

        <ReasonIdentityFull/>

        <IncludeIdentitySection/>

        <IdentityFaqSection/>

        <CtaSection/>
      </div>
    </>
  );
}
