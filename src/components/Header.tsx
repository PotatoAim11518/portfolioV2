import clsx from "clsx";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { EXTERNAL_LINKS, NAV_LINKS, SCROLL_THRESHOLD } from "../data/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { viewVariants } from "../lib/motion";
import { usePathChange } from "../lib/hooks";
import NavLinkItem from "./Nav/NavLinkItem";
import NavLinkLabel from "./Nav/NavLinkLabel";
import NavLinkIcon from "./Nav/NavLinkIcon";
import NavPill from "./Nav/NavPill";

type HeaderProps = {
  visibleSectionId: string | null;
};

export default function Header({ visibleSectionId }: HeaderProps) {
  const [scrollPos, setScrollPos] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => setScrollPos(latest));
  usePathChange();

  const handleNav = async (id: string) => {
    window.location.hash = id;
  };

  useEffect(() => {
    history.pushState(null, "", `#${visibleSectionId}`);
  }, [visibleSectionId]);

  return (
    <motion.header
      layoutId="header"
      variants={viewVariants}
      initial="initialT"
      whileInView="visible"
      viewport={{ once: true }}
      className={clsx("lg:w-full fixed flex lg:right-0 top-6 z-30", {
        "justify-center items-center": scrollPos <= SCROLL_THRESHOLD,
        "justify-end items-center right-6": scrollPos > SCROLL_THRESHOLD,
      })}
    >
      <motion.nav
        layoutId="nav"
        variants={viewVariants}
        initial="initialT"
        whileInView="visible"
        viewport={{ once: true }}
        className={clsx("py-4 lg:px-4 lg:py-2 rounded-full lg:rounded-e-none", {
          "bg-gray-900/75 shadow-md backdrop-blur-sm ":
            scrollPos > SCROLL_THRESHOLD,
        })}
      >
        <ul
          className={clsx("flex items-center gap-3", {
            "flex-row ": scrollPos <= SCROLL_THRESHOLD,
            "flex-col lg:flex-row": scrollPos > SCROLL_THRESHOLD,
          })}
        >
          {NAV_LINKS.map((link) => (
            <NavLinkItem
              key={link.name}
              link={link}
              scrollPos={scrollPos}
              handleNav={handleNav}
              visibleSectionId={visibleSectionId}
            >
              <NavLinkLabel
                link={link}
                scrollPos={scrollPos}
                handleNav={handleNav}
              />
              <NavLinkIcon
                link={link}
                scrollPos={scrollPos}
                handleNav={handleNav}
              />
              {visibleSectionId === link.hash.slice(1) && (
                <NavPill scrollPos={scrollPos} />
              )}
            </NavLinkItem>
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
