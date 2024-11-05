import "../App.css";
import About from "./Sections/About/About";
import Footer from "./Footer";
import Header from "./Header";
import Skills from "./Sections/Skills/Skills";
import Projects from "./Sections/Projects/Projects";
import Contact from "./Sections/Contact/Contact";
import { useEffect, useRef, useState } from "react";

const pageSections = [
  { id: "about", component: <About /> },
  { id: "skills", component: <Skills /> },
  { id: "projects", component: <Projects /> },
  { id: "contact", component: <Contact /> },
];

function App() {
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [visibleSectionId, setVisibleSectionId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSectionId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col items-center overflow-hidden background">
      <Header visibleSectionId={visibleSectionId} />
      {pageSections.map(({ id, component }, i) => (
        <section
          id={id}
          key={id}
          ref={(ref) => {
            sectionRefs.current[i] = ref;
          }}
          className="w-screen lg:max-w-screen-xl min-h-[900px] mt-8 px-8 py-16"
        >
          {component}
        </section>
      ))}
      <Footer />
    </main>
  );
}

export default App;
