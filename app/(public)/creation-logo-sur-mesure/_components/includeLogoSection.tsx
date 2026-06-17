import ColorTag from "@/app/components/tag/colorTag";
import { PiPaletteLight } from "react-icons/pi";
import { PiInfinityLight } from "react-icons/pi";
import { PiEarLight } from "react-icons/pi";
import { IncludeLogoCard } from "./includeLogoCard";
import { PiFileImageLight } from "react-icons/pi";
import { PiMagicWandLight } from "react-icons/pi";
import { PiKeyLight } from "react-icons/pi";
import { PiChatTeardropTextThin } from "react-icons/pi";

export function IncludeLogoSection () {
    return (
        <>
            <section id="include" className="mt-15 flex flex-col gap-10">
                <div className="uppercase text-text-secondary tracking-widest">{`ce qui est inclus ?`}</div>

                <p className="text-lg font-bold">{`Votre logo,`}<span className="text-accent">{` clé en main`}</span></p>

                <p>{`Pas de mauvaise surprise. Voilà exactement ce que vous recevez à la livraison`}</p>

                <div className="flex flex-col gap-10 md:flex-row md:justify-around md:items-start ">
                    <div className="flex flex-col gap-5">
                        <ColorTag title={"Création"}/>

                        <IncludeLogoCard title={"2 à 3 propositions de logos"} subtitle={"Directions créatives différentes"} Icon={PiPaletteLight}/>

                        <IncludeLogoCard title={"Ajustement jusqu'au coup de coeur"} subtitle={"Aucun limite imposée"} Icon={PiInfinityLight}/>

                        <IncludeLogoCard title={"Accompagnement bienveillant"} subtitle={"Vous n'êtes jamais seul(e) dans le projet"} Icon={PiEarLight}/>
                    </div>

                    <div className="flex flex-col gap-5">
                        <ColorTag title={"Livrables"}/>

                        <IncludeLogoCard title={"SVG, PNG, PDF"} subtitle={"Tous les formats essentiels"} Icon={PiFileImageLight}/>

                        <IncludeLogoCard title={"Version couleur, noir & blanc"} subtitle={"Adaptés à tous vos supports"} Icon={PiMagicWandLight}/>

                        <IncludeLogoCard title={"Droits cédés à 100%"} subtitle={"Votre logo vous appartient entièrement"} Icon={PiKeyLight}/>
                    </div>

                     <div className="flex flex-col gap-5">
                        <ColorTag title={"Accompagnement"}/>

                        <IncludeLogoCard title={"SAV inclus"} subtitle={"Questions sur les formats, imprimeur ..."} Icon={PiChatTeardropTextThin}/>
                    </div>
                </div>

             
            </section>
        </>
    )
}