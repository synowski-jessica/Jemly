import Image from 'next/image'
import { AccordionBasic } from './accordionBasic'

export default function Work () {
    return (
        <>
            <section id="apropos"className="pb-20 lg:py-16 xl:py-34 2xl:py-20 px-5 md:px-14 xl:px-32">
                <div className='max-w-324.25 mx-auto flex flex-col gap-10'>
                    <h2>{`Mon processus de travail `}</h2>

                    <p>{`Chaque projet mérite une approche sur mesure. `}</p>

                    <div className='flex justify-between'>
                        <Image src="/jessWork.png" alt="gérante de Jemly en pleine séance de travail" width={300} height={600} className='hidden lg:block lg:rounded-xl'/>

                        <AccordionBasic/>
                    </div>
                </div>
            </section>
        </>
    )
}