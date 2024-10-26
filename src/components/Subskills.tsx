import { Icon } from "@iconify/react/dist/iconify.js";
import clsx from "clsx";
import { Skill } from "../lib/types";
import { ReactNode } from "react";

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
          <a
            target="blank"
            href={skill.link}
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
          </a>
        ))}
      </ul>
    </section>
  );
}
