import Link from 'next/link';
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import Image from 'next/image'

export function Footer () {
    return(
        <>
             <footer className="bg-bg-secondary px-5 md:px-14 xl:px-32 py-5">
                <div className=' max-w-324.25 mx-auto'>
                    <div className='flex flex-col gap-10 lg:flex-row lg:justify-between'>
                        <div className="flex flex-col gap-4 lg:flex-1">
                            <p className="text-text-primary tracking-[0.2em] font-bold text-lg">{`Jem`}<span className="text-accent">{`ly`}</span></p>

                            <div className='flex items-center'>
                                <span>{`Fait avec`}</span>
                                <Image src="/heart.png" width={50} height={50} alt="icone coeur"  style={{ width: '50px', height: '50px', objectFit: 'contain' }}/>                          
                                <span>{`et beaucoup de café`}</span>
                                <Image src="/coffee-cream.png" width={50} height={50} alt="icone café"  style={{ width: '50px', height: '50px', objectFit: 'contain' }}/>
                            </div>

                            <Link href="/#contact" className=''>{`Vous avez un projet ? `}<span className='underline text-text-secondary'>{`Parlons-en →`}</span></Link>
                        </div>

                        <div className='flex justify-around lg:flex-1'>
                            <div className='flex flex-col gap-4'>
                                <p className='text-note text-text-muted tracking-[0.2em]'>{`NAVIGATION`}</p>

                                <div className='flex flex-col gap-2 lg:gap-4'>
                                    <Link href='/#accueil' className='hover:underline'>Accueil</Link>
                                    <Link href='/#apropos' className='hover:underline'>A propos</Link>
                                    <Link href='/#creations' className='hover:underline'>Créations</Link>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <p className='text-note text-text-muted tracking-[0.2em] uppercase'>{`réseaux`}</p>

                                <div className='flex flex-col gap-2 lg:gap-4'>
                                    <div className='flex gap-2'>
                                        <CiInstagram  className='text-text-secondary' />
                                        <Link href='https://www.instagram.com/jemlydesign/' className='hover:underline' target="_blank" rel="noopener noreferrer">Instagram</Link>
                                    </div>

                                    <div className='flex gap-2'>
                                        <CiFacebook className='text-text-secondary' />
                                        <Link href='' className='hover:underline' target="_blank" rel="noopener noreferrer">Facebook</Link>
                                    </div>

                                    <div className='flex gap-2'>
                                        <CiLinkedin  className='text-text-secondary' />
                                        <Link href='' className='hover:underline' target="_blank" rel="noopener noreferrer">Linkedin</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10 border-t border-accent-2 flex flex-col items-center gap-2 lg:flex-row lg:justify-between'>
                        <div className='mt-5'>
                            <p className='text-note'>{`© 2025 Jemly - Tous droits réservés.`}</p>
                        </div>

                        <div className='flex gap-3 lg:mt-5'>
                            <Link href="/mentions-legales" className='text-note underline'>{`Mentions légales `}</Link>
                            <span>|</span>
                            <Link href="/politique-de-confidentialite" className='text-note underline'>{` Politique de confidentialité`}</Link>
                        </div>
                    </div>
                </div>
             </footer>
        </>
    )
}