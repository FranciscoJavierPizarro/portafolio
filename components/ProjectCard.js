import Link from "next/link"
export default function ShowCase({name, img, link, descp}) {
    return(
        <div className="w-full h-52 relative">
            <Link href={link}>
                <div className="flex flex-col gap-y-4 place-content-center w-full h-full rounded-xl p-3 bg-gray-200 hover:bg-gray-300 hover:shadow cursor-pointer">
                    
                </div>
            </Link>
        </div>
    )
}