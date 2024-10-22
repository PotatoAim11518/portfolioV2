import "./App.css";
import About from "./components/About";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <main className="flex flex-col justify-between items-center overflow-y-auto bg-gray-800">
      <Background />
      <Header />
      <Section id="about">
        <About />
      </Section>
      <Section id="skills">Skills</Section>
      <Section id="projects">My Projects</Section>
      <Section id="contact">Contact Me</Section>
      <Footer />
    </main>
  );
}

export default App;
