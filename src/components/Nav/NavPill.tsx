import clsx from "clsx";
import { motion } from "framer-motion";
import { SCROLL_THRESHOLD } from "../../lib/constants";

type NavPillProps = {
  scrollPos: number;
};

export default function NavPill({ scrollPos }: NavPillProps) {
  return (
    <motion.div
      layoutId="active-pill"
      className={clsx(
        "absolute inset-0 lg:left-0 lg:h-auto lg:w-full shadow-md mix-blend-color-dodge sheen animate-sheen",
        {
          "w-20 h-20 left-[14px]": scrollPos > SCROLL_THRESHOLD,
        }
      )}
      style={{ borderRadius: 9999 }}
      transition={{ type: "spring", duration: 0.6 }}
    ></motion.div>
  );
}
