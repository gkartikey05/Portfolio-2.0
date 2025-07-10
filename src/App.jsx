import About from "./Components/About";
import Approach from "./Components/Approach";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="h-screen no-scrollbar">
      <Hero />
      <About />
      <Skills />
      <Approach />
      <Projects />
    </div>
  );
}

export default App;
