import { AccordionFaqIdentity } from './accordionFaqIdentity'

export function IdentityFaqSection () {
    return (
        <>
            <section className="mt-15 flex flex-col gap-10">
                <div className="uppercase text-text-secondary tracking-widest">{`questions fréquentes`}</div>

                <p className="text-lg font-bold">{`Ce qu'on me demande`}<span className="text-accent">{` souvent`}</span></p>

                <AccordionFaqIdentity/>
            </section>
        </>
    )
}