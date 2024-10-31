import { Skill } from "./types";

export const GITHUB = "https://github.com/PotatoAim11518";
export const LINKEDIN = "https://www.linkedin.com/in/wilson-huang-39198039/";

export const MAX_CHARACTER_COUNT = 500;

export type NavLink = {
  name: string;
  hash: string;
};

export type ExternalLink = {
  name: string;
  icon: string;
  href: string;
};

type Project = {
  name: string;
  image: string;
  github: string;
  href: string;
  description: string;
  tags: string[];
};

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

export const SKILLS: Skill[] = [
  { name: "Javascript", icon: "skill-icons:javascript" },
  { name: "Typescript", icon: "skill-icons:typescript" },
  { name: "Python", icon: "skill-icons:python-dark" },
  { name: "React", icon: "skill-icons:react-dark" },
  { name: "NextJS", icon: "skill-icons:nextjs-dark" },
  { name: "Redux", icon: "skill-icons:redux" },
  { name: "NodeJS", icon: "skill-icons:nodejs-dark" },
  { name: "HTML", icon: "skill-icons:html" },
  { name: "CSS", icon: "skill-icons:css" },
  { name: "TailwindCSS", icon: "skill-icons:tailwindcss-dark" },
  { name: "Contentful", icon: "logos:contentful" },
  { name: "PostgreSQL", icon: "skill-icons:postgresql-dark" },
  { name: "Heroku", icon: "skill-icons:heroku" },
  { name: "Vercel", icon: "skill-icons:vercel-dark" },
  { name: "Docker", icon: "skill-icons:docker" },
];

export const OTHER_SKILLS: Skill[] = [
  {
    name: "VSCode",
    icon: "devicon:vscode",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Vite",
    icon: "devicon:vite",
    link: "https://vite.dev/",
  },
  {
    name: "Framer Motion",
    icon: "devicon:framermotion",
    link: "https://www.framer.com/motion/",
  },
  {
    name: "React Testing Library",
    icon: "logos:testing-library",
    link: "https://testing-library.com/docs/react-testing-library/intro/",
  },
  {
    name: "Styled Components",
    icon: "skill-icons:styledcomponents",
    link: "https://styled-components.com/",
  },
  {
    name: "Storybook",
    icon: "logos:storybook-icon",
    link: "https://storybook.js.org/",
  },
  {
    name: "Zustand",
    icon: "",
    link: "https://zustand.docs.pmnd.rs/getting-started/introduction",
  },
  { name: "Figma", icon: "devicon:figma", link: "https://www.figma.com/" },
  { name: "Socket.io", icon: "devicon:socketio", link: "https://socket.io/" },
  {
    name: "Live2D Cubism",
    icon: "",
    link: "https://www.live2d.com/en/",
  },
];

export const LEARNING: Skill[] = [
  {
    name: "GoLang",
    icon: "logos:go",
    link: "https://go.dev/",
  },
  {
    name: "Svelte",
    icon: "devicon:svelte",
    link: "https://svelte.dev/",
  },
  {
    name: "Unity",
    icon: "devicon:unity",
    link: "https://unity.com/",
  },
  {
    name: "Three.js",
    icon: "devicon:threejs",
    link: "https://threejs.org/",
  },
];

export const PROJECTS: Project[] = [
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

export const FACTS = [
  "One of my favorite hobbies is decimating the local crab population. 🎣",
  "I'm a huge Final Fantasy fan.",
  'One of my hobbies is technical art, as in: what I make is "technically" art.',
  "My pole vault PR is 11'4\"",
  "I really want to live and work in Japan 🗾 someday",
  "Cooking is my meditation.",
  "My favorite animals are whale sharks (.____.)",
];
