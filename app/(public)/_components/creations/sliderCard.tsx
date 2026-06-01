import ColorTag from "@/app/components/tag/colorTag";
import { Slider } from "./slider";
import Link from "next/link";
import OutlineTag from "@/app/components/tag/outlineTag";

export default function SliderCard (
    {
     reverse= false,
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
     reverse?:boolean,
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
            <div className={`flex flex-col items-start gap-6 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:gap-24 w-full`}>
                <div className="flex flex-col gap-6 lg:hidden">
                    <span className="tracking-widest text-note">{labelTag}</span>

                    <h3 className='text-black!'>{name}</h3>
                </div>
               
                <div className="w-full lg:flex-1 shrink-0">
                    <Slider firstImageLink={firstImageLink} secondImageLink={secondImageLink}/>
                </div>

                <div className="w-full flex flex-col gap-6 lg:self-center lg:flex-1">
                    <div className="hidden lg:flex lg:flex-col lg:gap-6">
                        <span className="tracking-widest text-note">{labelTag}</span>
                  
                        <h3 className='text-black!'>{name}</h3>
                    </div>

                    <p>{description}</p>
                
                    <div className=' flex flex-col items-start gap-4'>
                        <div className='flex flex-wrap gap-2 md:gap-4'>
                            <OutlineTag title={firstLabelDelivered} note="var(--text-note)"/>

                            <OutlineTag title={secondLabelDelivered} note="var(--text-note)"/>

                            <OutlineTag title={thirdLabelDelivered} note="var(--text-note)"/>
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
            </div>
        </>
    )
}