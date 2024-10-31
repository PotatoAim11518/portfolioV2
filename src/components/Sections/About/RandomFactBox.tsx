// import { motion, useMotionValue } from "framer-motion";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FACTS } from "../../../lib/constants";
import clsx from "clsx";
import { useRef } from "react";

export default function RandomFactBox() {
  const y = useMotionValue(0);
  const pos = useTransform(y, [0, 100], [0, -100]);
  const cards = useRef(null);
  // const mask = useTransform(
  //   y,
  //   [0, -40, -100],
  //   [
  //     "conic-gradient(from 135deg at top,#0000,#000 1deg 89deg,#0000 90deg) top/16px 60% repeat-x",
  //     "conic-gradient(from 135deg at top,#0000,#000 1deg 89deg,#0000 90deg) top/16px 60% repeat-x, conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) bottom/16px 51% repeat-x",
  //     "conic-gradient(from 135deg at top,#0000,#000 1deg 89deg,#0000 90deg) top/16px 60% repeat-x, conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) bottom/16px 51% repeat-x",
  //   ]
  // );
  return (
    <div className="relative h-full w-auto mx-11">
      <div
        aria-label="t-upper-panel"
        className="absolute bg-cyan-400 h-[20px] w-[200px] left-[40px] bottom-[220px]"
      />
      <div className="[mask-image:_linear-gradient(to_top,transparent_0,0,_black_calc(100%-100px),transparent_100%)]">
        <div className="h-[320px]">
          <motion.div
            className="absolute flex flex-col left-[33%] top-[190px]"
            // dragConstraints={{ top: 400, bottom: -400 }}
            drag="y"
            style={{ translateY: pos }}
            // dragElastic={{ top: 0.5, bottom: 0.5 }}
            // whileDrag={{ scale: 1.1 }}
          >
            <ul
              ref={cards}
              className="absolute flex flex-col-reverse justify-center items-center gap-y-14"
            >
              {FACTS.map((fact, i) => (
                <li
                  key={i}
                  className={clsx(
                    "text-center text-sm place-content-center tracking-tight p-2 -top-24 left-20 h-36 w-28 shadow-md bg-stone-300"
                  )}
                  style={{
                    mask: "conic-gradient(from 135deg at top,#0000,#000 1deg 89deg,#0000 90deg) top/11px 60% repeat-x, conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) bottom/11px 51% repeat-x",
                  }}
                >
                  {fact}
                </li>
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
          <h3 className="text-center p-6">Random Fact Cube</h3>
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
