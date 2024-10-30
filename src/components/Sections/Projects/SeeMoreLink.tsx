import { motion } from "framer-motion";
import { GITHUB_LINK } from "../../../lib/constants";
import { useState } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Icon } from "@iconify/react/dist/iconify.js";

const MotionArrowRight = motion.create(ArrowRightIcon);

const variants = {
  start: {
    translateX: [0, "0.5rem", 0],
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: "easeInOut",
    },
  },
  stop: {
    translateX: 0,
  },
};

export default function SeeMoreLink() {
  const [oscillate, setOscillate] = useState(false);

  return (
    <motion.a
      href={GITHUB_LINK}
      target="blank"
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.03,
        transition: { type: "spring" },
      }}
      onHoverStart={() => setOscillate(true)}
      onHoverEnd={() => setOscillate(false)}
      className="flex items-center gap-x-2 px-4 py-2 tooltip my-14"
    >
      <p>See more on</p>
      <Icon icon="cib:github" />
      <MotionArrowRight
        height={"1rem"}
        variants={variants}
        initial="stop"
        animate={oscillate ? "start" : "stop"}
        transition={{ type: "spring" }}
      />
    </motion.a>
  );
}
