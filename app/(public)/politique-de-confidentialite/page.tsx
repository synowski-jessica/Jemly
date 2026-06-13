import ColorTag from "@/app/components/tag/colorTag";
import Link from "next/link";

export default function PolitiqueDeConfidentialite () {
    return (
        <>
            <div className="flex flex-col gap-10 mt-30 mb-20 px-5 md:px-14 xl:px-32 py-5">
                <div className="flex flex-col gap-5">
                     <h1>{`Politique de confidentialité`}</h1>
                     <p className="italic">{`Dernière mise à jour: juin 2026`}</p>
                </div>
               


                <section className="flex flex-col gap-5">
                    <h3 className="">{`Responsable du traitement`}</h3>

                    <div>
                        <p>{`Jessica Synowski — Micro-entreprise Jemly Studio`}</p>
                    </div>
                    

                    <div>
                        <p>{`597 Chemin du Chareyron`}</p>
                        <p>{`Lieu-dit Vassalieux`}</p>
                        <p>{`42170 Chambles, France`}</p>
                    </div>

                    <div>
                        <p>{`SIRET: 990 129 462 00018`}</p>
                    </div>

                    <div>
                        <p>{`Email: contact@jemly-studio.fr`}</p>
                    </div>
                </section>

                <section className="flex flex-col gap-5">
                    <h3>{`Données collectées via le formulaire de contact`}</h3>

                    <p>{`Lorsque vous remplissez le formulaire de contact, les données suivantes sont collectées :`}</p>
                    
                    <ul className="list-disc pl-6">
                        <li>{`Nom et prénom`}</li>
                        <li>{`Adresse email`}</li>
                        <li>{`Type de projet`}</li>
                        <li>{`Contenu de votre message`}</li>
                    </ul>

                    <div className="flex flex-col gap-5">
                        <p className="font-bold">{`Base légale : `} <span className="font-normal">{`intérêt légitime (répondre à une demande entrante) — article 6.1.f du RGPD.`}</span></p>
                        <p>{`Ces données sont utilisées uniquement pour répondre à votre demande et établir un devis si vous le souhaitez. Elles ne sont jamais vendues, partagées ou transmises à des tiers.`}</p>
                        <p className="font-bold">{`Durée de conservation :  `} <span className="font-normal">{`3 ans à compter de notre dernier échange.`}</span></p>
                    </div>
                </section>

                <section className="flex flex-col gap-5">
                    <h3>{`Cookies et outils de mesure d'audience`}</h3>

                    <p>{`Ce site utilise des outils d'analyse pour mieux comprendre comment les visiteurs naviguent et améliorer l'expérience proposée. Ces outils déposent des cookies ou collectent des données de navigation.`}</p>

                   <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <p className="font-bold">{`Microsoft Clarity`}</p>
                            <ColorTag title="actif" note="var(--text-note)" />
                        </div>

                        <div className=" flex flex-col gap-4 bg-bg-secondary rounded-lg p-4 border border-gray-200">
                            <p>{`Clarity enregistre les sessions de navigation (heatmaps, clics, scroll) de façon anonymisée afin d'identifier les points de friction sur le site. Il peut collecter des données telles que l'adresse IP, les interactions avec la page et des informations liées au navigateur.`}</p>
                    
                            <Link href="https://privacy.microsoft.com/fr-fr/privacystatement" className="text-text-secondary underline">Politique de confidentialité Microsoft → </Link>
                        </div>
                   </div>

                   <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <p className="font-bold">{`Google Analytics 4`}</p>
                            <ColorTag title="actif" note="var(--text-note)" />
                        </div>

                        <div className=" flex flex-col gap-4 bg-bg-secondary rounded-lg p-4 border border-gray-200">
                            <p>{`GA4 mesure le trafic et les sources de visites (pages vues, durée de session, provenance géographique). Les adresses IP sont anonymisées avant tout traitement. Ces données sont traitées par Google LLC (États-Unis).`}</p>
                    
                            <Link href="https://policies.google.com/privacy" className="text-text-secondary underline">Politique de confidentialité Google → </Link>
                        </div>
                   </div>

                    <p>{`Ces deux outils transfèrent des données vers des serveurs situés aux États-Unis. Ce transfert est encadré par les Clauses Contractuelles Types approuvées par la Commission européenne.`}</p>

                     <p>{`Vous pouvez refuser ces cookies via le bandeau de consentement affiché lors de votre première visite sur le site, ou modifier votre choix à tout moment depuis le lien de gestion des cookies en bas de page.`}</p>
                </section>

                <section className="flex flex-col gap-5 text-justify">
                    <h3>{`Protection du formulaire — reCAPTCHA v3`}</h3>

                    <p>{`Le formulaire de contact est protégé par reCAPTCHA v3 (Google LLC), qui analyse le comportement de navigation de façon invisible pour distinguer un humain d'un robot. Google peut collecter l'adresse IP et des données d'interaction à cette occasion.`}</p>

                     <ul className="list-disc pl-6">
                        <li><Link href="https://policies.google.com/privacy" className="text-text-secondary underline">{`Politique de confidentialité Google`}</Link></li>
                        <li><Link href="https://policies.google.com/terms" className="text-text-secondary underline">{`Conditions d'utilisation Google`}</Link></li>
                    </ul>
                </section>

                <section className="flex flex-col gap-5 text-justify">
                    <h3>{`Vos droits`}</h3>

                    <p>{`Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :`}</p>
                
                    <ul className="list-disc pl-6 flex flex-col gap-1">
                        <li><span className="font-bold">{`Accès : `}</span>{`obtenir une copie de vos données`}</li>
                        <li><span className="font-bold">{`Rectification : `}</span>{`corriger des données inexactes`}</li>
                        <li><span className="font-bold">{`Effacement : `}</span>{`demander la suppression de vos données`}</li>
                        <li><span className="font-bold">{`Opposition : `}</span>{`vous opposer au traitement`}</li>
                        <li><span className="font-bold">{`Portabilité : `}</span>{`recevoir vos données dans un format structuré`}</li>
                        <li><span className="font-bold">{`Limitation : `}</span>{`restreindre temporairement le traitement`}</li>
                    </ul>    

                    <p>{`Pour exercer ces droits, contactez-moi à `}<span className="text-text-secondary underline">{`contact@jemly-studio.fr`}</span>{`. Je m'engage à vous répondre dans un délai maximum d'un mois.`}</p>

                    <p>{`En cas de réclamation non résolue, vous pouvez contacter la `}<span className="font-bold">{`CNIL`}</span>{` : `}<Link href="https://www.cnil.fr/" className="text-text-secondary underline">{` www.cnil.fr`}</Link></p>  
                </section>

                <section>
                    <p className="text-note">{`Ce document a été rédigé pour Jemly Studio — Micro-entreprise de Jessica Synowski. Il ne constitue pas un conseil juridique. En cas de doute, consultez un professionnel du droit.`}</p>
                </section>
            </div>       
        </>
    )
}