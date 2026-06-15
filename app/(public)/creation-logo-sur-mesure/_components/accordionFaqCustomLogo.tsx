import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
    trigger: "Et si le résultat ne me plaît pas ?",
    content:
      (
        <>
          <p>{`On ajuste autant de fois que nécessaire. Je ne livre pas un logo si vous n'en êtes pas conquis(e). Aucun client ne repart insatisfait.`}</p>
        </>
      ),
  },
  {
    value: "item-3",
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
    <Accordion defaultValue={["item-1"]}>
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


