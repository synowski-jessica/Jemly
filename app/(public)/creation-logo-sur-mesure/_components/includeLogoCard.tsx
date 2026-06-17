import { ComponentType } from "react";

export function IncludeLogoCard({title, subtitle, Icon}:{title:string, subtitle:string, Icon:ComponentType<{ className?: string }>}){
    return(
        <>
            <div className="flex gap-3">
                <div>
                    <Icon className="text-lg text-text-secondary" />
                </div>

                <div>
                    <p>{title}</p>
                    <p className="text-text-muted">{subtitle}</p>
                </div>
            </div>
        </>
    )
}