import { techs } from "../data/techs"
import Card from "./Card"

export default function Tecnologias() {
    const list = techs.map((item, idx) => (
        <Card
        key={idx}
        name = {item.name}
        img = {item.img}
        link = {item.link}
        />
    ))
    return (
        <>
        <div className="mx-auto w-1/2">
            <div className="mt-4">
                <p className="text-justify ml-10">
                    Tecnologias que empleo:
                </p>
            </div>
            <div className="mt-8 place-items-center grid grid-cols-4 gap-x-12 gap-y-12 content-center">
                {list}
            </div>
        </div>
        </>
    )
}