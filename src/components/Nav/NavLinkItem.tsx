import clsx from "clsx";
import { NavLink } from "../../lib/types";
import { SCROLL_THRESHOLD } from "../../data/constants";
import React from "react";

type NavLinkItemProps = {
  link: NavLink;
  scrollPos: number;
  handleNav: (id: string) => void;
  visibleSectionId: string | null;
  children: React.ReactNode;
};

export default function NavLinkItem({
  link,
  scrollPos,
  children,
}: NavLinkItemProps) {
  return (
    <li
      key={link.hash}
      className={clsx(
        "relative tracking-wider hover:text-white px-6 py-2 transition-all mix-blend-screen",
        {
          "text-slate-400": window.location.hash !== link.hash,
          "text-white": window.location.hash === link.hash,
          "text-4xl": scrollPos <= SCROLL_THRESHOLD,
          "text-xl": scrollPos > SCROLL_THRESHOLD,
        }
      )}
    >
      {children}
    </li>
  );
}
