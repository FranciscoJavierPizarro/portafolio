import Link from "next/link"
export default function Menu() {
    return (
        <>
         <div className="w-auto gap-y-8 uppercase font-sans-sheriff">
          <div className="text-lg font-semibold">
           <Link href="/">
            Javier Pizarro    
           </Link>
          </div> 
          <div className="flex gap-x-8 text-gray-700">
           <Link href="proyectos">
               Proyectos
           </Link>
           <Link href="conocimientos">
               Conocimientos
           </Link>
           <Link href="contacto">
               Contacto
           </Link>
         </div> 
         </div>
         
        </>
    )
}