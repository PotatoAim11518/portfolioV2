import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useState } from "react";
import { viewVariants } from "../../../lib/motion";

type ProjectProps = {
  project: {
    name: string;
    image: string;
    github: string;
    href: string;
    description: string;
    tags: string[];
  };
};

export default function Project({ project }: ProjectProps) {
  const { name, image, github, href, description, tags } = project;
  const variants = {
    start: { top: "0rem", left: "0rem" },
    end: { top: "8rem", left: "10rem" },
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      variants={viewVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-8 grid-rows-auto py-14"
    >
      <motion.a
        target="blank"
        href={href}
        className="flex items-center justify-center peer col-start-1 row-span-3 h-[320px] w-[500px] rounded-3xl opacity-40 border-transparent hover:border-2 bg-clip-border overflow-hidden animate-glow glow shadow-lg hover:shadow-xl"
        whileHover={{ scale: [null, 1.05, 1.04], opacity: [null, 50, 100] }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={name}
          className="h-full m-auto object-cover"
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
        className="relative pointer-events-none place-content-center col-start-3 row-start-2 col-span-5 z-9"
      >
        <div className="relative flex flex-col justify-start items-start">
          <h3 className="absolute right-4 -top-5 drop-shadow-md z-10">
            {name}
          </h3>
          <p className="relative text-xl leading-relaxed tracking-wide text-white font-thin bg-gray-900 bg-gradient-to-tl from-gray-900 to-white/10 rounded-md px-6 py-4 shadow-md">
            {description}
            <a href={github} target="blank">
              <Icon
                icon="cib:github"
                width="2.5rem"
                className="absolute -bottom-4 right-4 pointer-events-auto"
              />
            </a>
          </p>
          <ul className="flex flex-wrap gap-2 m-2">
            {tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </motion.aside>
    </motion.section>
  );
}
