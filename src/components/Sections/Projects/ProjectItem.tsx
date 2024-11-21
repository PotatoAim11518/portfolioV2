import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { viewVariants } from "../../../lib/motion";
import OscillatingArrow from "../../OscillatingArrow";
import { Project } from "../../../lib/types";
import TagList from "./TagList";

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  const { name, image, github, href, description, tags } = project;

  return (
    <motion.section
      variants={viewVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col w-full lg:w-[30%] justify-start items-center my-8 gap-8 lg:gap-6"
    >
      <motion.a
        layoutId={`project-${name}`}
        target="blank"
        href={href}
        className="relative flex flex-col justify-center items-center aspect-[3/2] lg:aspect-[0.707] border-2 lg:border-2 bg-clip-border hover:animate-glow hover:border-transparent glow overflow-hidden shadow-lg hover:transition"
        style={{ borderRadius: "12px" }}
      >
        <img
          src={image}
          alt={name}
          className="peer h-full m-auto object-cover lg:hover:blur-md brightness-100 hover:brightness-75 lg:hover:saturate-0 transition duration-200"
        />
        <div className="lg:absolute pointer-events-none flex flex-col text-center lg:opacity-0 peer-hover:opacity-100 transition">
          <h3 className="top-[25%] drop-shadow-md">{name}</h3>
          <p className="hidden lg:flex items-center justify-center gap-x-2 transition duration-200">
            Check it out!
            <OscillatingArrow animating={true} />
          </p>
        </div>
      </motion.a>
      <motion.div
        layoutId={`project-description-${name}`}
        variants={viewVariants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative flex flex-col items-center justify-start lg:items-start lg:gap-y-4"
      >
        <p className="relative w-full leading-relaxed tracking-wide font-light text-3xl-sm lg:text-base text-white bg-gray-900 bg-gradient-to-tl from-gray-900 to-white/10 rounded-xl px-6 py-4 shadow-md">
          {description}
          {github && (
            <a href={github} target="blank">
              <Icon
                icon="cib:github"
                width="2.5rem"
                className="absolute -bottom-4 right-4 pointer-events-auto"
              />
            </a>
          )}
        </p>
        <TagList name={name} tags={tags} />
      </motion.div>
    </motion.section>
  );
}
