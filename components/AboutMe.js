import { events } from "../data/events"
import ShowCase from "./ShowCase"
export default function AboutMe() {
    const list = events.map((item, idx) => (
        <ShowCase
        key={idx}
        name = {item.name}
        img = {item.img}
        link = {item.link}
        />
    ))
    return (
        <>
         <div className="h-full w-1/2 mx-auto justify-center content-center gap-x-8 text-justify">
            <p>
                Soy Francisco Javier Pizarro Martínez, estudiante de 2º de ingeniería informática en la universidad de Zaragoza.
            </p>
            <p>
                Entre mis logros académicos esta una mención de honor en bachillerato.
            </p>
            <p>
                Sobre mis habilidades, las que destacan son:
            </p>
            <ul className="list-disc list-inside pl-4">
                <li>
                    La capacidad de resolver problemas de formas únicas y óptimas.
                </li>
                <li>
                    Capacidad de liderazgo y buenas habilidades comunicativas en lo referente a trabajar en equipos.
                </li>
            </ul>
            <p>
                Pertenezco a la asociación CodeLabZGZ, además de la escuela de CTFs, en mi tiempo libre me gusta aprender cosas nuevas
                y entrenar.
            </p>
            <p>    
                Eventos en los que he participado:
            </p>
            <div className="flex gap-x-4 overflow-x-auto pt-4">
                {list}
            </div>
         </div>
        </>
    )
}