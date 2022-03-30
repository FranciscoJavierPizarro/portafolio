import { techs } from "../data/techs"
import Card from "./Card"
import { motion } from "framer-motion"
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  }
    
  const itemAn = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

export default function Tecnologias() {
    const list = techs.map((item, idx) => (
        
        <motion.li key={idx} className="" variants={item}>
        
        <Card
        key={idx}
        name = {item.name}
        img = {item.img}
        link = {item.link}
        />

        </motion.li>
    ))
    return (
        <>
        <div className="mx-auto w-1/2">
            <div className="mt-4">
                <p className="text-justify ml-10">
                    Tecnologias que empleo:
                </p>
            </div>
            <div className="">
            <motion.ul
                className="mt-8 place-items-center grid grid-cols-4 gap-x-12 gap-y-12 content-center"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {techs.map((item, idx) => (
                    
                    <motion.li key={idx} className="" variants={itemAn}>
                    
                    <Card
                    key={idx}
                    name = {item.name}
                    img = {item.img}
                    link = {item.link}
                    />

                    </motion.li>
                ))}
            </motion.ul>
            </div>
        </div>
        </>
    )
}