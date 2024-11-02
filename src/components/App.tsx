import "../App.css";
import About from "./Sections/About/About";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Sections/Section";
import Skills from "./Sections/Skills/Skills";
import Projects from "./Sections/Projects/Projects";
import Contact from "./Sections/Contact/Contact";

function App() {
  return (
    <main className="flex flex-col items-center overflow-hidden background">
      <Header />
      <Section id="about">
        <About />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
      <Footer />
    </main>
  );
}

export default App;
