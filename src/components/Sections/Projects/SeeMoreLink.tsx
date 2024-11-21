import { motion } from "framer-motion";
import { GITHUB } from "../../../data/constants";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { viewVariants } from "../../../lib/motion";
import OscillatingArrow from "../../OscillatingArrow";

export default function SeeMoreLink() {
  const [oscillate, setOscillate] = useState(false);

  return (
    <motion.a
      variants={viewVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true }}
      href={GITHUB}
      target="blank"
      onHoverStart={() => setOscillate(true)}
      onHoverEnd={() => setOscillate(false)}
      className="flex items-center gap-x-2 lg:text-xl px-6 py-3 lg:px-5 lg:py-2 mt-12 btn"
    >
      <p>See more on</p>
      <Icon icon="cib:github" />
      <OscillatingArrow animating={oscillate} />
    </motion.a>
  );
}
