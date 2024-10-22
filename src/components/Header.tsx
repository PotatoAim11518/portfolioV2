// import Logo from "./Logo";

import { HomeIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const navLinks = [
  {
    name: (
      <span className="flex justify-center items-center gap-x-2">
        <HomeIcon /> About
      </span>
    ),
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  const [path, setPath] = useState("");
  const [scrollPos, setScrollPos] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => setScrollPos(latest));

  useEffect(() => {
    const handlePathChange = () => {
      const path = window.location.hash;
      setPath(path);
    };
    window.addEventListener("hashchange", handlePathChange);
    handlePathChange();
    return () => window.removeEventListener("hashchange", handlePathChange);
  }, []);

  return (
    <header className="fixed top-6">
      <nav
        className={clsx("px-4 py-2 rounded-full transition duration-500", {
          "bg-white/5 shadow-md": scrollPos > 200,
        })}
      >
        <ul className="flex flex-row items-center gap-x-4 ">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={clsx(
                "relative text-white hover:text-white px-6 py-2 transition mix-blend-overlay",
                {
                  "text-white/50": path !== link.href,
                }
              )}
            >
              <a href={link.href} className="flex text-xl ">
                {link.name}
              </a>
              {path === link.href && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 h-auto w-full bg-gradient-to-tl from-indigo-500 via-cyan-400 to-indigo-500 shadow-md mix-blend-color-dodge animate-myName"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", duration: 0.6 }}
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
