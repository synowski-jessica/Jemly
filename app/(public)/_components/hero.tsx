import { PrimaryLink } from '@/app/components/button/primaryLink'
import { SecondaryLink } from '@/app/components/button/secondaryLink'
import Image from 'next/image'

export default function Hero () {
    return (
        <>
            <section id="accueil" className="bg-bg-secondary py-10 lg:py-16 xl:py-34 2xl:py-20 px-5 md:px-14">
                <div className=' max-w-360.25 mx-auto'>
                     <h1 className="sr-only">
                    Création de logo sur mesure — Jemly Studio
                </h1>

                <div>
                    <h2 className='block md:hidden'>{`D'une idée floue à `}
                        <span className="text-accent font-bold italic">{`l'identité parfaite`}</span>
                    </h2>

                    {/* right part */}
                    <div className='mt-18 flex flex-col md:flex-row-reverse md:justify-around md:mt-0'>
                        <div className='max-w-full p-0 md:min-w-1/2 md:p-5'>
                            <div className='flex justify-center gap-10 relative mt-0 md:mt-32 lg:mt-36 2xl:mt-44 2xl:gap-20'>
                                <Image src="/arrow.svg" alt="flèche" width={50} height={50} 
                                       className="absolute -top-8 left-1/2 -translate-x-1/2 w-20  md:-top-10 md:w-24 2xl:w-40 lg:w-28 lg:-top-12 2xl:-top-20" 
                                       style={{ height: 'auto' }}/>
                                <div className='flex flex-col gap-3 items-center'>
                                    <p>{`CROQUIS INITIAL`}</p>
                                    <Image src="/croquis_peches_biscuites.svg" alt="croquis du logo les péchés biscuités" width={100} height={100} 
                                           className="w-22 md:w-36 lg:w-44 2xl:w-64" 
                                           style={{height: 'auto' }}/>
                                </div>

                                <div className='flex flex-col gap-3 items-center'>
                                    <p>{`LOGO LIVRE`}</p>
                                    <Image src="/logo_peches_biscuites.svg" alt="logo les péchés biscuités" width={120} height={120} 
                                           className="w-28 md:w-48 lg:w-56 2xl:w-84 " 
                                           style={{ height: 'auto' }}/>
                                </div>
                            </div>

                            <div className='border-l-2 border-text-secondary mt-4 ml-6 2xl:mt-10'>
                                <p className='ml-2 italic text-note'>{`"Elle a réussi à me faire avoir THE coup de coeur."`}</p>
                                <p className='ml-2  text-accent'>{`— les_peches_biscuites, cliente Jemly`}</p>
                            </div>
                        </div>

                        {/* left part */}
                        <div className='mt-10 flex flex-col gap-2 p-0 max-w-full md:min-w-1/2 md:p-5 md:my-18 lg:my-10 xl:px-18'>
                            <h2 className='hidden md:block md:mb-10 mb:pr-0 lg:pr-48 xl:pr-28 2xl:pr-30'>{`D'une idée floue à `}
                                <span className="text-accent font-bold italic">{`l'identité parfaite`}</span>
                            </h2>

                            <p className='p-0 mt-0 lg:pr-20 xl:pr-20 xl:mt-20'>{`Angélique avait l'idée en tête — elle ne trouvait pas les mots pour la mettre en forme.`}</p>

                            <p className='p-0 mt-0 lg:mt-5 lg:pr-20 xl:pr-20 xl:mt-8'>{`Ensemble, nous avons créé un logo qui donne faim rien qu'en le regardant. C'est ça, une identité qui vous ressemble.`}</p>
                            
                            <div className='mt-8 flex p-0 justify-around lg:pr-20 xl:pr-20 xl:mt-28'>
                                <PrimaryLink label="Devis" link="#contact" />
                                <SecondaryLink label="Mes créations" link="#creations" />
                            </div>
                        </div>
                    </div>

                </div>

                </div>
            </section>
        </>
    )
}