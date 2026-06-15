import { PrimaryLink } from "@/app/components/button/primaryLink";
import { SecondaryLink } from "@/app/components/button/secondaryLink";
import { PiCheckLight } from "react-icons/pi";
import { PiXLight } from "react-icons/pi";
import { PiStarFourLight } from "react-icons/pi";

export function ChoiceOffer () {
    return (
        <>
            <section className="mt-15 flex flex-col gap-10">
                <div className="uppercase text-text-secondary tracking-widest">{`Logo ou identité visuelle ?`}</div>

                <p className="text-lg font-bold">{`L'offre faite `}<span className="text-accent">{`pour vous`}</span></p>

                <p>{`Tu hésite entre les deux ? Voilà la différence en un coup d'oeil. Les deux incluent tout ce qui précède - l'identité complète va simplement plus loin`}</p>

                <div className="flex flex-col gap-10 lg:flex-row">
                    <div className="border border-tag-secondary-border rounded-lg px-4 py-6 flex flex-col gap-6 flex-1">
                        <div className="flex flex-col gap-1">
                            <p className="text-text-secondary uppercase text-note">{`Offre 1`}</p>

                            <p className="font-bold">{`Logo sur mesure`}</p>

                            <p>{`Pour démarrer avec une image forte, sans te lancer dans une identité complète dès le départ.`}</p>
                        </div>

                        <div>
                            <p className="text-accent text-lg">{`À  partir de 250 €`}<span className="text-text-muted line-through text-body">{`  350 €`}</span></p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="flex gap-2 items-center"><PiCheckLight className="text-accent"/>{`Logo sur mesure`}</p>
                            <p className="flex gap-2 items-center"><PiCheckLight className="text-accent"/>{`Tous les formats (SVG, PNG, PDF ...)`}</p>
                            <p className="flex gap-2 items-center"><PiCheckLight className="text-accent"/>{`Version couleur & noir / blanc`}</p>
                            <p className="flex gap-2 items-center"><PiCheckLight className="text-accent"/>{`Droits cédés + SAV`}</p>
                            <p className="flex gap-2 items-center"><PiXLight  className="text-text-muted"/>{`Palette de couleurs`}</p>
                            <p className="flex gap-2 items-center"><PiXLight  className="text-text-muted"/>{`Typographies & éléments graphiques`}</p>
                            <p className="flex gap-2 items-center"><PiXLight  className="text-text-muted"/>{`Charte graphique PDF`}</p>
                            <p className="flex gap-2 items-center"><PiXLight  className="text-text-muted"/>{`Mockups & mise en situation`}</p>
                        </div>

                        <div>
                            <SecondaryLink label={"Choisir cette offre"} link={"/#contact"} fixedWidth={true}/>
                        </div>
                    </div>

                    <div className="border-2 border-accent rounded-lg px-4 py-6 flex flex-col gap-6 relative flex-1">
                        <div className="absolute bg-accent px-2 py-1 rounded-full -top-3 -left-1 -right-1">
                            <p className="flex gap-2 items-center text-white text-note"><PiStarFourLight className=""/>{`Recommandé si vous communiquez sur plusieurs supports`}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-text-secondary uppercase text-note">{`Offre 2`}</p>

                            <p className="font-bold">{`Identité visuelle complète`}</p>

                            <p>{`Pour une image cohérente sur tous tes supports dès le départ - site, réseaux, print.`}</p>
                        </div>

                        <div>
                            <p className="text-accent text-lg">{`À  partir de 450 €`}<span className="text-text-muted line-through text-body">{`  600 €`}</span></p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="flex gap-2 items-center"><PiCheckLight className="text-accent"/>{`Logo sur mesure`}</p>
                            <p className="flex gap-2 items-center"><PiCheckLight className="text-accent"/>{`Tous les formats (SVG, PNG, PDF ...)`}</p>
                            <p className="flex gap-2 items-center"><PiCheckLight className="text-accent"/>{`Version couleur & noir / blanc`}</p>
                            <p className="flex gap-2 items-center"><PiCheckLight className="text-accent"/>{`Droits cédés + SAV`}</p>
                            <p className="flex gap-2 items-center"><PiCheckLight  className="text-accent"/>{`Palette de couleurs`}</p>
                            <p className="flex gap-2 items-center"><PiCheckLight  className="text-accent"/>{`Typographies & éléments graphiques`}</p>
                            <p className="flex gap-2 items-center"><PiCheckLight  className="text-accent"/>{`Charte graphique PDF`}</p>
                            <p className="flex gap-2 items-center"><PiCheckLight  className="text-accent"/>{`Mockups & mise en situation`}</p>
                        </div>

                        <div>
                            <PrimaryLink label={"Choisir cette offre"} link={"/identite-visuelle-complete"} fixedWidth={true}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}