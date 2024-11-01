import { viewVariants } from "../../../lib/motion";
import RandomFactBox from "./RandomFactBox";
import { motion } from "framer-motion";
import wilsonHuang from "../../../assets/wilson_huang.jpg";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <motion.h1
        variants={viewVariants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-8xl mb-2"
      >
        I'm{" "}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-indigo-500 via-cyan-400 to-indigo-500 animate-sheen">
          Wilson.
        </span>
      </motion.h1>
      <motion.h2
        variants={viewVariants}
        initial="initial"
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
        className="text-center w-[80%]"
      >
        I'm a Fullstack Engineer based in{" "}
        <span className="font-medium text-sky-500">San Francisco</span>.
      </motion.h2>
      <section className="relative flex items-start gap-x-8 my-10 ">
        <motion.p
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
            delay: 0.7,
          }}
          viewport={{ once: true }}
          className="m-4 text-3xl tracking-wide leading-relaxed text-white font-thin"
        >
          I build pixel-perfect front end experiences and love finding things to
          reverse-engineer to tease my brain. When I'm not coding you can find
          me by the ocean with fishing rod in hand, or exploring Hyrule mainly
          for its puzzles. The princess can wait.
        </motion.p>
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
            delay: 0.7,
          }}
          viewport={{ once: true }}
          className="saturate-0 overflow-hidden min-w-72 h-72 rounded-3xl bg-white/60 shadow-md border-white/30 border-4 bg-center bg-cover bg-no-repeat animate-resaturate"
          style={{ backgroundImage: `url(${wilsonHuang})` }}
        />
      </section>
      <div className="h-full flex flex-row items-end justify-between gap-x-8 overflow-hidden">
        <motion.section
          variants={viewVariants}
          initial="initial"
          whileInView={{
            y: 0,
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 1.2,
          }}
          viewport={{ once: true }}
          className="my-10"
        >
          <h3 className="relative top-4 left-3 uppercase drop-shadow-md z-10">
            About me
          </h3>
          <p className="textbox whitespace-pre-wrap">
            {`Before I made the switch into software engineering I was a wearer of many hats--salesman, data analyst, community manager, and a few more. With each role, there was always one connecting thread: leveraging technology to solve those problems programmatically.
            \nOver time I picked up more and more coding skills to the point where my thirst for knowledge could no longer be ignored. I made the leap, tackled a 1,000-hour bootcamp, and landed a fantastic role at `}
            <span className="text-[#ff00bf] font-bold">
              <a href="https://www.lyft.com/">Lyft</a>
            </span>
            {` working on the Organic Traffic Team. I was able to work on everything from legacy code to the most modern stack. I was also a regular  contributor to Lyft’s internal design system and part of the Frontend Developer Experience group.
            \nUnfortunately, in 2023 our entire team was dissolved as a result of layoffs. Since then, I've pursued a few personal projects, travelled, and skilled up my technical chops. For my next role, I'm looking for a place where we can use software to better people's lives in a meaningful way. `}
            {
              <span>
                <button
                  onClick={() => (window.location.hash = "#contact")}
                  className="font-semibold text-sky-500"
                >
                  Contact me
                </button>
              </span>
            }
            {` if you'd like to chat!`}
          </p>
        </motion.section>
        <RandomFactBox />
      </div>
    </div>
  );
}
