import Link from "next/link"

export const PrimaryLink = ({label, link, onclick}:{label: string, link: string, onclick? : () => void}) => {
    return (
        <>
            <Link href={link} onClick={onclick} className="w-34 lg:w-48 xl:w-56 bg-button-primary text-button-primary-text text-center rounded-full py-2 px-5 hover:-translate-y-1 transition-">
                {label}
            </Link>
        </>
    )
}