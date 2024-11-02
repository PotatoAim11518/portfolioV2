import clsx from "clsx";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { EXTERNAL_LINKS, NAV_LINKS } from "../lib/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
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
      layoutId="header"
      variants={viewVariants}
      initial="initialT"
      whileInView="visible"
      viewport={{ once: true }}
      className={clsx("lg:w-full fixed flex lg:right-0 top-6 z-30", {
        "justify-center items-center": scrollPos <= 200,
        "justify-end items-center right-6": scrollPos > 200,
      })}
    >
      <motion.nav
        layoutId="nav"
        variants={viewVariants}
        initial="initialT"
        whileInView="visible"
        viewport={{ once: true }}
        className={clsx("py-4 lg:px-4 lg:py-2 rounded-full lg:rounded-e-none", {
          "bg-gray-900/75 shadow-md backdrop-blur-sm ": scrollPos > 200,
        })}
      >
        <ul
          className={clsx("flex items-center gap-3", {
            "flex-row ": scrollPos <= 200,
            "flex-col lg:flex-row": scrollPos > 200,
          })}
        >
          {NAV_LINKS.map((link) => (
            <li
              key={link.hash}
              className={clsx(
                "relative tracking-wider hover:text-white px-6 py-2 transition-all mix-blend-screen",
                {
                  "text-slate-400": path !== link.hash,
                  "text-white": path === link.hash,
                  "text-4xl": scrollPos <= 200,
                  "text-xl": scrollPos > 200,
                }
              )}
            >
              <button
                onClick={() => handleNav(link.hash)}
                className={clsx("lg:visible lg:flex", {
                  "hidden text-xl": scrollPos > 200,
                })}
              >
                {link.name === "About" ? (
                  <span className="flex justify-center items-center gap-x-2">
                    <Icon icon="mdi:home" />
                    {link.name}
                  </span>
                ) : (
                  <span>{link.name}</span>
                )}
              </button>
              <button
                onClick={() => handleNav(link.hash)}
                className={clsx("lg:hidden text-slate-400 text-xl", {
                  hidden: scrollPos <= 200,
                  block: scrollPos > 200,
                })}
              >
                <Icon icon={link.icon} height={60} width={60} />
              </button>
              {path === link.hash && (
                <motion.div
                  layoutId="active-pill"
                  className={clsx(
                    "absolute inset-0 lg:left-0 lg:h-auto lg:w-full shadow-md mix-blend-color-dodge sheen animate-sheen",
                    {
                      "w-20 h-20 left-[14px]": scrollPos > 200,
                    }
                  )}
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
                <Icon icon={link.icon} height={40} width={40} />
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.header>
  );
}
