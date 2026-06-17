import { PrimaryLink } from "@/app/components/button/primaryLink";
import { SecondaryLink } from "@/app/components/button/secondaryLink";
import { OfferCard } from "./offerCard";

export function HeroSection () {
    return (
        <>
            <div className=' max-w-360.25 mx-auto flex flex-col gap-10'>
            <h1 className="sr-only">
                {`Création de logo sur mesure — Jemly Studio`}
            </h1>

            <h2>{`Pensée ensemble, `}<span className="text-accent">{`conçue pour durer`}</span></h2>

            <p className="text-lg">{`Co-créons le logo qui représente vraiment votre marque`}</p>

            <p>{`Vous savez ce que vous voulez faire, mais pas comment le montrer. Vous cherchez un logo qui vous ressemble vraiment - pas un template, pas quelque chose de générique. Un visuel qui raconte votre histoire dès le premier regard. `}</p>

            <p>{`Ou peut-être que vous partez de zéro, sans idée précise : c’est tout aussi bien. J’aime justement partir de là, échanger, creuser, et faire émerger ensemble une direction qui vous ressemble vraiment.`}</p>
            
            <OfferCard title={"Offre de lancement Jemly Studio"} subtitle={"Pour les 5 premiers projets"} oldPrice={"à partir de 350€"} newPrice={"à partir de 250€"} alert={"Plus que 4 projets à ce tarif"}/>

            <div className="flex justify-around lg:justify-center lg:gap-40">
              <PrimaryLink label="Profiter de l'offre" link={"/?offer=logo#contact"}/>

              <SecondaryLink label="Ce qui est inclus" link="/creation-logo-sur-mesure/#include"/>
            </div>
        </div>
        </>
    )
}