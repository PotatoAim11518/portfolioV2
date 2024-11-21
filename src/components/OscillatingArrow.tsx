import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";

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

type OscillatingArrowProps = {
  animating: boolean;
};

export default function OscillatingArrow({
  animating = false,
}: OscillatingArrowProps) {
  return (
    <MotionArrowRight
      height={"1rem"}
      variants={variants}
      initial="stop"
      animate={animating ? "start" : "stop"}
      transition={{ type: "spring" }}
    />
  );
}
