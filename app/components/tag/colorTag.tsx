export default function ColorTag ({title, subtitle, note, fixedWidth}:{title:string, subtitle?:string, note?:string, fixedWidth?:boolean}) {
    return (
        <>
            <div className={`flex flex-col justify-center items-center bg-tag-primary py-1 px-4 rounded-full ${subtitle ? 'gap-1' : ''} ${fixedWidth ? 'w-16' : 'w-fit'}`}>
                <span className={`text-center tracking-widest ${subtitle ? 'font-bold' : ''}`} style={{ fontSize: note}}>{title}</span>
                {subtitle && (
                    <span className="text-center" style={{ fontSize: note }}>
                        {subtitle}
                    </span>
                )}
            </div>
           
        </>
    )
}