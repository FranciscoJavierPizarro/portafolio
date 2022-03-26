import Link from "next/link"
import Curriculum from "./Curriculum";
export default function Contactar() {
    function copiar() {
        navigator.clipboard.writeText("pizarrojavier000@gmail.com");
        alert("Se ha copiado en su portapapeles\n mi dirección de correo electrónico\n para que me pueda contactar");
      } 
    return (
        <>
            <div className="mx-auto w-1/2 content-center text-center">
                <p>
                    Para contactar conmigo puede emplear los siguientes métodos:
                </p>
                <div className="flex pt-4">
                    <div className="h-8 sm:h-16 w-full p-2 relative items-center justify-center flex">
                        <Link href="https://es.linkedin.com/in/franciscopizarrojavier">
                        <a>
                            <div className="shadow-md h-8 w-8 sm:h-16 sm:w-16">
                                <img className="h-full w-full object-contain" src="linkedin.png"/>,
                            </div>
                        </a>
                        </Link>
                    </div>
                    <div className="h-8 sm:h-16 w-full p-2 relative items-center justify-center flex">
                        <Link href="https://t.me/pizarrojavier">
                        <a>
                            <div className="shadow-md h-8 w-8 sm:h-16 sm:w-16">
                                <img className="h-full w-full object-contain" src="telegram.png"/>,
                            </div>
                        </a>
                        </Link>
                    </div>
                    <div className="h-8 sm:h-16 w-full p-2 relative items-center justify-center flex">
                        <button onClick={copiar}>
                        <a>
                            <div className="shadow-md h-8 w-8 sm:h-16 sm:w-16">
                                <img className="h-full w-full object-contain" src="gmail.png"/>,
                            </div>
                        </a>
                        </button>
                    </div>
                </div>
                <p className="py-4">
                    Mi currículum vitae:
                </p>
                <Curriculum/>
            </div>
        </>
    )
}