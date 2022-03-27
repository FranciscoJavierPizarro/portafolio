import Link from "next/link"
export default function ShowCase({name, img, link}) {
    return(
        <div className="w-72 h-52 relative pb-4">
            <Link href={link}>
                <div className="flex flex-col place-content-center w-full h-full rounded-xl p-3 bg-gray-200 hover:bg-gray-300 hover:shadow cursor-pointer">
                    <div className="w-64 h-32 rounded-xl p-2">
                        <img src={img} className="w-64 h-32 rounded-xl object-fill" />
                    </div>
                    <br/>
                    <div className="flex flex-col w-full">
                        <p className="font-semibold text-lg capitalize truncate w-full text-center">
                        {name}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}