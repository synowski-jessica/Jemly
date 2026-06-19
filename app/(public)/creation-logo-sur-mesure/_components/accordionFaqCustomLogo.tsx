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
    trigger: "Combien de temps dure la création d'un logo ?",
    content:
       (
        <>
          <p>
            {`En général, entre 2 à 4 semaines selon la complexité du projet et les échanges. Le délai est précisé dans votre devis personnalisé`}
          </p>
        </>
      ),
  },
  {
    value: "item-2",
    trigger: "Est-ce que je peux commencer par le logo et ajouter la charte graphique plus tard ?",
    content: (
        <>
          <p>
            {`Tout à fait. Si vous préférez démarrer avec le logo seul et compléter avec une identité visuelle dans quelques mois, c'est possible. On en discute lors du premier échange.`}
          </p>
          <Link href="/identite-visuelle-complete" className="text-text-secondary font-bold underline">{`Découvrir l'offre identité visuelle à partir de 450€ →`}</Link>
        </>
      ),
  },
  {
    value: "item-3",
    trigger: "Et si le résultat ne me plaît pas ?",
    content:
      (
        <>
          <p>{`On ajuste autant de fois que nécessaire. Je ne livre pas un logo si vous n'en êtes pas conquis(e). Aucun client ne repart insatisfait.`}</p>
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
]

export function AccordionFaqCustomLogo() {
  return (
    <Accordion defaultValue={[]}>
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


