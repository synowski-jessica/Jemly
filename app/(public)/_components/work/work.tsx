import Image from 'next/image'
import { AccordionBasic } from './accordionBasic'

export default function Work () {
    return (
        <>
            <section id="apropos" className="pb-20 lg:py-16 xl:py-34 2xl:py-20 px-5 md:px-14 xl:px-32">
                <div className='max-w-324.25 mx-auto flex flex-col gap-20'>
                    <h2>{`Mon processus de travail `}</h2>

                    <p>{`Chaque projet mérite une approche sur mesure. `}</p>

                    <div className='flex items-center gap-16 xl:gap-24 mx-auto w-full'>
                        <Image src="/jessWork.png" loading="eager" alt="gérante de Jemly en pleine séance de travail" width={450} height={500} className='hidden lg:block lg:rounded-xl self-start sticky'/>

                        <div className="w-full min-w-0">
                            <AccordionBasic/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}