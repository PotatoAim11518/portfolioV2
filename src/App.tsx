import "./App.css";
import About from "./components/Sections/About";
// import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Sections/Section";
import Skills from "./components/Sections/Skills";

function App() {
  return (
    <main className="relative bg-right-top bg-gradient-to-tr from-gray-900 via-gray-800/90 via-[65%] to-gray-950 to-[90%] flex flex-col justify-between items-center w-auto overflow-y-auto">
      <Header />
      <Section id="about">
        <About />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="projects">My Projects</Section>
      <Section id="contact">Contact Me</Section>
      <Footer />
    </main>
  );
}

export default App;
