import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const items = [
  {
    value: "item-1",
    trigger: "Combien de temps dure une identité visuelle complète ?",
    content:
       (
        <>
          <p>
            {`Comptez 4 à 6 semaines en général. C'est plus long qu'un logo seul car on explore davantage l'univers de votre marque - et ça vaut la peine de prendre le temps.`}
          </p>
        </>
      ),
  },
  {
    value: "item-2",
    trigger: "Est ce que je peux commencer par le logo et ajouter la charte graphique plus tard ?",
    content:
      (
        <>
          <p>{`Tout à fait. Si vous préférez démarrer avec le logo seul et compléter avec une identité visuelle dans quelques mois, c'est possible. On en discute lors du premier échange.`} <Link href="/creation-logo-sur-mesure"><span className="text-text-secondary font-bold underline">{"Découvrir l'offre logo à partir de 250€ →"}</span></Link></p>
        </>
      ),
  },
  {
    value: "item-3",
    trigger: "Et si le résultat ne me plaît pas ?",
    content:
      (
        <>
          <p>{`On ajuste autant de fois que nécessaire. Je ne livre pas une identité si vous n'en êtes pas conquis(e). Aucun client ne repart insatisfait — c'est d'autant plus important sur un projet complet comme celui-ci.`}</p>
        </>
      ),
  },
  {
    value: "item-4",
    trigger: "Je n'ai pas d'idée précise, est ce que ça pose problème ?",
    content:
      (
        <>
          <p>
            {`Pas du tout. C'est même souvent comme ça que ça commence ! Le premier échange sert justement à explorer ensemble ce que vous voulez transmettre, même si vous n'avez pas encore les mots pour le dire.`}
          </p>
        </>
      )
  },
  {
    value: "item-5",
    trigger: "A quoi servent les mockups ?",
    content:
      (
        <>
          <p>
            {`Les mockups vous montrent votre identité en situation réelle — sur un packaging, une carte de visite, une publication Instagram, un site web... Les supports choisis dépendent de votre activité et de vos besoins. C'est une mise en scène visuelle pour vous projeter concrètement dans votre univers.`}
          </p>
        </>
      )
  },
  {
    value: "item-6",
    trigger: "La charte graphique PDF, c'est quoi exactement ?",
    content:
      (
        <>
          <p>
            {`Ce document rassemble l’ADN de votre univers visuel : typographies, gestion des icônes et codes couleurs exacts.`}
          </p>

          <p>{`Parce que le web évolue, j'analyse et valide les contrastes de votre palette pour garantir la lisibilité et la conformité de votre marque face aux nouvelles obligations légales d'accessibilité. Enrichi de cas concrets pour éviter les faux pas, c'est l'outil indispensable à transmettre les yeux fermés à vos prestataires pour protéger la cohérence de votre image.`}</p>
        </>
      )
  },
]

export function AccordionFaqIdentity() {
  return (
    <Accordion defaultValue={[""]}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value} className="rounded-xl shadow-md overflow-hidden border-l border-r border-gray-100 ">
          <AccordionTrigger className="bg-rose-card rounded-md">
            <div className="flex items-center gap-x-4">
                <p className="font-bold">{item.trigger}</p>
            </div>
          </AccordionTrigger>

          <AccordionContent className="py-5 overflow-hidden">{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}


