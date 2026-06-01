import ColorTag from '@/app/components/tag/colorTag'
import OutlineTag from '@/app/components/tag/outlineTag'
import Image from 'next/image'

export default function About () {
    return (
        <>
            <section id="apropos"className="pb-20 lg:py-16 xl:py-34 2xl:py-20 px-5 md:px-14 xl:px-32">
                <div className='max-w-324.25 mx-auto flex flex-col gap-10 lg:gap-16 lg:flex-row-reverse lg:items-center'>
                    <div className="w-full flex flex-col items-center lg:flex-1">
                        <div className='relative shrink-0 pb-3 pr-5'>
                            <div className="absolute inset-0 pr-5 -translate-y-1 rounded-full border-2 border-accent-2 z-0"></div>
                            <div className="flex justify-center relative z-10 w-full h-full">
                                <Image src="/jess.png" alt="photo de la gérante de Jemly" width={300} height={400} className='object-cover rounded-full border-2 border-accent-2 bg-bg-tertiary w-[300px] h-[400px] lg:w-[350px]  lg:h-[490px]'/>
                                <span className='absolute bottom-10 bg-bg-primary px-6 py-2 rounded-full'>{`JESSICA / JEMLY`}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-col gap-6 lg:gap-10 lg:flex-1'>
                        <h2>{`Créatrice passionnée par les `} <span className="text-accent font-bold italic">{`identités visuelles`}</span></h2>

                        <div className='flex flex-col gap-6'>
                            <p>{`Je suis Jessica, créatrice de Jemly.`}</p>
                            <p>{`Jemly, ce n'est pas un nom de marque choisi au hasard. C'est une histoire personnelle codée en 5 lettres : `}
                                <span className='text-accent bold text-md'>{`J`}</span>{`essica, `}
                                <span className='text-accent bold text-md'>{`E`}</span>{`than, `}
                                <span className='text-accent bold text-md'>{`M`}</span>{`arina, `}
                                {`b`}<span className='text-accent bold text-md'>{`L`}</span>{`ue et `}
                                {`em`}<span className='text-accent bold text-md'>{`Y`}</span>{`— mon fils, ma sœur, ma chienne et ma fille. Les personnes qui me portent chaque jour. `}
                            </p>
                        </div>

                        <div className='flex justify-center gap-2 text-text-secondary'>
                            <ColorTag title={`J`} subtitle={`Jessica`} note="var(--text-note)" fixedWidth={true}/>
                            <ColorTag title={`E`} subtitle={`Ethan`} note="var(--text-note)" fixedWidth={true}/>
                            <ColorTag title={`M`} subtitle={`Marina`} note="var(--text-note)" fixedWidth={true}/>
                            <ColorTag title={`L`} subtitle={`bLue`} note="var(--text-note)" fixedWidth={true}/>
                            <ColorTag title={`Y`} subtitle={`emY`} note="var(--text-note)" fixedWidth={true}/>
                        </div>

                        <div className='border-l-2 border-text-secondary'>
                            <p className='text-note italic pl-2'>{`Ce qui fait ma différence ? Je ne me contente pas de créer de beaux visuels. Je conçois des identités pensées pour le web, optimisées techniquement et alignées avec vos objectifs business. `}</p>
                        </div>

                        <div className='flex flex-wrap gap-2'>
                            <OutlineTag title={`Double compétence`} subtitle={`Design & Dev`} note="var(--text-note)" fixedWidth={true}/>
                            <OutlineTag title={`Approche`} subtitle={`Professionnelle`} note="var(--text-note)" fixedWidth={true}/>
                            <OutlineTag title={`Créations`} subtitle={`Modernes`} note="var(--text-note)" fixedWidth={true}/>
                            <OutlineTag title={`Collaboration`} subtitle={`Bienveillante`} note="var(--text-note)" fixedWidth={true}/>
                        </div>
                        
                        <div>
                            <p className='text-text-secondary'>{`Ensemble, créons une image qui vous ressemble, simplement et avec sens.`}</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}