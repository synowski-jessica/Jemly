import { PrimaryLink } from '@/app/components/button/primaryLink'
import { SecondaryLink } from '@/app/components/button/secondaryLink'
import Image from 'next/image'

export default function Hero () {
    return (
        <>
            <section id="accueil" className="bg-bg-secondary min-h-screen py-10 px-5">
                <h1 className="sr-only">
                    Création de logo sur mesure — Jemly Studio
                </h1>

                {/* left part */}
                <div>
                    <h2>{`D'une idée floue à `}
                        <span className="text-accent font-bold italic">{`l'identité parfaite`}</span>
                    </h2>

                    <div className='mt-6'>
                        <div>
                            <div className='flex justify-center'>
                                <Image src="/arrow.png" alt="flèche passage d'une image à l'autre" width={70} height={50} style={{ width: '70px', height: 'auto' }}/>
                            </div>

                            <div className='flex justify-center gap-10'>
                                <div className='flex flex-col gap-3 items-center'>
                                    <p>{`CROQUIS INITIAL`}</p>
                                    <Image src="/croquis_peches_biscuites.png" alt="croquis du logo les péchés biscuités" width={100} height={100} style={{ width: 'auto', height: 'auto' }}/>
                                </div>

                                <div className='flex flex-col gap-3 items-center'>
                                    <p>{`LOGO LIVRE`}</p>
                                    <Image src="/logo_peches_biscuites.svg" alt="logo les péchés biscuités" width={120} height={120} style={{ width: '150px', height: 'auto' }}/>
                                </div>
                            </div>

                            <div className='border-l-2 border-text-secondary mt-4 ml-6'>
                                <p className='ml-2 italic text-note'>{`"Elle a réussi à me faire avoir THE coup de coeur."`}</p>
                                <p className='ml-2  text-accent'>{`— les_peches_biscuites, cliente Jemly`}</p>
                            </div>
                        </div>

                        <div className='mt-10 flex flex-col gap-2'>
                            <p>{`Angélique avait l'idée en tête — elle ne trouvait pas les mots pour la mettre en forme.`}</p>

                            <p>{`Ensemble, nous avons créé un logo qui donne faim rien qu'en le regardant. C'est ça, une identité qui vous ressemble.`}</p>
                        </div>
                    </div>

                    <div className='mt-10 flex justify-around'>
                        <PrimaryLink label="Demander un devis" link="#contact" />
                        <SecondaryLink label="Voir mes créations" link="#creations" />
                    </div>
                </div>
            </section>
        </>
    )
}