import { Icon } from "@iconify/react/dist/iconify.js";
import Heading from "../Heading";
import Project from "../Project";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { GITHUB_LINK, PROJECTS } from "../../lib/constants";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionArrowRight = motion(ArrowRightIcon);

const variants = {
  start: {
    translateX: [0, "0.5rem", 0],
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: "easeInOut",
    },
  },
  stop: {
    translateX: 0,
  },
};

export default function Projects() {
  const [oscillate, setOscillate] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading>Projects</Heading>
      <section className="m-10">
        {PROJECTS.map((project) => (
          <Project name={project.name} tags={project.tags} />
        ))}
      </section>
      <motion.a
        href={GITHUB_LINK}
        target="blank"
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.03,
          transition: { type: "spring" },
        }}
        onHoverStart={() => setOscillate(true)}
        onHoverEnd={() => setOscillate(false)}
        className="flex items-center gap-x-2 px-4 py-2 tooltip"
      >
        <p>See more on</p>
        <Icon icon="cib:github" />
        <MotionArrowRight
          height={"1rem"}
          variants={variants}
          initial="stop"
          animate={oscillate ? "start" : "stop"}
          transition={{ type: "spring" }}
        />
      </motion.a>
    </div>
  );
}
