import Imagen from "./Imagen"
import Menu from "./Menu"
export default function Cabecera({className}) {
    return (
        <>
         <div className={className}>
         <div className="sm:h-full sm:w-full flex justify-center items-start sm:items-center gap-x-2 pb-2 sm:gap-x-8 sm:pb-8">
          <Imagen/>
          <Menu/>
         </div>
         </div>
        </>
    )
}