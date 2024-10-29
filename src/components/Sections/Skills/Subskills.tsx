import { Icon } from "@iconify/react/dist/iconify.js";
import clsx from "clsx";
import { Skill } from "../../../lib/types";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type SubskillsProps = {
  children: ReactNode;
  skillList: Skill[];
};

export default function Subskills({ children, skillList }: SubskillsProps) {
  return (
    <section className="flex flex-col items-center w-full">
      <h2 className="font-thin leading-snug">{children}</h2>
      <ul className="flex flex-wrap justify-center gap-3">
        {skillList.map((skill) => (
          <motion.a
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
    </section>
  );
}
