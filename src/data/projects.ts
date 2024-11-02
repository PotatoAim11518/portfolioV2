import { Project } from "../lib/types";
import personalPortfolio from "../assets/personal_portfolio.png";
import halfMoonBay from "../assets/half_moon_bay.jpg";
import terry from "../assets/terry.webp";

export const PROJECTS: Project[] = [
  {
    name: "This Portfolio",
    image: personalPortfolio,
    github: "https://potatoaim11518.github.io/portfolioV2/",
    href: "/",
    description:
      "This is the most recent version of my personal portfolio site. It makes heavy use of Framer Motion and TailwindCSS for some interesting animations and interactions. I'm not a designer, but I think it turned out pretty well.",
    tags: ["React", "TailwindCSS", "Framer Motion", "EmailJS"],
  },
  {
    name: "Project Name B",
    image: halfMoonBay,
    github: "https://github.com/PotatoAim11518",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sit adipisci facere nulla fuga accusantium? Labore, quod ex.",
    tags: ["React", "TailwindCSS", "Redux"],
  },
  {
    name: "Project Name C",
    image: terry,
    github: "https://github.com/PotatoAim11518",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ipsam molestiae illum aliquid inventore odit voluptatibus obcaecati deleniti blanditiis sapiente impedit, alias sunt ullam! Cumque dignissimos sed nam quos illum omnis nobis repellendus expedita asperiores eum.",
    tags: ["React", "NextJS", "TailwindCSS", "Socket.IO"],
  },
];
