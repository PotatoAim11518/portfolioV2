import { Icon } from "@iconify/react/dist/iconify.js";
import clsx from "clsx";
import { Skill } from "../../../lib/types";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { viewVariants } from "../../../lib/motion";

type SubskillsProps = {
  children: ReactNode;
  skillList: Skill[];
};

export default function Subskills({ children, skillList }: SubskillsProps) {
  return (
    <motion.section
      variants={viewVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center w-full"
    >
      <h2 className="font-thin leading-snug">{children}</h2>
      <ul className="flex flex-col lg:flex-row flex-wrap justify-center gap-x-6 gap-y-6 lg:gap-y-4">
        {skillList.map((skill) => (
          <motion.a
            key={skill.name}
            target="blank"
            href={skill.link}
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.03,
              transition: { type: "spring" },
            }}
            className={clsx(
              "flex justify-center items-center px-5 py-2 gap-x-2 text-center tooltip",
              {
                "pointer-events-none": !skill.link,
              }
            )}
          >
            {skill.name}
            {skill.icon && (
              <span>
                <Icon aria-label={skill.name} icon={skill.icon} />
              </span>
            )}
          </motion.a>
        ))}
      </ul>
    </motion.section>
  );
}
