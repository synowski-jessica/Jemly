export default function ColorTag ({title, note}:{title:string, note?:string}) {
    return (
        <>
            <span className="bg-tag-primary py-1 px-4 rounded-full w-fit text-center tracking-widest" style={{ fontSize: note}}>
                {title}
            </span>
        </>
    )
}