import { motion } from "framer-motion";
import { viewVariants } from "../lib/motion";

type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return (
    <>
      <motion.h2
        variants={viewVariants}
        initial="initialT"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full text-center lg:text-left items-center font-semibold"
      >
        {children}
      </motion.h2>
      <motion.div
        variants={viewVariants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-1 mb-8 w-full md:w-[100%] lg:w-[120%] bg-gradient-to-r from-transparent via-white lg:via-15% to-transparent"
      />
    </>
  );
}
