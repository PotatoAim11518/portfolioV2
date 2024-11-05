import clsx from "clsx";
import { SCROLL_THRESHOLD } from "../../lib/constants";
import { NavLink } from "../../lib/types";
import { Icon } from "@iconify/react/dist/iconify.js";

type NavLinkLabelProps = {
  link: NavLink;
  scrollPos: number;
  handleNav: (id: string) => void;
};

export default function NavLinkLabel({
  link,
  scrollPos,
  handleNav,
}: NavLinkLabelProps) {
  return (
    <button
      onClick={() => handleNav(link.hash)}
      className={clsx("lg:visible lg:flex", {
        "hidden text-xl": scrollPos > SCROLL_THRESHOLD,
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
  );
}
