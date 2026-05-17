export const SecondaryLink = ({label, link, onclick}:{label: string, link: string, onclick? : () => void}) => {
    return (
        <>
            <a href={link} onClick={onclick} className="bg-button-outline-bg text-button-outline-text border border-button-outline rounded-full py-2 px-5 hover:-translate-y-1 transition-">
                {label}
            </a>
        </>
    )
}