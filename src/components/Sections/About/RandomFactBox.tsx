import { motion } from "framer-motion";
import clsx from "clsx";
import { viewVariants } from "../../../lib/motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import LargeScreenFacts from "./LargeScreenFacts";
import SmallScreenFacts from "./SmallScreenFacts";

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
        delay: 0.3,
      }}
      style={{ scale: "130%" }}
      className="h-full w-auto my-40 lg:my-20 lg:mx-20 -ml-20 pb-10"
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
        className="absolute bg-cyan-400 h-[40px] w-[400px] left-[79px] bottom-[478px] lg:h-[20px] lg:w-[200px] lg:left-[40px] lg:bottom-[260px]"
      />
      <LargeScreenFacts />
      <SmallScreenFacts />
      <div className="relative">
        <div
          aria-label="tl-triangle"
          className="absolute w-0 h-0 border-[40px] lg:border-[20px] border-l-transparent border-t-transparent border-r-cyan-400 border-b-cyan-400 left-0 -top-[79px] lg:-top-[40px]"
        />
        <div
          aria-label="t-lower-panel"
          className="absolute bg-cyan-400 h-[40px] w-[400px] left-[79px] -top-[40px] lg:h-[20px] lg:w-[200px] lg:left-[40px] lg:-top-[20px]"
        />
        <div
          aria-label="front-panel"
          className="z-20 relative place-content-center bg-gradient-to-tl from-stone-900 to-stone-800 h-[400px] w-[400px] lg:h-[200px] lg:w-[200px] right-0 top-0"
        >
          <p className="text-5xl-sm lg:text-xl text-center gradient-text p-6 glow animate-sheen">
            Random Fact Dispenser
          </p>
        </div>
        <div
          aria-label="tr-triangle"
          className="absolute w-0 h-0 border-[40px] lg:border-[20px] border-l-transparent border-t-transparent border-r-fuchsia-600 border-b-fuchsia-600 left-[401px] -top-[79px] lg:left-[200px] lg:-top-[40px]"
        />
        <div
          aria-label="br-triangle"
          className="absolute w-0 h-0 border-[40px] lg:border-[20px] border-r-transparent border-b-transparent border-l-fuchsia-600 border-t-fuchsia-600 left-[401px] lg:left-[200px] bottom-0"
        />
        <div
          aria-label="r-panel"
          className="absolute bg-fuchsia-600 h-[320px] w-[80px] left-[401px] lg:h-[160px] lg:w-[40px] lg:left-[200px] top-0"
        />
      </div>
    </motion.div>
  );
}
