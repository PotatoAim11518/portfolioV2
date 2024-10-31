// import { motion, useMotionValue } from "framer-motion";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { FACTS } from "../../../lib/constants";
import clsx from "clsx";
import { useEffect, useRef } from "react";

const variants = {
  initial: { y: 0 },
  visible: { y: -60 },
};
export default function RandomFactBox() {
  // const y = useMotionValue(0);
  // const pos = useTransform(y, [0, -180 * FACTS.length], [1, 2]);
  const cards = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: cards,
  //   offset: ["0 1", "1.5 1"],
  // });
  // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <div className="relative h-full w-auto mx-11">
      <div
        aria-label="t-upper-panel"
        className="absolute bg-cyan-400 h-[20px] w-[200px] left-[40px] bottom-[220px]"
      />
      <div className="[mask-image:_linear-gradient(to_top,transparent_0,0,_black_calc(100%-100px),transparent_100%)]">
        <div className="h-[320px]">
          <motion.div
            className="absolute flex flex-col left-[33%] top-[240px]"
            dragConstraints={{ top: -180 * FACTS.length, bottom: 0 }}
            drag="y"
            // style={{ scale: scaleProgress }}
          >
            <ul
              ref={cards}
              className="absolute flex flex-col-reverse justify-center items-center gap-y-14"
            >
              {FACTS.map((fact, i) => (
                <motion.li
                  key={i}
                  className={clsx(
                    "text-center text-sm place-content-center tracking-tight p-2 -top-24 left-20 h-36 w-28 shadow-md bg-stone-300"
                  )}
                  style={{
                    mask: "conic-gradient(from 135deg at top,#0000,#000 1deg 89deg,#0000 90deg) top/11px 60% repeat-x, conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) bottom/11px 51% repeat-x",
                  }}
                  whileInView="visible"
                  initial="initial"
                  variants={variants}
                  transition={{ ease: "easeInOut", duration: 1 }}
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
          <h3 className="text-center p-6">Random Fact Dispenser</h3>
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
    </div>
  );
}
