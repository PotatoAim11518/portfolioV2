import { motion } from "framer-motion";
import { viewVariants } from "../../../lib/motion";
import clsx from "clsx";

type SkillsNavProps = {
  labels: string[];
  activeTab: number;
  onClick: (i: number) => void;
};
export function SkillsNav({ labels, activeTab, onClick }: SkillsNavProps) {
  return (
    <motion.nav
      variants={viewVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-w-fit"
    >
      <div className="w-full flex flex-col justify-center">
        <ul className="w-full flex flex-row justify-center place-items-end gap-4">
          {labels.map((label, i) => (
            <li
              key={label}
              onClick={() => onClick(i)}
              className={clsx("flex flex-col w-1/3 lg:w-1/5", {
                "hover:text-white text-white/50 transition": activeTab !== i,
              })}
            >
              <button className={clsx("w-full px-6 py-2 transition")}>
                <h6>{label}</h6>
              </button>
              {activeTab === i ? (
                <motion.div
                  layoutId="line"
                  transition={{ type: "spring", damping: 15 }}
                  className="h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent bg-clip-border border-transparent border-t-2"
                ></motion.div>
              ) : (
                <div className="h-1 w-full"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
