import { PrimaryLink } from "@/app/components/button/primaryLink";
import { SecondaryLink } from "@/app/components/button/secondaryLink";
import { OfferCard } from "../../_components/offerCard";

export function HeroSection () {
    return (
        <>
            <div className=' max-w-360.25 mx-auto flex flex-col gap-10'>
            <h1 className="sr-only">
                {`Identité visuelle complète sur mesure — Jemly Studio`}
            </h1>

            <div className="flex flex-col gap-5">
                <h2>{`Un logo, c'est un début. `}</h2>
                <h2>{`Une identité, c'est une `}<span className="text-accent">{`signature.`}</span></h2>
            </div>

            <div className="flex flex-col gap-5">
                <p>{`Vous souhaitez plus qu'un logo - vous voulez que chaque support, chaque publication, chaque carte de visite raconte la même histoire. `}</p>

                <p>{`Cohérente, reconnaissable, vous à 100%.`}</p>
            </div>
            
            
            <OfferCard title={"Offre de lancement Jemly Studio"} subtitle={"Pour les 5 premiers projets"} oldPrice={"à partir de 600€"} newPrice={"à partir de 450€"} alert={"Plus que 4 projets à ce tarif"}/>

            <div className="flex justify-around lg:justify-center lg:gap-40">
              <PrimaryLink label="Profiter de l'offre" link={"/?offer=identite#contact"}/>

              <SecondaryLink label="Ce qui est inclus" link="/identite-visuelle-complete/#include"/>
            </div>
        </div>
        </>
    )
}