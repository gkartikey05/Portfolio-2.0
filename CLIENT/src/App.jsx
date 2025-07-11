import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect } from "react";

import About from "./Components/About";
import Approach from "./Components/Approach";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import axiosInstance from "./Helpers/axiosInstance";

function App() {
  useEffect(() => {
    const pingServer = () => {
      axiosInstance.get("/api/ping").catch(() => {});
    };
    pingServer(); // Initial ping
    const interval = setInterval(pingServer, 300000); // 5 minutes
    return () => clearInterval(interval);
  }, []);

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
