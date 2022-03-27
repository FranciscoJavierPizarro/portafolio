import Link from "next/link"
import { useRouter } from "next/router"
export default function Menu() {
    const router = useRouter()
    return (
        <>
        <div className="w-auto gap-y-8 uppercase font-sans-sheriff">
            <div className="text-lg font-semibold">       
            Javier Pizarro    
            </div> 
            <div className="flex gap-x-8 text-gray-700 hover:text-gray-900">
            
            <p className={router.pathname === "/proyectos" ? "text-black underline" : ""}>
                <Link href="proyectos">
                    Proyectos y eventos
                </Link>
            </p>
            <p className={router.pathname === "/conocimientos" ? "text-black underline" : ""}>
                <Link href="conocimientos">
                    Conocimientos
                </Link>
            </p>
            <p className={router.pathname === "/" ? "text-black underline" : ""}>
                <Link href="/">
                    Sobre mi
                </Link>
            </p>
            </div> 
        </div>
         
        </>
    )
}