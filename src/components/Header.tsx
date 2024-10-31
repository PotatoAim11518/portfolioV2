import clsx from "clsx";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { EXTERNAL_LINKS, NAV_LINKS } from "../lib/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HomeIcon } from "@radix-ui/react-icons";
import { viewVariants } from "../lib/motion";

export default function Header() {
  const [path, setPath] = useState("");
  const [scrollPos, setScrollPos] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => setScrollPos(latest));

  const handleNav = async (id: string) => {
    window.location.hash = id;
  };

  useEffect(() => {
    const handlePathChange = () => {
      const path = window.location.hash;
      setPath(path);
    };
    window.addEventListener("hashchange", handlePathChange);
    handlePathChange();
    return () => window.removeEventListener("hashchange", handlePathChange);
  }, [path]);

  return (
    <motion.header
      variants={viewVariants}
      initial="initialT"
      whileInView="visible"
      viewport={{ once: true }}
      className={clsx(
        "fixed flex items-center justify-center top-6 z-20 rounded-full backdrop-blur-sm",
        {}
      )}
    >
      <nav
        className={clsx("px-4 py-2 rounded-full transition", {
          "bg-gray-900/75 shadow-md": scrollPos > 200,
        })}
      >
        <ul className="flex flex-row items-center gap-x-4 ">
          {NAV_LINKS.map((link) => (
            <li
              key={link.hash}
              className={clsx(
                "relative text-white tracking-wider hover:text-white px-6 py-2 transition-all mix-blend-exclusion",
                {
                  "text-slate-400": path !== link.hash,
                }
              )}
            >
              <button
                onClick={() => handleNav(link.hash)}
                className="flex text-xl "
              >
                {link.name === "About" ? (
                  <span className="flex justify-center items-center gap-x-2">
                    <HomeIcon />
                    {link.name}
                  </span>
                ) : (
                  link.name
                )}
              </button>
              {path === link.hash && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 h-auto w-full shadow-md mix-blend-color-dodge sheen animate-sheen"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", duration: 0.6 }}
                ></motion.div>
              )}
            </li>
          ))}
          {EXTERNAL_LINKS.map((link) => (
            <li
              key={link.name}
              className="text-slate-400 hover:text-white p-2 transition mix-blend-difference"
            >
              <a className="" href={link.href} target="blank">
                <Icon icon={link.icon} height={28} width={28} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
