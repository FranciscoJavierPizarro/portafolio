import { techs } from "../data/techs"
import Card from "./Card"
import SubjectGraph from "./SubjectGraph"
import { subjects } from "../data/subjects"
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
        <div className="mt-4 mx-auto w-1/2">
            <p className="text-justify ml-10">
                Tecnologias que empleo:
            </p>
        </div>
        <div className="mt-8 mx-auto w-1/2 place-items-center grid grid-cols-4 gap-x-12 gap-y-12 content-center">
            {list}
        </div>
        <div className="mx-auto w-1/2 place-items-center content-center mt-8">
            <p className="text-justify ml-10">
                Resultados académicos en la universidad:
            </p>
            <SubjectGraph data={subjects}/>
        </div>
        </>
    )
}