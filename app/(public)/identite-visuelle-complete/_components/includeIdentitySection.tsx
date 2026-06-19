import ColorTag from "@/app/components/tag/colorTag";
import { PiPaletteLight } from "react-icons/pi";
import { PiInfinityLight } from "react-icons/pi";
import { PiEarLight } from "react-icons/pi";
import { IncludeLogoCard } from "../../_components/includeLogoCard";
import { PiFileImageLight } from "react-icons/pi";
import { PiMagicWandLight } from "react-icons/pi";
import { PiKeyLight } from "react-icons/pi";
import { PiChatTeardropTextThin } from "react-icons/pi";
import { PiTextAaLight } from "react-icons/pi";
import { PiBoundingBoxLight } from "react-icons/pi";
import { PiFilePdfLight } from "react-icons/pi";
import { PiDevicesLight } from "react-icons/pi";
import { PiCircleHalfTiltLight } from "react-icons/pi";


export function IncludeIdentitySection () {
    return (
        <>
            <section id="include" className="mt-15 flex flex-col gap-10">
                <div className="uppercase text-text-secondary tracking-widest">{`ce qui est inclus `}</div>

                <p className="text-lg font-bold">{`Tout ce qu'il faut pour une image `}<span className="text-accent">{`complète`}</span></p>

                <p>{`Le logo sur mesure est inclus - plus tout ce qui l'entoure pour une identité cohérente sur tous vos supports`}</p>

                <div className="flex flex-col gap-10 md:flex-row md:justify-around md:items-start ">
                    <div className="flex flex-col gap-5">
                        <ColorTag title={"Création"}/>

                        <IncludeLogoCard title={"2 à 3 propositions de logos"} subtitle={"Directions créatives différentes"} Icon={PiPaletteLight}/>

                        <IncludeLogoCard title={"Ajustement jusqu'au coup de coeur"} subtitle={"Aucun limite imposée"} Icon={PiInfinityLight}/>

                        <IncludeLogoCard title={"Palette de couleurs"} subtitle={"Codes Hex, RVB & contrastes web"} Icon={PiMagicWandLight}/>

                        <IncludeLogoCard title={"Typographies"} subtitle={"Polices principales & secondaires"} Icon={PiTextAaLight}/>

                        <IncludeLogoCard title={"Eléments graphiques"} subtitle={"Icones, motifs, formes secondaires"} Icon={PiBoundingBoxLight}/>                
                    </div>

                    <div className="flex flex-col gap-5">
                        <ColorTag title={"Livrables"}/>

                        <IncludeLogoCard title={"SVG, PNG, PDF"} subtitle={"Tous les formats essentiels"} Icon={PiFileImageLight}/>

                        <IncludeLogoCard title={"Version couleur, noir & blanc"} subtitle={"Adaptés à tous vos supports"} Icon={PiCircleHalfTiltLight}/>

                        <IncludeLogoCard title={"Droits cédés à 100%"} subtitle={"Votre logo vous appartient entièrement"} Icon={PiKeyLight}/>      

                        <IncludeLogoCard title={"Guide PDDF complet"} subtitle={"Règles d'utilisation de votre identité"} Icon={PiFilePdfLight}/>

                        <IncludeLogoCard title={"Mockups réalistes"} subtitle={"Mise en situation de votre identité"} Icon={PiDevicesLight}/>

                    </div>

                     <div className="flex flex-col gap-5">
                        <ColorTag title={"Accompagnement"}/>

                        <IncludeLogoCard title={"Accompagnement bienveillant"} subtitle={"Vous n'êtes jamais seul(e) dans le projet"} Icon={PiEarLight}/>

                        <IncludeLogoCard title={"SAV inclus"} subtitle={"Questions sur les formats, imprimeur ..."} Icon={PiChatTeardropTextThin}/>
                    </div>
                </div>

             
            </section>
        </>
    )
}