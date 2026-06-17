import { AccordionFaqCustomLogo } from "./accordionFaqCustomLogo";
import Image from 'next/image'

export function CustomLogoFaqSection () {
    return (
        <>
            <section className="mt-15 flex flex-col gap-10">
                <div className="uppercase text-text-secondary tracking-widest">{`questions fréquentes`}</div>

                <p className="text-lg font-bold">{`Ce qu'on me demande`}<span className="text-accent">{` souvent`}</span></p>

                <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-20 ">
                    <div className="w-full  md:w-2/5 shrink-0 overflow-hidden rounded-xl shadow-md mt-2">
                        <Image 
                            src="/pechesComment.jpg" 
                            alt="" 
                            width={300} 
                            height={200} 
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="w-full md:flex-1" style={{alignSelf: 'flex-start'}}>
                        <AccordionFaqCustomLogo/>
                    </div>
                </div>     
            </section>
        </>
    )
}