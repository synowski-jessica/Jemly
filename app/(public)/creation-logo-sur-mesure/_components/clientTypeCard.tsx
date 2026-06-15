import { ComponentType } from "react";

export function ClientTypeCard({title, Icon, paragraph1, paragraph2}:{title:string, Icon:ComponentType<{ className?: string }>, paragraph1:string, paragraph2:string}) {
    return (
        <>
            <div className="shadow-md rounded-lg flex flex-col items-center gap-5 p-4">
                <div className="flex gap-5 items-center">
                    <div className="border border-gray-200 rounded-full w-7 h-7 flex items-center justify-center">
                    <Icon className="text-md text-text-secondary" />
                    </div>

                    <div className="font-bold uppercase text-text-secondary">{title}</div>
                </div>

                <div className="flex flex-col gap-5">
                    <p>{paragraph1}</p>

                    <p>{paragraph2}</p>
                </div>
            </div>
        </>
    )
}