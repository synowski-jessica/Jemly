import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "item-1",
    trigger: "Premier Contact",
    triggerSubtitle: "Découverte de votre projet et de votre identité",
    content:
       (
        <>
          <p>
            {`Créer un logo unique demande d'abord de comprendre qui vous êtes.`}
          </p>

          <p>
            {`Durant cet échange privilégié d’environ une heure, nous faisons équipe :
            nous explorons vos motivations, l'histoire de votre entreprise ou
            association, vos valeurs fondamentales et l'émotion exacte que vous
            souhaitez transmettre dès le premier regard.`}
          </p>

          <p>
            {`À travers des questions ciblées, je cerne précisément vos attentes pour
            poser les bases solides de votre future image de marque.`}
          </p>

          <p className="font-bold">
            {`Cette première phase d’écoute est 100% gratuite et sans engagement.`}
          </p>
        </>
      ),
  },
  {
    value: "item-2",
    trigger: "Devis Personnalisé",
    triggerSubtitle: "Proposition adaptée à votre projet",
    content:
      (
        <>
          <p>{`Parce que chaque projet est unique, je vous adresse une proposition tarifaire détaillée et parfaitement adaptée à vos besoins réels directement par e-mail,`}<span className="font-bold">{`sous 24h à 48h maximum.`}</span>{`Vous y trouverez le détail de ma prestation, la transparence totale sur les livrables, ainsi qu'un calendrier prévisionnel des étapes de création.`}</p>

          <p><span className="font-bold">{`Un doute ou un besoin d'ajuster ? `}</span>{`L'offre doit vous correspondre à 100%. Si un élément ne vous convient pas, aucun problème : nous reprenons contact pour en discuter ensemble et réajuster le devis selon votre budget ou vos priorités.`}</p>

          <p><span className="font-bold">{`Le coin des assos: `}</span>{`Faisant moi-même partie du bureau d'une association sportive, je connais vos réalités, vos budgets serrés et votre dévouement. Parce que j'ai à cœur de vous soutenir, `}<span className="font-bold">{`un geste commercial est systématiquement appliqué pour toutes les associations.`}</span></p>

          <p><span className="font-bold underline">{`Pour lancer le projet: `}</span>{`Dès que l'offre vous convient, il vous suffit de me retourner le `}<span className="font-bold">{`daté et signé. `}</span>{`Le travail de recherche démarre officiellement à la réception d'un `}<span className="font-bold">{`acompte de 30%`}</span>{`, à régler par virement bancaire (mon RIB est inclus sur le document)`}</p>
        </>
      ),
  },
  {
    value: "item-3",
    trigger: "Recherche & Moodboard",
    triggerSubtitle: "Étude de la concurrence, inspirations et premières orientation",
    content:
      (
        <>
          <p>
            {`C’est ici que la création commence. J'analyse minutieusement votre marché et vos concurrents pour identifier comment vous démarquer radicalement.`}
          </p>

          <p>
            {`Je traduis nos premiers échanges sous forme de planches de tendances (moodboards), d’associations de couleurs et de premiers croquis. Nous faisons un premier point ensemble pour valider cette direction artistique et s'assurer que nous visons le cœur de votre cible.`}
          </p>

          <p>
            💡<span className="italic">{` Option Identité Complète : `}</span>{` Pour la formule "Identité Visuelle Complète", cette étape inclut également la structuration de votre univers de marque à travers vos palettes de couleurs stratégiques et les premières sélections typographiques.`}
          </p>
        </>
      )
  },
  {
    value: "item-4",
    trigger: "Création & Coconception",
    triggerSubtitle: "Concrétisation de votre identité visuelle",
    content:
      (
        <>
          <p>
            {`Je créé généralement`}<span className="font-bold">{` 2 à 3 propositions de logos `}</span>{`  totalement différentes, originales et construites sur-mesure pour vous.`}
          </p>

          <p>
            {`Vous découvrez alors plusieurs visions possibles de votre identité de marque et nous échangeons ensemble sur celles qui vous parlent le plus: nous co-concevons ensemble.`}
          </p>

          <p>
            <span className="font-bold">{` Vous êtes au cœur du processus : chaque retour me permet de comprendre ce qui résonne le plus intensément avec vos objectif et nourrit ainsi la création finale. `}</span>
          </p>
        </>
      )
  },
  {
    value: "item-5",
    trigger: "Echanges & Ajustements",
    triggerSubtitle: "Un affinement collaboratif rigoureux",
    content:
      (
        <>
          <p>
            {`Votre logo est l'ambassadeur de votre marque ou de votre association, il doit être parfait.`}
          </p>

          <p>
            {`C'est pourquoi`}<span className="font-bold">{` nous ajustons la piste retenue autant de fois que nécessaire `}</span>{`(couleurs, courbes, polices d'écriture) jusqu'à obtenir le coup de cœur absolu.`}
          </p>

          <p>
            <span className="font-bold">{`Mon engagement est total : aucun client ne repart insatisfait.`}</span>{` Nous ne nous arrêtons que lorsque vous êtes fier et 100% prêt à arborer votre nouvelle identité. `}
          </p>
        </>
      )
  },
  {
    value: "item-6",
    trigger: "Finalisation & livraison",
    triggerSubtitle: "Vos fichiers prêts à l'emploi",
    content:
      (
        <>
          <p>
            {`Une fois le visuel validé, je prépare méticuleusement vos fichiers finaux.`}
          </p>

          <div className="flex flex-col gap-2">
            <span>{`Vous recevez un pack complet organisé et structuré contenant votre logo sous tous les formats indispensables :`}</span>
            <div className="flex flex-col ml-4 mb-4">
              <span>{`✓ Fichier vectoriel haute définition pour l'impression `}</span>
              <span>{`✓ Formats SVG, PNG, PDF et autres formats nécessaires`}</span>
              <span>{`✓ Versions couleur, noir, blanc`}</span>
              <span>{`✓ Fichiers optimisés pour le web et les réseaux sociaux`}</span>
            </div>
          </div>

          <p>
            <span className="font-bold">{`Propriété et Droits d'auteur : `}</span>{`C'est votre image, elle vous appartient. Dès la finalisation de la prestation et le règlement effectué,`}<span className="font-bold">{` l'intégralité des droits d'utilisation et de propriété intellectuelle du logo vous est cédée. `}</span>{`Vous êtes libre de l'exploiter sur tous les supports que vous souhaitez, sans limite de temps ni frais cachés.`}
          </p>

          <p>
            <span className="font-bold">{`Service Après-Vente & Suivi: `}</span>{`Mon accompagnement ne s'arrête pas à la livraison. Un doute au moment d'envoyer un fichier à votre imprimeur ? Une question sur l'utilisation d'un format ? `}<span className="font-bold">{`Je reste disponible pour assurer le SAV et répondre à toutes vos questions, `}</span>{`même après la fin du projet. Vous ne serez jamais laissé sans réponse.`}
          </p>

          <p>
            💡<span className="italic">{`Option Identité Complète :`}</span>{` Si vous avez choisi le pack "Identité Visuelle Complète", je vous livre en plus votre `}<span className="font-bold">{`Charte Graphique complète (guide PDF d’explication).`}</span>{`Ce document clé détaille les règles d'utilisation de votre logo, vos codes couleurs précis, vos typographies, des inspirations pour votre futur site internet, ainsi que le design de vos cartes de visite prêt à imprimer.`}
          </p>
        </>
      )
  },
]

export function AccordionBasic() {
  return (
    <Accordion defaultValue={["item-1"]} className="max-w-lg">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>
            <div>
                <p>{item.trigger}</p>
                <p>{item.triggerSubtitle}</p>
            </div>
          </AccordionTrigger>

          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
