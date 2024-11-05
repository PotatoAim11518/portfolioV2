import clsx from "clsx";
import { SCROLL_THRESHOLD } from "../../lib/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink } from "../../lib/types";

type NavLinkIconProps = {
  link: NavLink;
  scrollPos: number;
  handleNav: (id: string) => void;
};

export default function NavLinkIcon({
  link,
  scrollPos,
  handleNav,
}: NavLinkIconProps) {
  return (
    <button
      onClick={() => handleNav(link.hash)}
      className={clsx("lg:hidden text-slate-400 text-xl hover:text-white", {
        "text-slate-400": window.location.hash !== link.hash,
        "text-white": window.location.hash === link.hash,
        hidden: scrollPos <= SCROLL_THRESHOLD,
        block: scrollPos > SCROLL_THRESHOLD,
      })}
    >
      <Icon icon={link.icon} height={60} width={60} />
    </button>
  );
}
