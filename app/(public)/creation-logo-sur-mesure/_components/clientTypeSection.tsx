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

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                    <CardWithIcon 
                        title={"Artisanat & Création"} 
                        Icon={HiOutlinePaintBrush} 
                        paragraph1={"Vous vendez ce que vous concevez de vos mains ou de votre esprit."} 
                        paragraph2={"Votre logo doit transmettre la qualité de votre savoir-faire, votre passion et votre sensibilité unique."}/>

                    <CardWithIcon 
                        title={"TPE & Petites Entreprises"} 
                        Icon={PiStorefrontThin} 
                        paragraph1={"Vous souhaitez vous démarquer radicalement de vos concurrents."} 
                        paragraph2={"Ensemble, nous construisons une identité visuelle cohérente, mémorable et alignée avec vos ambitions commerciales."}/>

                    <CardWithIcon 
                        title={"Freelance & Indépendants"} 
                        Icon={PiBriefcaseLight} 
                        paragraph1={"Vous lancez votre activité ou vous vous repositionnez."} 
                        paragraph2={"Il est temps d'adopter une image de marque forte et professionnelle qui inspire immédiatement confiance à vos futurs clients."}/>

                    <CardWithIcon 
                        title={"Associations & Collectifs"} 
                        Icon={PiHandHeartLight} 
                        paragraph1={"Votre image doit être à la hauteur de l'impact et des valeurs de votre mission"} 
                        paragraph2={"Donnons à votre structure la visibilité et la crédibilité qu'elle mérite pour fédérer votre communauté."}/>
                </div>
            </section>
        </>
    )
}