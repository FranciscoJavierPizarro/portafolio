import SubjectGraph from "./SubjectGraph"
import { subjects } from "../data/subjects"
export default function AboutMe() {
    return (
        <>
         <div className="w-3/4 mx-8 sm:w-1/2 sm:mx-auto sm:text-justify">
            <p>
                Soy Francisco Javier Pizarro Martínez, estudiante de 2º de ingeniería informática en la universidad de Zaragoza.
            </p>
            <p>
                Entre mis logros académicos esta una mención de honor en bachillerato.
            </p>
            <p>
                Sobre mis habilidades, las que destacan son:
            </p>
            <ul className="list-disc list-inside sm:pl-4">
                <li>
                    Capacidad de resolver problemas de formas únicas y óptimas.
                </li>
                <li>
                    Capacidad de liderazgo y buenas habilidades comunicativas en lo referente a trabajar en equipos.
                </li>
                <li>
                    Cualificado para poder desenvolverme correctamente en inglés.
                </li>
                <li>
                    Capacidad de aprender de manera muy rápida
                </li>
            </ul>
            <p>
                Pertenezco a la asociación CodeLabZGZ, además de la escuela de CTFs, en mi tiempo libre me gusta aprender cosas nuevas
                y entrenar.
            </p>
            <p>
                Mis tecnologías favoritas son:
            </p>
            <ul className="list-disc list-inside sm:pl-4">
                <li>
                    Python
                </li>
                <li>
                    NextJs
                </li>
                <li>
                    C++
                </li>
            </ul>
            <p>
                Resultados académicos en la universidad:
            </p>
            <SubjectGraph data={subjects}/>
         </div>
        </>
    )
}