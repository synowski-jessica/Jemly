export default function ColorTag ({title, note}:{title:string, note?:string}) {
    return (
        <>
            <span className="bg-tag-primary py-2 px-6 rounded-full w-fit text-center" style={{ fontSize: note}}>
                {title}
            </span>
        </>
    )
}