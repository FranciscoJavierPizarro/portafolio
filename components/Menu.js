import Link from "next/link"
export default function Menu() {
    return (
        <>
        <div className="w-auto gap-y-8 uppercase font-sans-sheriff">
            <div className="text-lg font-semibold">       
            Javier Pizarro    
            </div> 
            <div className="flex gap-x-8 text-gray-700">
            <p className="hover:text-gray-900">
                <Link href="proyectos">
                    Proyectos
                </Link>
            </p>
            <p className="hover:text-gray-900">
                <Link href="conocimientos">
                    Conocimientos
                </Link>
            </p>
            <p className="hover:text-gray-900">
                <Link href="/">
                    Sobre mi
                </Link>
            </p>
            </div> 
        </div>
         
        </>
    )
}