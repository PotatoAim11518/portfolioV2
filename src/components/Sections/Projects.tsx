import Heading from "../Heading";
import Project from "../Project";

const projectA = {
  name: "Project Name",
  tags: ["React", "TailwindCSS", "Framer Motion"],
};

export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading>Projects</Heading>
      <section>
        <Project name={projectA.name} tags={projectA.tags} />
        <Project name={projectA.name} tags={projectA.tags} />
        <Project name={projectA.name} tags={projectA.tags} />
      </section>
    </div>
  );
}
