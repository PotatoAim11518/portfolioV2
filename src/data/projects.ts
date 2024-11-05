import { Project } from "../lib/types";
import personalPortfolio from "../assets/personal_portfolio.png";
import halfMoonBay from "../assets/half_moon_bay.jpg";

export const PROJECTS: Project[] = [
  {
    name: "This Portfolio",
    image: personalPortfolio,
    github: "https://potatoaim11518.github.io/portfolioV2/",
    href: "/",
    description:
      "This is the most recent version of my personal portfolio site that serves to showcase my frontend skillset. It makes use of Framer Motion and TailwindCSS for some interesting animations and interactions. I'm actively improving things under-the-hood based on React best-practices.",
    tags: ["React", "TailwindCSS", "Framer Motion", "EmailJS"],
  },
  {
    name: "UNDER CONSTRUCTION",
    image: halfMoonBay,
    github: "https://github.com/PotatoAim11518",
    href: "/",
    description:
      "This is a placeholder project at this time. I've only recently completed the majority of work on this portfolio site and am excited to move on to some more substantial projects to fill out this section. Stay tuned!",
    tags: ["React", "TailwindCSS", "Redux"],
  },
];
