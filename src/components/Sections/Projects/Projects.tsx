import { PROJECTS } from "../../../data/projects";
import Heading from "../../Heading";
import Project from "./Project";
import SeeMoreLink from "./SeeMoreLink";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading>Projects</Heading>
      <section className="flex flex-col my-10">
        {PROJECTS.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </section>
      <SeeMoreLink />
    </div>
  );
}
