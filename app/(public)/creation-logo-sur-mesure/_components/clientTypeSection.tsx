import { HiOutlinePaintBrush } from "react-icons/hi2";
import { PiBriefcaseLight } from "react-icons/pi";
import { PiStorefrontThin } from "react-icons/pi";
import { PiHandHeartLight } from "react-icons/pi";
import { CardWithIcon } from "../../_components/cardWithIcon";

export function ClientTypeSection () {
    return (
        <>
            <section className="mt-15 flex flex-col gap-10">
                <div className="uppercase text-text-secondary tracking-widest">{`pour qui ?`}</div>

                <p className="text-lg font-bold">{`Fait pour vous si vous êtes ...`}</p>

                <p>{`Mes services s'adressent aux porteurs de projets, créatifs et structures qui veulent une identité visuelle unique, loin des générateurs automatiques.`}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-4 gap-10">
                    <CardWithIcon 
                        title={"Artisanat & Création"} 
                        Icon={HiOutlinePaintBrush} 
                        paragraph1={"Vous vendez ce que vous créez de vos mains ou de votre esprit."} 
                        paragraph2={"Votre logo doit transmettre cette sensibilité unique au premier regard."}/>

                    <CardWithIcon 
                        title={"TPE & Petites Entreprises"} 
                        Icon={PiStorefrontThin} 
                        paragraph1={"Vous voulez vous démarquer vraiment de vos concurrents."} 
                        paragraph2={"Une identité forte et cohérente, c'est ce qui fait la différence."}/>

                    <CardWithIcon 
                        title={"Freelance & Indépendants"} 
                        Icon={PiBriefcaseLight} 
                        paragraph1={"Vous lancez votre activité ou vous vous repositionnez."} 
                        paragraph2={"Il est temps d'avoir une image qui inspire confiance immédiatement."}/>

                    <CardWithIcon 
                        title={"Associations & Collectifs"} 
                        Icon={PiHandHeartLight} 
                        paragraph1={"Votre mission mérite une image à sa hauteur."} 
                        paragraph2={"Donnons à votre structure la visibilité et la crédibilité qu'elle mérite."}/>
                </div>
            </section>
        </>
    )
}