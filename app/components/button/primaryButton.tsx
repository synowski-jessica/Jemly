export function PrimaryButton ({label, disabled=true, type="submit", onClick}: {label:string, disabled?:boolean, type?:"submit" | "reset" | "button" | undefined,  onClick?: () => void}) {
    return (
        <>
            <button
                type={type}
                disabled={disabled}
                name={label}
                className={`${disabled
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : " text-button-primary-text"
                } tracking-widest text-md transition-all duration-200 w-full bg-button-primary text-button-primary-text text-center rounded-full py-2 px-5 hover:-translate-y-1`}
                onClick={onClick}
            >
                <span>{label}</span>
            </button>
        </>
    )
}