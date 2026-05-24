import ColorTag from "@/app/components/button/colorTag";
import { Slider } from "./slider";
import Link from "next/link";

export default function SliderCard (
    {
     bgContainer,
     labelTag,
     name,
     firstImageLink,
     secondImageLink,
     description,
     firstLabelDelivered,
     secondLabelDelivered,
     thirdLabelDelivered,
     linkCustomerLabel,
     linkCustomerUrl,
     linkCustomerSocialNetwork
    }:
    {
     bgContainer?:string,
     labelTag:string,
     name:string,
     firstImageLink:string,
     secondImageLink:string,
     description:string,
     firstLabelDelivered:string,
     secondLabelDelivered:string,
     thirdLabelDelivered:string,
     linkCustomerLabel?:string,
     linkCustomerUrl?:string,
     linkCustomerSocialNetwork?:string
    }
) {
    return (
        <>
            <div className='flex flex-col item-start gap-8'>
                <ColorTag title={labelTag}/>

                <h3 className='text-black!'>{name}</h3>
                
                <Slider firstImageLink={firstImageLink} secondImageLink={secondImageLink}/>
            
                <p>{description}</p>

                
            
                <div className=' flex flex-col item-start gap-4'>
                    <p className='text-text-muted'>{`Livré`}</p>

                    <div className='flex gap-4'>
                        <ColorTag title={firstLabelDelivered} note="var(--text-note)"/>

                        <ColorTag title={secondLabelDelivered} note="var(--text-note)"/>

                        <ColorTag title={thirdLabelDelivered} note="var(--text-note)"/>
                    </div>
                </div>

                <div>
                    {linkCustomerUrl && (
                        <p> {linkCustomerLabel}
                        <Link href={linkCustomerUrl} target="_blank" className='text-text-secondary italic underline'>
                            {linkCustomerSocialNetwork}
                        </Link>
                         </p>
                        )}
                </div>
            </div>
        </>
    )
}