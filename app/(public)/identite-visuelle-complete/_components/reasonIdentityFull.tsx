import { CardWithIcon } from "../../_components/cardWithIcon";
import { PiEyeLight } from "react-icons/pi";
import { PiPathLight } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";


export function ReasonIdentityFull () {
    return (
        <>
             <section className="mt-15 flex flex-col gap-10">
                <div className="uppercase text-text-secondary tracking-widest">{`pourquoi l'identité complète ?`}</div>

                <p className="text-lg font-bold">{`Un logo seul ne suffit `}<span className="text-accent">{`pas toujours`}</span></p>

                <p>{`Vous hésitez entre les deux ? Voilà la différence en un coup d'oeil. Les deux incluent tout ce qui précède - l'identité complète va simplement plus loin`}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-20">
                    <CardWithIcon title={"Cohérence visuelle"} Icon={PiEyeLight} paragraph1={"Un logo, c'est un visage. L'identité complète, c'est toute la personnalité."} paragraph2={"Couleurs, typographies, éléments graphiques - tout ce qu'il faut pour être reconnu en un regard, cohérent et inspirer confiance."}/>

                    <CardWithIcon title={"Bénéfice immédiat"} Icon={PiPathLight} paragraph1={"Ne perdez plus de précieuses heures à choisir vos typographies ou vos couleurs pour chacun de vos supports."} paragraph2={"Votre charte graphique vous guide pas à pas :  vous créer plus vite, l'esprit léger et sans jamais douter."}/>

                    <CardWithIcon title={"Impact professionnel"} Icon={PiHandshakeLight} paragraph1={"C'est la cohérence de tous vos visuels qui créé le déclic chez vos clients. En passant du simple logo à l'identité complète, vous êtes fier de présenter votre univers."} paragraph2={"Vous alignez votre image sur votre expertise, ce qui donne instanément plus de valeur perçue à tout ce que vous proposez."}/>
                </div>
            </section>
        </>
    )
}