import Image from 'next/image'
import SliderCard from './sliderCard'

export default function Creation () {
    return (
        <>
            <section id="creations" className="pb-20 lg:py-16 xl:py-34 2xl:py-20 px-5 md:px-14 xl:px-32">
                    <div className=' max-w-324.25 mx-auto'>
                        <div className="relative inline-block">
                            <h2 className="">{`Mes créations`}</h2>
                             <Image 
                                src="/feather.png"
                                alt="plume décorative"
                                className="absolute -top-1 md:top-0 xl:top-3 -right-16 md:-right-18 lg:-right-22 w-18 md:w-20 lg:w-24"
                                width={80}
                                height={80}
                            />
                        </div>
                        
                        <p className="my-20">{`Chez Jemly Studio, chaque projet est une aventure humaine et créative. Je prends le temps de vous écouter pour créer une identité authentique, cohérente et impactante.`}</p>

                       <div className='flex flex-col gap-20 lg:gap-32'>
                            <SliderCard
                                labelTag= "BISCUITERIE ARTISANALE"
                                name= "Les Péchés Biscuités"
                                firstImageLink= "logo_peches_biscuites.svg"
                                secondImageLink= "croquis_peches_biscuites.svg"
                                description= {`Une biscuiterie gourmande, féminine et chaleureuse. De l'idée au logo final — forme festonnée, poche à douille, tons biscuit. Le moment où Angélique a eu THE coup de cœur.`}
                                firstLabelDelivered= "Logo complet"
                                secondLabelDelivered= "Charte graphique"
                                thirdLabelDelivered= "SVG + PNG"
                                linkCustomerLabel= {`🍪 Retrouvez Les Péchés Biscuités sur `}
                                linkCustomerUrl= "https://www.instagram.com/les_peches_biscuites/"
                                linkCustomerSocialNetwork= "Instagram"
                            />

                            <SliderCard
                                reverse= {true}
                                labelTag= "ASSOCIATION"
                                name= "La Patte Chanceuse"
                                firstImageLink= "logo_la_patte_chanceuse.svg"
                                secondImageLink= "logo_la_patte_chanceuse_avant.jpg"
                                description= {`Une association de placement d'animaux qui méritait une identité aussi douce que sa mission. Trèfle, signe infini et petites pattes — un équilibre entre émotion et lisibilité.`}
                                firstLabelDelivered= "Logo complet"
                                secondLabelDelivered= "SVG + PNG"
                                thirdLabelDelivered= "Fichiers sources"
                                linkCustomerLabel= {`🐾 Retrouvez La Patte Chanceuse sur `}
                                linkCustomerUrl= "https://la-patte-chanceuse.vercel.app/"
                                linkCustomerSocialNetwork= "leur site"
                            />

                            <SliderCard
                                labelTag= "ENTREPRISE"
                                name= "Bloopaya"
                                firstImageLink= "logo_bloopaya.svg"
                                secondImageLink= "logo_bloopaya_avant.svg"
                                description= {`Une plateforme d'éducation numérique qui aide les parents à mieux comprendre et encadrer les usages digitaux de leurs enfants.  Refonte complète du logo pour une image claire, rassurante et moderne.`}
                                firstLabelDelivered= "Refonte logo"
                                secondLabelDelivered= "SVG + PNG"
                                thirdLabelDelivered= "Fichiers sources"
                            />
                        </div>
                    </div>
            </section>
        </>
    )
}