import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"
export default function Proy() {
    const list = projects.map((item, idx) => (
        <ProjectCard
        key={idx}
        name = {item.name}
        img = {item.img}
        link = {item.link}
        descp = {item.descp}
        />
    ))
    return(
        <>
         <div className="flex flex-col h-full w-1/2 mx-auto justify-center content-center gap-y-8 text-justify">
            {list}
            {/* <img src="wp.png"/> */}
         </div>
        </>
    )
}