import { ExternalLink, NavLink } from "./types";

export const GITHUB = "https://github.com/PotatoAim11518";
export const LINKEDIN = "https://www.linkedin.com/in/wilson-huang-39198039/";

export const MAX_CHARACTER_COUNT = 500;

export const NAV_LINKS: NavLink[] = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const EXTERNAL_LINKS: ExternalLink[] = [
  {
    name: "LinkedIn",
    icon: "cib:linkedin",
    href: LINKEDIN,
  },
  {
    name: "GitHub",
    icon: "cib:github",
    href: GITHUB,
  },
];
