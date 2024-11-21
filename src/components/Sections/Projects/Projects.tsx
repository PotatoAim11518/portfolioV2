import { Project } from "../../../lib/types";
import Heading from "../../Heading";
import ProjectItem from "./ProjectItem";
import SeeMoreLink from "./SeeMoreLink";

type ProjectsProps = {
  projects: Project[];
};
export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading>Projects</Heading>

      <div className="flex flex-col md:flex-row flex-wrap gap-12">
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
      <SeeMoreLink />
    </div>
  );
}
