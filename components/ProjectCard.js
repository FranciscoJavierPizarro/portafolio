import Link from "next/link"
import Image from "next/image";
import { motion } from "framer-motion";
const Tool = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
export default function ShowCase({name, img, link, descp}) {
    return(
        <div className="w-full h-auto relative">
            <motion.div
            variants={Tool}
            className="">
            <Link href={link}>
                <div className="flex gap-x-4 place-content-justify w-full h-auto rounded-xl p-3 bg-gray-200 hover:bg-gray-300 hover:shadow cursor-pointer hover:scale-110">
                    <div className="w-32 h-32 pl-4">
                        <Image src={img} width={32} height={32} layout="responsive" className="object-contain" alt={name}/>
                    </div>
                    <div className="flex flex-col pl-12 w-full py-4">
                        <p className="pt-1.5 font-semibold">
                            {name}
                        </p>
                        <p>
                            {descp}
                        </p>
                    </div>
                </div>
            </Link>
            </motion.div>
        </div>
    )
}