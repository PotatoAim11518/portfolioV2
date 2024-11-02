import { ExternalLink, NavLink } from "./types";

export const GITHUB = "https://github.com/PotatoAim11518";
export const LINKEDIN = "https://www.linkedin.com/in/wilson-huang-39198039/";

export const MAX_CHARACTER_COUNT = 500;

export const NAV_LINKS: NavLink[] = [
  {
    name: "About",
    hash: "#about",
    icon: "mdi:home",
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: "material-symbols:cognition",
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: "fluent:window-wrench-24-filled",
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: "mdi:mail",
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