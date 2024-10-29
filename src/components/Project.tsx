import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useState } from "react";
import { GITHUB_LINK } from "../lib/constants";

type ProjectProps = {
  name: string;
  tags: string[];
};

export default function Project({ name, tags }: ProjectProps) {
  const variants = {
    end: { top: "0rem", left: "0rem" },
    start: { top: "-5rem", left: "-5rem" },
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="grid grid-cols-8 grid-rows-2 pb-6">
      <motion.a
        target="blank"
        href="/"
        className="peer col-start-1 row-span-3 h-[320px] w-[500px] rounded-3xl opacity-40 border-transparent hover:border-2 bg-clip-border overflow-hidden animate-sheen sheen shadow-lg hover:shadow-xl"
        whileHover={{ scale: [null, 1.05, 1.04], opacity: [null, 50, 100] }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <img
          src="src/assets/marco-murakami-Ap4wkcAr4Wk-unsplash.jpg"
          className="object-cover"
        ></img>
      </motion.a>
      <motion.aside
        layoutId="project-desc"
        transition={{
          type: "spring",
          bounce: 0.2,
        }}
        variants={variants}
        initial="start"
        animate={isHovered ? "end" : "start"}
        className="relative pointer-events-none place-content-center col-start-4 col-span-5 row-start-2 z-9"
      >
        <h3 className="absolute -top-5 right-3 text-right drop-shadow-md z-10">
          {name}
        </h3>
        <p className="relative text-xl leading-relaxed tracking-wide text-white font-thin bg-gray-900 bg-gradient-to-tl from-gray-900 to-white/10 rounded-md px-6 py-4 shadow-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi
          repellendus corporis in quasi deleniti tempore at reiciendis officiis
          consequuntur?
          <a href={GITHUB_LINK}>
            <Icon
              icon="cib:github"
              width="2.5rem"
              className="absolute -bottom-4 right-4 pointer-events-auto"
            />
          </a>
        </p>
        <ul className="flex flex-wrap gap-2 m-2">
          {tags.map((tag) => (
            <li className="tag">{tag}</li>
          ))}
        </ul>
      </motion.aside>
    </section>
  );
}
