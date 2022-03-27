import Link from "next/link"
export default function ShowCase({name, img, link, descp}) {
    return(
        <div className="w-full h-auto relative">
            <Link href={link}>
                <div className="flex gap-x-4 place-content-justify w-full h-auto rounded-xl p-3 bg-gray-200 hover:bg-gray-300 hover:shadow cursor-pointer">
                    <div className="w-32 h-32 pl-4">
                        <img src={img} className="w-32 h-32 object-contain"/>
                    </div>
                    <div className="flex flex-col pl-12 w-full py-4">
                        <p className="pt-1.5 font-semibold">
                            {name}
                        </p>
                        <p>
                            {descp}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}