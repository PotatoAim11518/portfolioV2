import { viewVariants } from "../../../lib/motion";
import RandomFactBox from "./RandomFactBox";
import { motion } from "framer-motion";
import wilsonHuang from "../../../assets/wilson_huang.jpg";
import { INTRODUCTION } from "../../../data/about";
import AboutMe from "./AboutMe";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <motion.h1
        variants={viewVariants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-32"
      >
        I'm{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tl from-indigo-500 via-cyan-400 to-indigo-500 animate-sheen">
          Wilson.
        </span>
      </motion.h1>
      <section className="relative w-fit flex flex-col-reverse lg:flex-row justify-center items-center gap-x-8 my-10 ">
        <div className="place-items-center">
          <motion.h2
            variants={viewVariants}
            initial="initialL"
            whileInView={{
              y: 0,
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="text-center lg:text-left mt-20 lg:mt-0 leading-tight"
          >
            I'm a Fullstack Engineer based in{" "}
            <span className="font-medium text-sky-500">San Francisco</span>
          </motion.h2>
          <motion.h5
            variants={viewVariants}
            initial="initialL"
            whileInView={{
              y: 0,
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.6,
            }}
            viewport={{ once: true }}
            className="text-center mt-8 tracking-wider font-extralight leading-relaxed lg:leading-normal lg:text-left"
          >
            {INTRODUCTION}
          </motion.h5>
        </div>
        <motion.div
          variants={viewVariants}
          initial="initialR"
          whileInView={{
            y: 0,
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 1,
          }}
          viewport={{ once: true }}
          className="saturate-0 overflow-hidden min-w-[30%] w-96 h-96 rounded-3xl bg-white/60 shadow-md border-white/30 border-4 bg-center bg-cover bg-no-repeat animate-resaturate"
          style={{ backgroundImage: `url(${wilsonHuang})` }}
        />
      </section>
      <section className="h-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-x-8 overflow-hidden">
        <AboutMe />
        <RandomFactBox />
      </section>
    </div>
  );
}
