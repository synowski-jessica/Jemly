import { PrimaryLink } from "@/app/components/button/primaryLink";
import { SecondaryLink } from "@/app/components/button/secondaryLink";

export function CtaSection () {
    return (
        <>
             <section className="mt-15 flex flex-col gap-10">
                <div className="uppercase text-text-secondary tracking-widest">{`vous avez tout ce qu'il vous faut pour décider`}</div>

                <div>
                    <p className="text-lg font-bold">{`Une seule question reste: `}</p>
                    <p className="text-lg font-bold text-accent">{`on commence quand ?`}</p>
                </div>

                <p>{`Premier échange gratuit · Réponse sous 24h · Sans engagement`}</p>

                <div className="flex flex-wrap gap-5 md:gap-10">
                    <PrimaryLink label={"Démarrer mon projet"} link={"/?offer=logo#contact"}/>
                    <SecondaryLink label={"Une question ? Ecrivez moi"} link={"/#contact"}/>
                </div>
            </section>
        </>
    )
}