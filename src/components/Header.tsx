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
    id: "#about",
  },
  {
    name: "Skills",
    id: "#skills",
  },
  {
    name: "Projects",
    id: "#projects",
  },
  {
    name: "Contact",
    id: "#contact",
  },
];

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
    <header className="fixed top-6 z-10">
      <nav
        className={clsx(
          "px-4 py-2 rounded-full transition duration-500 backdrop-blur-sm",
          {
            "bg-indigo-300/10 shadow-md": scrollPos > 200,
          }
        )}
      >
        <ul className="flex flex-row items-center gap-x-4 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={clsx(
                "relative text-white hover:text-white px-6 py-2 transition mix-blend-overlay",
                {
                  "text-white/50": path !== link.id,
                }
              )}
            >
              <button
                onClick={() => handleNav(link.id)}
                className="flex text-xl "
              >
                {link.name}
              </button>
              {path === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 h-auto w-full shadow-md mix-blend-color-dodge sheen animate-sheen"
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
