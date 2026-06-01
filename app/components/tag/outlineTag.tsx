export default function OutlineTag ({title, subtitle, note, fixedWidth}:{title:string, subtitle?:string, note?:string, fixedWidth?:boolean}) {
    return (
        <>
            <div className={`flex flex-col justify-center items-center border border-tag-secondary-border py-1 px-4 rounded-full ${fixedWidth ? 'w-46' : 'w-fit'} text-center tracking-widest`}>
                <span style={{ fontSize: note}}>{title}</span>

                {subtitle && (
                    <span className="" style={{ fontSize: note }}>
                        {subtitle}
                    </span>
                )}
            </div>
            
        </>
    )
}