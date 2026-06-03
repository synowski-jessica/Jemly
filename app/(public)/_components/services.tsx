import Image from 'next/image'

export default function Services () {
    return (
        <>
            <section id="services" className="py-20 lg:py-16 xl:py-34 2xl:py-20 px-5 md:px-14 xl:px-32">
                <div className=' max-w-324.25 mx-auto'>
                    <h2>{`Mes services`}</h2>

                    <p className="my-10">{`Chez Jemly Studio, chaque projet est une aventure humaine et créative`}</p>

                    <div className="flex flex-col gap-10 xl:gap-30 md:flex-row">
                        {/* Custom logo creation card */}
                        <div className='shadow-sm w-full md:w-1/2'>
                            <Image src="/logo_card.svg" loading="eager" alt="exemple logo" width={300} height={300}
                                   className="rounded-t-lg w-full h-auto aspect-4/3 object-cover" />
                
                            <div className='flex flex-col gap-5 p-5'>
                                <h3>{`Création de logo sur mesure`}</h3>

                                <p className='mt-5'>{`Un logo unique qui reflète votre personnalité et vos valeurs.`}</p>

                                <p>{`De l'écoute au fichier final, on construit ensemble une identité qui vous ressemble vraiment.`}</p>

                                <a href="/creation-logo-sur-mesure" className='text-text-secondary mt-5'>{`En savoir plus sur ce service -->`}</a> 
                            </div>    
                        </div>

                         {/* Complete visual identity card */}
                        <div className='shadow-sm w-full md:w-1/2'>
                            <Image src="/graphic_charter_card.svg" alt="exemple logo" width={300} height={300}
                                   className="rounded-t-lg w-full h-auto aspect-4/3 object-cover" />

                            <div className='flex flex-col gap-5 p-5'>
                                <h3>{`Identité visuelle complète`}</h3>

                                <p className='mt-5'>{`Logo, palette de couleurs, typographies, conseils ... `}</p>

                                <p>{`Tout ce qu'il faut pour une image cohérente et vraiment impactante sur tous vos supports (carte de visite, flyer ...)`}</p>

                                <a href="/identite_visuelle_complete" className='text-text-secondary mt-5'>{`En savoir plus sur ce service -->`}</a> 
                            </div>    
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}