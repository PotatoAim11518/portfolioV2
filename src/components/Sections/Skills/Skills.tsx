import { Icon } from "@iconify/react";
import Heading from "../../Heading";
import Subskills from "./Subskills";
import { motion, useAnimate, stagger, useInView } from "framer-motion";
import { viewVariants } from "../../../lib/motion";
import { useEffect } from "react";
import { LEARNING, OTHER_SKILLS, SKILLS } from "../../../data/skills";

export default function Skills() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const staggerList = stagger(0.05, { startDelay: 0 });

  useEffect(() => {
    animate(
      "div",
      isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 },
      {
        delay: isInView ? staggerList : 1,
      }
    );
  }, [animate, staggerList, isInView]);

  return (
    <div className="flex flex-col justify-center items-center">
      <Heading>Skills</Heading>
      <div className="flex flex-col flex-between gap-20 mb-8 lg:mb-16">
        <section className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mt-10">
          <motion.div
            ref={scope}
            className="grid grid-cols-auto grid-cols-4 lg:grid-cols-4 gap-8"
          >
            {SKILLS.map((icon) => (
              <motion.div
                key={icon.name}
                className="relative flex justify-center items-end"
              >
                <Icon
                  aria-label={icon.name}
                  icon={icon.icon}
                  height="100%"
                  width="100%"
                  className="peer drop-shadow-md"
                />
                <div className="absolute hidden shadow-md peer-hover:flex pointer-events-none px-4 py-1 tooltip animate-tooltip">
                  {icon.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.aside
            variants={viewVariants}
            initial="initialR"
            whileInView="visible"
            viewport={{ once: true }}
            className="textbox lg:w-[70%] text-justify whitespace-pre-line"
          >
            {`I'm experienced in fullstack development, multiple state management systems, and plenty of third-party libraries. In my free time, I hope to pick up another language or two and build something out of my comfort zone.
          \nI'm always open to something new, of course--learning is a life-long skill!`}
          </motion.aside>
        </section>
        <Subskills skillList={OTHER_SKILLS}>Other technical skills</Subskills>
        <Subskills skillList={LEARNING}>What I'm learning next</Subskills>
      </div>
    </div>
  );
}
