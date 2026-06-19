"use client";

import { RiArrowDownSLine } from "react-icons/ri";

export function SelectForm ({type}:{type?:string}) {   
    let defaultProject = "--Veuillez choisir une option--";

    if(type === "logo") {
        defaultProject = "Création/Refonte de logo";
    }

     if(type === "identite") {
        defaultProject = "Identité visuelle complète";
    }
    

    return (
        <div className="flex flex-col gap-2">
            <div className='relative'>
                <select 
                    id="project" 
                    name="project"
                    required
                    className="border border-text-secondary rounded-full px-4 py-2 w-full appearance-none outline-none transition-all">
                        <option value={defaultProject}>{defaultProject}</option>
                        <option value="Création/Refonte de logo">Création/Refonte de logo</option>
                        <option value="Charte graphique">Charte graphique</option>
                        <option value="Identité visuelle complète">Identité visuelle complète</option>
                        <option value="Carte de visite">Carte de visite</option>
                        <option value="Mockups/supports de présentation">Mockups/supports de présentation</option>
                        <option value="Autre">Autre</option>
                </select>

                 <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary">
                    <RiArrowDownSLine className="text-xl"/>
                </span>

                <label htmlFor="project" className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-400 z-10 focus:border-text-secondary -top-2.5 text-xs bg-white px-1`}>
                    {`Choisir un type de projet*`}
                </label>
            </div>
        </div>
    )
}