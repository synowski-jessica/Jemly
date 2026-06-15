import { CiDiscount1 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

export function OfferCard ({title, subtitle, oldPrice, newPrice, alert}:{title:string, subtitle:string, oldPrice:string, newPrice: string, alert:string}) {
    return (
        <>
            <div className="flex flex-col bg-bg-tertiary rounded-lg lg:flex-row lg:max-w-5xl lg:mx-auto lg:w-full lg:gap-30 lg:px-8 lg:py-4">
              <div className="flex-1 flex justify-center gap-4 p-4 lg:justify-start">
                <CiDiscount1 className="text-4xl text-text-secondary"/>

                <div className="flex flex-col">
                  <p className="text-text-secondary font-bold text-lg">{title}</p>

                  <p className="italic">{subtitle}</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-8 items-center p-4">
                <div className="flex flex-col gap-1 items-center">
                  <p className="line-through">{oldPrice}</p>
                  <p className="text-xl font-bold">{newPrice}</p>
                </div>
               
                <div className="flex items-center justify-center gap-2 bg-accent-2 shadow-md border border-text-secondary py-1 px-4 rounded-full">
                  <AiOutlineFire className="text-xl text-text-secondary" />
                  <p className="text-text-secondary">{alert}</p>
                </div>
              </div>   
            </div>   
        </>
    )

}