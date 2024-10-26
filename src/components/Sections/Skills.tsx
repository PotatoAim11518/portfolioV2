import { Icon } from "@iconify/react";
import Heading from "../Heading";
import { Skill } from "../../lib/types";
import Subskills from "../Subskills";

const skills: Skill[] = [
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

const otherSkills: Skill[] = [
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

const learning: Skill[] = [
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
];

export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading>Skills</Heading>
      <div className="flex justify-between items-start w-full m-10">
        <aside className="w-[30%] text-xl leading-relaxed tracking-wide text-white font-thin">
          Experienced in fullstack development, multiple state management
          systems, and plenty of third-party libraries. In my free time, I hope
          to pick up another language or two and build something out of my
          comfort zone. Learning is a life-long skill!
        </aside>
        <section className="w-[70%] flex justify-end items-center">
          <div className="grid grid-cols-3 xl:grid-cols-5 gap-7">
            {skills.map((icon) => (
              <div className="relative flex justify-center items-center">
                <Icon
                  key={icon.name}
                  aria-label={icon.name}
                  icon={icon.icon}
                  height="6rem"
                  width="6rem"
                  className="peer drop-shadow-md"
                />
                <div className="absolute hidden peer-hover:inline-block pointer-events-none px-4 py-1 -bottom-4 tooltip animate-tooltip">
                  {icon.name}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Subskills skillList={otherSkills}>Other technical skills</Subskills>
      <Subskills skillList={learning}>What I'm learning next</Subskills>
    </div>
  );
}
