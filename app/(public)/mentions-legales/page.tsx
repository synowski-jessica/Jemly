import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Mentions légales | Jemly Studio",
    description:
        "Informations légales relatives à l'éditeur, l'hébergement et l'utilisation du site Jemly Studio.",
    openGraph: {
        title: "Mentions légales | Jemly Studio",
        description:
        "Informations légales relatives à l'éditeur, l'hébergement et l'utilisation du site Jemly Studio.",
        type: "website",
  },
};

export default function MentionsLegales() {
  return (
    <>
    <div className="flex flex-col gap-10 mt-30 mb-20 py-5 px-5 md:px-0 w-full max-w-324.25 mx-auto">
        <h1>{`Mentions légales`}</h1>

        <section className="flex flex-col gap-5">
            <h3 className="">{`Editeur du site`}</h3>

            <div>
                <p className="font-bold">{`Jessica Synowski`}</p>
                <p>{`Entrepreneure individuelle exerçant sous le nom commercial Jemly`}</p>
            </div>
            

            <div>
                <p>{`597 Chemin du Chareyron`}</p>
                <p>{`Lieu-dit Vassalieux`}</p>
                <p>{`42170 Chambles, France`}</p>
            </div>

            <div>
                <p>{`SIRET: 990 129 462 00018`}</p>
                <p>{`Code APE: 7410Z`}</p>
            </div>

            <div>
                <p>{`Email: `} <Link href="mailto:contact@jemly-studio.fr" className="text-text-secondary underline">{`contact@jemly-studio.fr`}</Link></p>
            </div>

            <div>
                <p>{`Activité: Conception et création de logos sur mesure pour entreprises, associations et particuliers — Activité libérale non réglementée`}</p>
            </div>
        </section>

        <section className="flex flex-col gap-5">
            <h3>{`Hebergement`}</h3>

            <p>{`Le site est hébergé par :`}</p>

            <div>
                <p>{`Vercel Inc.`}</p>
                <p>{`440 N Barranca Ave #4133`}</p>
                <p>{`Covina, CA 91723`}</p>
                <p className="capitalize">{`états-unis`}</p>
            </div>

            <div>
                <p>{`Site web :`} <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline">{`https://vercel.com`}</Link></p>
            </div>
        </section>

        <section className="flex flex-col gap-5">
            <h3>{`Nom de domaine`}</h3>

            <p>{`Le nom de domaine du site est enregistré auprès de :`}</p>

            <div>
                <p>{`OVH SAS`}</p>
                <p>{`2 rue Kellermann`}</p>
                <p>{`59100 Roubaix`}</p>
                <p>{`France`}</p>
            </div>

            <div>
                <p>{`Site web :`} <Link href="https://www.ovh.com" className="underline" target="_blank" rel="noopener noreferrer">{`https://www.ovh.com`}</Link></p>
            </div>
        </section>

        <section className="flex flex-col gap-5 text-justify">
            <h3>{`Propriété intellectuelle`}</h3>

            <p>{`L'ensemble des éléments présents sur ce site, notamment les textes, images, illustrations, logos, créations graphiques, ainsi que leur mise en forme, sont protégés par les dispositions du Code de la propriété intellectuelle et demeurent la propriété exclusive de Jessica Synowski / Jemly, sauf mention contraire.`}</p>

            <p>{`Toute reproduction, représentation, modification, publication, adaptation ou exploitation, totale ou partielle, de tout élément du site, quel que soit le procédé utilisé, est interdite sans autorisation écrite préalable.`}</p>
        </section>

        <section className="flex flex-col gap-5 text-justify">
            <h3>{`Responsabilité`}</h3>

            <p>{`Jessica Synowski s'efforce de fournir sur ce site des informations exactes et régulièrement mises à jour. Toutefois, malgré le soin apporté à leur rédaction, les informations présentées sur le site sont fournies à titre indicatif et peuvent être modifiées à tout moment.`}</p>

            <p>{`Jessica Synowski ne saurait être tenue responsable des éventuelles erreurs, omissions ou indisponibilités du site.`}</p>
        
            <p>{`Le site peut contenir des liens vers des sites tiers. Jessica Synowski n'exerce aucun contrôle sur ces sites et ne peut être tenue responsable de leur contenu, de leur disponibilité ou de leurs pratiques.`}</p>        
        </section>
    </div>
    </>
  );
}
