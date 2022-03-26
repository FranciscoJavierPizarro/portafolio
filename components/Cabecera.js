import Imagen from "./Imagen"
import Menu from "./Menu"
export default function Cabecera() {
    return (
        <>
         <div className="h-full w-full flex justify-center items-center gap-x-8 pb-8">
          <Imagen/>
          <Menu/>
         </div>
        </>
    )
}