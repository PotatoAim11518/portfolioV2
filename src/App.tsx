import "./App.css";
import About from "./components/Sections/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Sections/Section";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";

function App() {
  return (
    <main className="w-full flex flex-col justify-between items-center overflow-hidden background">
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
