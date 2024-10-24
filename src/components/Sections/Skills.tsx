import { Icon } from "@iconify/react";
import clsx from "clsx";

const skillIcons = [
  { name: "Javascript", icon: "skill-icons:javascript" },
  { name: "Typescript", icon: "skill-icons:typescript" },
  { name: "Python", icon: "skill-icons:python-dark" },
  { name: "React", icon: "skill-icons:react-dark" },
  { name: "Redux", icon: "skill-icons:redux" },
  { name: "NextJS", icon: "skill-icons:nextjs-dark" },
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

const otherSkills = [
  { name: "Socket.io", icon: "devicon:socketio" },
  {
    name: "Framer Motion",
    icon: "devicon:framermotion",
    link: "https://www.framer.com/motion/",
  },
  {
    name: "Styled Components",
    icon: "skill-icons:styledcomponents",
    link: "https://styled-components.com/",
  },
  { name: "Storybook", icon: "logos:storybook-icon" },
  {
    name: "Zustand",
    icon: "",
    link: "https://zustand.docs.pmnd.rs/getting-started/introduction",
  },
];
const nonTechnicalSkills = ["Direct Sales", "Community Management", "Live2D"];

const questionableSkills = [
  "Decimating the local crab population",
  "Cooking",
  "Crocheting",
  "1.6 KD/A",
  "Building PCs",
];

export default function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <div className="flex justify-between gap-x-6">
        <aside className="max-w-48">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ad
          soluta, distinctio perferendis atque dicta accusantium rerum ullam
          cumque? Perferendis nulla consequatur id ex esse.
        </aside>
        <section className="grid grid-cols-5 gap-7">
          {skillIcons.map((icon) => (
            <div className="relative flex justify-center">
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
        </section>
      </div>
      <section>
        <h2>Other Technical Skills</h2>
        <section className="flex gap-2">
          {otherSkills.map((skill) => (
            <a
              href={skill.link}
              className={clsx(
                "flex justify-center items-center px-5 py-2 gap-x-2 tooltip",
                {
                  "pointer-events-none": !skill.link,
                }
              )}
            >
              {skill.name}
              {skill.icon && (
                <span>
                  <Icon aria-label={skill.name} icon={skill.icon} />
                </span>
              )}
            </a>
          ))}
        </section>
      </section>
      <section>
        <h2>Non-Technical Skills</h2>
        <ul className="flex gap-2">
          {nonTechnicalSkills.map((skill) => (
            <li className="flex justify-center items-center text-center px-5 py-2 gap-x-2 tooltip">
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Skills?</h2>
        <ul className="flex gap-2">
          {questionableSkills.map((skill) => (
            <li className="flex justify-center items-center text-center px-5 py-2 gap-x-2 tooltip">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
