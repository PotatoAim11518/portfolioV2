import Header from "./Nav/Header";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Footer";
import { useRef } from "react";
import { useVisibleSectionId } from "../lib/hooks";
import { PROJECTS } from "../data/projects";
import Projects from "./Sections/Projects/Projects";
import Subskills from "./Sections/Skills/Subskills";
import { LEARNING, OTHER_SKILLS } from "../data/skills";
import CoreSkills from "./Sections/Skills/CoreSkills";

const pageSections = [
  { id: "about", pageSection: <About /> },
  {
    id: "skills",
    pageSection: (
      <Skills labels={["Core", "Other technical", "Learning next"]}>
        <CoreSkills />
        <Subskills skillList={OTHER_SKILLS}></Subskills>
        <Subskills skillList={LEARNING}></Subskills>
      </Skills>
    ),
  },
  { id: "projects", pageSection: <Projects projects={PROJECTS} /> },
  { id: "contact", pageSection: <Contact /> },
];

function App() {
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const visibleSectionId = useVisibleSectionId(sectionRefs);

  return (
    <main className="font-lexend text-white font-medium flex flex-col items-center overflow-hidden background">
      <Header visibleSectionId={visibleSectionId} />
      {pageSections.map(({ id, pageSection }, i) => (
        <section
          id={id}
          key={id}
          ref={(ref) => {
            sectionRefs.current[i] = ref;
          }}
          className="w-screen lg:max-w-screen-xl min-h-[900px] mt-8 px-8 py-16"
        >
          {pageSection}
        </section>
      ))}
      <Footer />
    </main>
  );
}

export default App;
