import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"
import { motion } from "framer-motion";
const Stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
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
         <div className="">
            <motion.div
            initial="initial"
            animate="animate"
            variants={Stagger}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col h-full w-3/4 md:w-1/2 mx-8 md:mx-auto justify-center content-center gap-y-8 text-justify"
            >
            {list}
            </motion.div>
         </div>
        </>
    )
}