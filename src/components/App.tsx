import Header from "./Header";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
import Projects from "./Sections/Projects/Projects";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Footer";
import { useRef } from "react";
import { useVisibleSectionId } from "../lib/hooks";

const pageSections = [
  { id: "about", pageSection: <About /> },
  { id: "skills", pageSection: <Skills /> },
  { id: "projects", pageSection: <Projects /> },
  { id: "contact", pageSection: <Contact /> },
];

function App() {
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const visibleSectionId = useVisibleSectionId(sectionRefs);

  return (
    <main className="flex flex-col items-center overflow-hidden background">
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
