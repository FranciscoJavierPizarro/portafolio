import Link from "next/link"
import { useRouter } from "next/router"
export default function Menu() {
    const router = useRouter()
    return (
        <>
        <div className="w-1/2 sm:w-auto gap-y-2 sm:gap-y-8 uppercase font-sans-sheriff ml-6 sm:ml-0">
            <div className="text-lg font-bold">       
            Javier Pizarro    
            </div> 
            <div className="flex flex-col sm:flex-row gap-x-8 text-gray-700 font-semibold">
            <p className={router.pathname === "/proyectos" ? "text-azul" : "hover:text-azul"}>
                <Link href="/proyectos">
                    Proyectos y eventos
                </Link>
            </p>
            <p className={router.pathname === "/conocimientos" ? "text-azul" : "hover:text-azul"}>
                <Link href="/conocimientos">
                    Conocimientos
                </Link>
            </p>
            <p className={router.pathname === "/" ? "text-azul" : "hover:text-azul"}>
                <Link href="/">
                    Sobre mi
                </Link>
            </p>
            </div> 
        </div>
         
        </>
    )
}