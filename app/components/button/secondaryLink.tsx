import Link from "next/link"

export const SecondaryLink = ({label, link, onclick}:{label: string, link: string, onclick? : () => void}) => {
    return (
        <>
            <Link href={link} onClick={onclick} className="w-34 lg:w-48 xl:w-56 bg-button-outline-bg text-button-outline-text text-center border border-button-outline rounded-full py-2 px-5 hover:-translate-y-1 transition-">
                {label}
            </Link>
        </>
    )
}