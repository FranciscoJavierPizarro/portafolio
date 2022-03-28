import Link from "next/link"
import { useRouter } from "next/router"
export default function Menu() {
    const router = useRouter()
    return (
        <>
        <div className="w-auto gap-y-8 uppercase font-sans-sheriff">
            <div className="text-lg font-bold">       
            Javier Pizarro    
            </div> 
            <div className="flex gap-x-8 text-gray-700 font-semibold">
            
            <p className={router.pathname === "/proyectos" ? "text-azul" : "hover:text-azul"}>
                <Link href="proyectos">
                    Proyectos y eventos
                </Link>
            </p>
            <p className={router.pathname === "/conocimientos" ? "text-azul" : "hover:text-azul"}>
                <Link href="conocimientos">
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