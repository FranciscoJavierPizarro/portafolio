import Link from "next/link"
import toast, { Toaster } from 'react-hot-toast';
import { FiFile } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";


export default function Contactar() {
    function copiar() {
        navigator.clipboard.writeText("pizarrojavier000@gmail.com");
        // alert("Se ha copiado en su portapapeles\n mi dirección de correo electrónico\n para que me pueda contactar");
        toast.success("Se ha copiado mi direción de correo electrónico en su portapapeles")
      } 
    return (
        <>
            <Toaster/>
            <div className="mx-auto w-1/2">
                <p className="text-justify pt-4">
                    Para contactar conmigo o ver mi curriculum vitae:
                </p>
                <div className="mx-auto w-full pt-4 gap-x-4 place-items-center grid grid-cols-5 content-center">
                    <div className="h-16 p-2 items-center justify-center rounded-xl hover:-translate-y-4">
                        <Link href="https://es.linkedin.com/in/franciscopizarrojavier">
                        <a>
                            <div className="shadow-md h-8 w-8">
                                <FiLinkedin className="w-full h-full"/>
                            </div>
                        </a>
                        </Link>
                    </div>
                    <div className="h-16 p-2 items-center justify-center rounded-xl hover:-translate-y-4">
                        <Link href="https://t.me/pizarrojavier">
                        <a>
                            <div className="shadow-md h-8 w-8">
                                <FiSend className="w-full h-full"/>
                            </div>
                        </a>
                        </Link>
                    </div>
                    <div className="h-16 p-2 items-center justify-center rounded-xl hover:-translate-y-4">
                        <button onClick={copiar}>
                        <a>
                            <div className="shadow-md h-8 w-8">
                                <FiMail className="w-full h-full"/>
                            </div>
                        </a>
                        </button>
                    </div>
                    <div className="h-16 p-2 items-center justify-center rounded-xl hover:-translate-y-4">
                        <Link href="https://github.com/FranciscoJavierPizarro">
                        <a>
                            <div className="shadow-md h-8 w-8">
                                <FiGithub className="w-full h-full"/>
                            </div>
                        </a>
                        </Link>
                    </div>
                    <div className="h-16 p-2 items-center justify-center rounded-xl  hover:-translate-y-4">
                    <a href="cv.pdf">
                        <div className="shadow-md h-8 w-8">
                            <FiFile className="w-full h-full"/>
                        </div>
                    </a>
                    </div>
                </div>                
            </div>
        </>
    )
}