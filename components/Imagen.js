import Image from "next/image"
import jav from "/public/javier.jpg";
export default function Imagen() {
    return (
        <>
        <div className="w-16 h-16 relative mb-8 mr-4">
         <Image src={jav} layout="responsive" className="object-contain" alt="Javier Pizarro"/>
        </div> 
        </>
    )
}