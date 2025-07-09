import About from "./Components/About";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="h-screen no-scrollbar">
      <Hero />
      <About />
      <Skills/>
    </div>
  );
}

export default App;
