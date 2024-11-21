import { motion } from "framer-motion";
import { FACTS } from "../../../data/about";
import clsx from "clsx";
import { factBoxVariants } from "../../../lib/motion";

export default function LargeScreenFacts() {
  return (
    <div className="hidden lg:block [mask-image:_linear-gradient(to_top,transparent_0,0,_black_calc(100%-50px),transparent_100%)]">
      <div className="h-[320px]">
        <motion.div
          className="absolute flex flex-col left-[33%] top-[240px]"
          dragConstraints={{ top: -180 * FACTS.length, bottom: 0 }}
          drag="y"
        >
          <ul className="absolute flex flex-col-reverse h-fit justify-center items-center gap-y-14">
            {FACTS.map((fact, i) => (
              <motion.li
                key={i}
                className={clsx(
                  "font-mono text-sm text-black text-center place-content-center leading-4 tracking-tight p-2 -top-24 left-20 h-36 w-28 shadow-md bg-stone-300"
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
  );
}
