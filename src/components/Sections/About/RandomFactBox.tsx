// import { motion, useMotionValue } from "framer-motion";
import { motion } from "framer-motion";
import clsx from "clsx";
import { viewVariants } from "../../../lib/motion";
import { FACTS } from "../../../data/facts";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const factBoxVariants = {
  initial: { y: 0 },
  visible: { y: -60 },
};

export default function RandomFactBox() {
  const [showSwipe, setShowSwipe] = useState(true);
  return (
    <motion.div
      onTapStart={() => setShowSwipe(false)}
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
      style={{ scale: "130%" }}
      className="relative h-full w-auto my-20 lg:mx-20"
    >
      <div
        className={clsx(
          "absolute text-slate-200 h-20 left-1/2 top-1/3 z-40 animate-swipe",
          {
            hidden: !showSwipe,
          }
        )}
      >
        <Icon icon="ic:baseline-swipe-up" height={40} width={40} />
      </div>
      <div
        aria-label="t-upper-panel"
        className="absolute bg-cyan-400 h-[20px] w-[200px] left-[40px] bottom-[220px]"
      />
      <div className="[mask-image:_linear-gradient(to_top,transparent_0,0,_black_calc(100%-50px),transparent_100%)]">
        <div className="h-[320px]">
          <motion.div
            className="absolute flex flex-col left-[33%] top-[240px]"
            dragConstraints={{ top: -180 * FACTS.length, bottom: 0 }}
            drag="y"
          >
            <ul className="absolute flex flex-col-reverse justify-center items-center gap-y-14">
              {FACTS.map((fact, i) => (
                <motion.li
                  key={i}
                  className={clsx(
                    "text-center text-sm place-content-center tracking-tight p-2 -top-24 left-20 h-36 w-28 shadow-md bg-stone-300"
                  )}
                  style={{
                    mask: "conic-gradient(from 135deg at top,#0000,#000 1deg 89deg,#0000 90deg) top/11px 60% repeat-x, conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) bottom/11px 51% repeat-x",
                  }}
                  variants={factBoxVariants}
                  initial="initial"
                  whileInView="visible"
                  transition={{
                    type: "spring",
                    ease: "easeInOut",
                    duration: 2,
                    delay: 0.3,
                  }}
                >
                  {fact}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="relative">
        <div
          aria-label="tl-triangle"
          className="absolute w-0 h-0 border-[20px] border-l-transparent border-t-transparent border-r-cyan-400 border-b-cyan-400 left-0 -top-[40px]"
        />
        <div
          aria-label="t-lower-panel"
          className="absolute bg-cyan-400 h-[20px] w-[200px] left-[40px] -top-[20px]"
        />
        <div
          aria-label="front-panel"
          className="z-20 relative place-content-center bg-gradient-to-tl from-stone-900 to-stone-800 h-[200px] w-[200px] right-0 top-0"
        >
          <h3 className="text-center p-6 glow animate-sheen">
            Random Fact Dispenser
          </h3>
        </div>
        <div
          aria-label="tr-triangle"
          className="absolute w-0 h-0 border-[20px] border-l-transparent border-t-transparent border-r-fuchsia-600 border-b-fuchsia-600 left-[200px] -top-[40px]"
        />
        <div
          aria-label="br-triangle"
          className="absolute w-0 h-0 border-[20px] border-r-transparent border-b-transparent border-l-fuchsia-600 border-t-fuchsia-600 left-[200px] bottom-0"
        />
        <div
          aria-label="r-panel"
          className="absolute bg-fuchsia-600 h-[160px] w-[40px] left-[200px] top-0"
        />
      </div>
    </motion.div>
  );
}
