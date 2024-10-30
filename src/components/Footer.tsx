import { Icon } from "@iconify/react/dist/iconify.js";
import {
  EXTERNAL_LINKS,
  ExternalLink,
  NAV_LINKS,
  NavLink,
} from "../lib/constants";

export default function Footer() {
  return (
    <footer
      className="
        grid
        grid-cols-10
        gap-8
        items-start
        mt-auto
        bg-zinc-950
        text-white/80
        border-t-[1px]
        border-t-gray-600
        p-10
        shadow-md"
    >
      <small className="h-full col-start-2 col-span-2 text-center items-center pt-2 border-r-white/30 border-r-[1px]">
        &copy; Wilson Huang 2024
      </small>
      <FooterNav heading="Here" links={NAV_LINKS} classes="col-start-4" />
      <FooterNav
        heading="Elsewhere"
        links={EXTERNAL_LINKS}
        classes="col-start-5"
      />
      <small className="col-start-8 col-span-2 pt-2">
        Coded in Visual Studio Code by me. Built with React/Vite. Styled with
        Tailwind CSS, deployed with Vercel.
      </small>
    </footer>
  );
}

type FooterNavProps = {
  heading: string;
  links: NavLink[] | ExternalLink[];
  classes: string;
};

function FooterNav({ heading, links, classes }: FooterNavProps) {
  return (
    <nav className={`${classes} my-2`}>
      <h3 className="text-xl mb-4 tracking-wider">{heading}</h3>
      <ul className="flex-col flex-start">
        {links.map((link) => (
          <li
            key={link.name}
            className="text-slate-400 hover:text-white tracking-widest py-1 transition"
          >
            {"hash" in link && <a href={link.hash}>{link.name}</a>}
            {"href" in link && (
              <a className="flex gap-x-2" href={link.href} target="blank">
                <Icon icon={link.icon} height={20} width={20} />
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
