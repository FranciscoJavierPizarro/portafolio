import Link from "next/link"
import Curriculum from "./Curriculum";
export default function Contactar() {
    function copiar() {
        navigator.clipboard.writeText("pizarrojavier000@gmail.com");
        alert("Se ha copiado en su portapapeles\n mi dirección de correo electrónico\n para que me pueda contactar");
      } 
    return (
        <>
            <div className="mx-auto w-1/2">
                <p className="text-justify pt-4">
                    Para contactar conmigo o ver mi curriculum vitae:
                </p>
                <div className="mx-auto w-full pt-4 gap-x-4 place-items-center grid grid-cols-4 content-center">
                    <div className="h-16 p-2 bg-gray-200 items-center justify-center rounded-xl hover:bg-gray-300 hover:shadow">
                        <Link href="https://es.linkedin.com/in/franciscopizarrojavier">
                        <a>
                            <div className="shadow-md h-14 w-14">
                                <img className="h-full w-full object-contain" src="linkedin.png"/>,
                            </div>
                        </a>
                        </Link>
                    </div>
                    <div className="h-16 p-2 bg-gray-200 items-center justify-center rounded-xl hover:bg-gray-300 hover:shadow">
                        <Link href="https://t.me/pizarrojavier">
                        <a>
                            <div className="shadow-md h-14 w-14">
                                <img className="h-full w-full object-contain" src="telegram.png"/>,
                            </div>
                        </a>
                        </Link>
                    </div>
                    <div className="h-16 p-2 bg-gray-200 items-center justify-center rounded-xl hover:bg-gray-300 hover:shadow">
                        <button onClick={copiar}>
                        <a>
                            <div className="shadow-md h-14 w-14">
                                <img className="h-full w-full object-contain" src="gmail.png"/>,
                            </div>
                        </a>
                        </button>
                    </div>
                    <Curriculum/>
                </div>                
            </div>
        </>
    )
}