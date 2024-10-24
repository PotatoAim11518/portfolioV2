import { Icon } from "@iconify/react";

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
  { name: "Framer Motion", icon: "devicon:framermotion" },
  { name: "Styled Components", icon: "skill-icons:styledcomponents" },
  { name: "Storybook", icon: "logos:storybook-icon" },
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
                aria-label={icon.name} // fix this
                icon={icon.icon}
                height="6rem"
                width="6rem"
                className="peer drop-shadow-md"
                // implement tooltip
              />
              <div className="absolute hidden peer-hover:inline-block pointer-events-none px-4 py-1 -bottom-4 tooltip animate-tooltip">
                {icon.name}
              </div>
            </div>
          ))}
        </section>
      </div>
      <section>
        <h2>Honorable Mentions</h2>
        <section className="flex gap-2">
          {otherSkills.map((skill) => (
            <div className="flex justify-center items-center gap-2 tooltip">
              {skill.name}
              <span>
                <Icon aria-label={skill.name} icon={skill.icon} />
              </span>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
