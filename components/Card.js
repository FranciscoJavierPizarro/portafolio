import Link from "next/link"
export default function Card({name, img, link}) {
    return(
        <div className="w-32 h-32 relative">
            <Link href={link}>
                <div className="flex flex-col gap-y-1 items-center justify-between w-full h-full rounded-xl p-3 bg-gray-200 cursor-pointer">
                    <div className="w-12 h-12 rounded-xl">
                        <img src={img} className="w-12 h-12 rounded-xl object-contain" />
                    </div>
                    <br/>
                    <div className="flex flex-col w-full h-full pt-1.5">
                        <p className="font-semibold text-lg capitalize truncate w-full text-center">
                        {name}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}