import { Icon } from "@iconify/react/dist/iconify.js";
import { EXTERNAL_LINKS, NAV_LINKS } from "../data/constants";
import { ExternalLink, NavLink } from "../lib/types";

export default function Footer() {
  return (
    <footer
      className="
        w-screen
        grid
        grid-cols-10
        gap-8
        items-start
        mt-auto
        bg-zinc-950
        text-white/80
        border-t
        border-t-gray-600
        p-10
        shadow-md
      "
    >
      <small className="h-full lg:col-start-2 col-span-3 lg:col-span-2 text-end lg:text-center text-xl lg:text-sm items-center pt-2 pr-4 border-r-white/30 border-r">
        &copy; Wilson Huang 2024
      </small>
      <div className="hidden lg:flex gap-x-4 justify-around col-start-3 lg:col-start-4 col-span-2">
        <FooterNav heading="Here" links={NAV_LINKS} />
        <FooterNav
          heading="Elsewhere"
          links={EXTERNAL_LINKS}
          classes="col-start-6 col-span-2"
        />
      </div>
      <small className="col-start-4 lg:col-start-6 col-span-full lg:col-span-4 text-justify pt-2 text-xl lg:text-sm">
        Coded and designed from scratch in Visual Studio Code by me. Built with
        React/Vite. Styled with Tailwind CSS.
      </small>
    </footer>
  );
}

type FooterNavProps = {
  heading: string;
  links: NavLink[] | ExternalLink[];
  classes?: string;
};

function FooterNav({ heading, links, classes }: FooterNavProps) {
  return (
    <nav className={`${classes} my-2`}>
      <h3 className="text-4xl lg:text-xl mb-4 tracking-wider">{heading}</h3>
      <ul className="flex-col flex-start">
        {links.map((link) => (
          <li
            key={link.name}
            className="text-3xl lg:text-base text-slate-400 hover:text-white tracking-widest py-1 transition"
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
