import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import About from "./Components/About";
import Approach from "./Components/Approach";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
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
      <Contact />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
