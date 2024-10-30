import { Icon } from "@iconify/react/dist/iconify.js";
import { HomeIcon } from "@radix-ui/react-icons";

export const GITHUB = "https://github.com/PotatoAim11518";
export const LINKEDIN = "https://www.linkedin.com/in/wilson-huang-39198039/";
export const MAX_CHARACTER_COUNT = 1000;

export const NAV_LINKS = [
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

export const EXTERNAL_LINKS = [
  {
    name: "linkedin",
    icon: "cib:linkedin",
    href: LINKEDIN,
  },
  {
    name: "github",
    icon: "cib:github",
    href: GITHUB,
  },
];

export const PROJECTS = [
  {
    name: "Project Name A",
    image: "src/assets/marco-murakami-Ap4wkcAr4Wk-unsplash.jpg",
    github: "https://github.com/PotatoAim11518",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa cumque modi quam nulla, in, voluptas dolor nemo architecto, sunt accusantium eos quia voluptate amet.",
    tags: ["React", "TailwindCSS", "Framer Motion", "Vercel"],
  },
  {
    name: "Project Name B",
    image: "src/assets/marco-murakami-Ap4wkcAr4Wk-unsplash.jpg",
    github: "https://github.com/PotatoAim11518",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sit adipisci facere nulla fuga accusantium? Labore, quod ex.",
    tags: ["React", "TailwindCSS", "Redux"],
  },
  {
    name: "Project Name C",
    image: "src/assets/marco-murakami-Ap4wkcAr4Wk-unsplash.jpg",
    github: "https://github.com/PotatoAim11518",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ipsam molestiae illum aliquid inventore odit voluptatibus obcaecati deleniti blanditiis sapiente impedit, alias sunt ullam! Cumque dignissimos sed nam quos illum omnis nobis repellendus expedita asperiores eum.",
    tags: ["React", "NextJS", "TailwindCSS", "Socket.IO"],
  },
];
