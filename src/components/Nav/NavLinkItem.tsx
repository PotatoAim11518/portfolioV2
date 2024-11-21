import clsx from "clsx";
import { NavLink } from "../../lib/types";

type NavLinkItemProps = {
  link: NavLink;
  handleNav: (id: string) => void;
  visibleSectionId: string | null;
  children: React.ReactNode;
};

export default function NavLinkItem({ link, children }: NavLinkItemProps) {
  return (
    <li
      key={link.hash}
      className={clsx(
        "relative hover:text-white px-6 py-2 transition-all mix-blend-screen text-2xl-sm lg:text-base",
        {
          "text-slate-400": window.location.hash !== link.hash,
          "text-white": window.location.hash === link.hash,
        }
      )}
    >
      {children}
    </li>
  );
}
