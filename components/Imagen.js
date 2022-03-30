import Image from "next/image"
import jav from "/public/javier.jpg";
export default function Imagen() {
    return (
        <>
        <div className="mt-2 sm:mt-0 w-12 h-12 sm:w-16 sm:h-16 relative sm:mb-8 sm:mr-4">
         <Image src={jav} layout="responsive" className="object-contain" alt="Javier Pizarro"/>
        </div> 
        </>
    )
}