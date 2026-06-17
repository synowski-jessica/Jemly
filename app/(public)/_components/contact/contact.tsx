import { RiFlashlightLine } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";
import { BsFileEarmarkText } from "react-icons/bs";
import { ContactForm } from "./contactForm";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export function Contact ({type}:{type:string}) {
    return (
        <>
            <section id="contact" className="pb-20 lg:py-16 xl:py-34 2xl:py-20 px-5 md:px-14 xl:px-32">
                <div className='max-w-324.25 mx-auto flex flex-col gap-10'>
                     <h2 className="">{`On lance`} <span className="text-accent font-bold italic">{`votre projet ?`}</span></h2>

                    <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 lg:items-center">
                        {/* part right */}
                        <div className="flex flex-col gap-10 lg:flex-1">
                            <p>{`Vous avez une idée, un projet, une envie — même floue. Écrivez-moi, je prends le temps d'en parler avec vous. `}</p>

                            <div className="flex flex-col gap-3">
                                <div className="flex gap-4 items-center">
                                    <div className="border border-gray-200 rounded-full w-7 h-7 flex items-center justify-center">
                                        <RiFlashlightLine className="text-md text-text-secondary" />
                                    </div>
                                
                                    <p>{`Réponse sous 24h`}</p>
                                </div>

                                 <div className="flex gap-4 items-center">
                                    <div className="border border-gray-200 rounded-full w-7 h-7 flex items-center justify-center">
                                        <TbMessage className="text-md text-text-secondary" />
                                    </div>
                                
                                    <p>{`Premier échange `}<span className="font-bold">{`gratuit `}</span>{`et `}<span className="font-bold">{`sans engagement`}</span></p>
                                </div>

                                 <div className="flex gap-4 items-center">
                                    <div className="border border-gray-200 rounded-full w-7 h-7 flex items-center justify-center">
                                        <BsFileEarmarkText  className="text-md text-text-secondary" />
                                    </div>
                                
                                    <p>{`Devis personnalisé selon votre projet`}</p>
                                </div>
                            </div>
                    
                        </div>

                        <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}>
                            <ContactForm type={type}/>
                        </ReCaptchaProvider>
                        
                    </div>
                </div>
            </section>
        </>
    )
}