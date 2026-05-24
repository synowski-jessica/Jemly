import Image from 'next/image'
import SliderCard from './sliderCard'

export default function Creation () {
    return (
        <>
            <section id="creations"className="pb-20 lg:py-16 xl:py-34 2xl:py-20 px-5 md:px-14 xl:px-32">
                    <div className=' max-w-324.25 mx-auto'>
                        <div className="relative inline-block">
                            <h2 className="">{`Mes créations`}</h2>
                             <Image 
                                src="/feather.png"
                                alt="plume décorative"
                                className="absolute -top-2 md:top-0 lg:top-2 -right-18"
                                width={80}
                                height={80}
                            />
                        </div>
                        
                        <p className="my-10">{`Chez Jemly Studio, chaque projet est une aventure humaine et créative. Je prends le temps de vous écouter pour créer une identité authentique, cohérente et impactante.`}</p>

                       <div className='flex flex-col gap-20'>
                            <SliderCard
                                labelTag= "Biscuiterie artisanale"
                                name= "Les péchés biscuités"
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
                                labelTag= "Association"
                                name= "La Patte Chanceuse"
                                firstImageLink= "logo_la_patte_chanceuse.svg"
                                secondImageLink= "logo_la_patte_chanceuse_avant.jpg"
                                description= {`Une association de placement d'animaux qui méritait une identité aussi douce que sa mission. Trèfle, signe infini et petites pattes — un équilibre entre émotion et lisibilité.`}
                                firstLabelDelivered= "Logo complet"
                                secondLabelDelivered= "SVG + PNG"
                                thirdLabelDelivered= "Fichiers sources"
                                linkCustomerLabel= {`🐾 Retrouvez La Patte Chanceuse sur `}
                                linkCustomerUrl= "https://www.facebook.com/profile.php?id=61552283733983"
                                linkCustomerSocialNetwork= "Facebook"
                            />
                        </div>
                    </div>
            </section>
        </>
    )
}