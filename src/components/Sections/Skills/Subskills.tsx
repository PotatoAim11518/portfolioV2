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
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-y-4">
        {skillList.map((skill) => (
          <li key={skill.name}>
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
                "flex justify-center items-center w-full px-5 py-2 gap-x-2 text-center tooltip",
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
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
