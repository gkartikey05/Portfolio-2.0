import { useState } from "react";
import { LuCode, LuExternalLink, LuGithub, LuSparkles } from "react-icons/lu";
import { Link } from "react-router-dom";

import { Projects } from "../Constants/Projects/Projects";

function Project() {
  const [activeProject, setActiveProject] = useState(3);

  const handleActiveProject = () => {
    if (activeProject === 3) {
      setActiveProject(9);
    } else {
      setActiveProject(3);
    }
  };

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden bg-bg-primary"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.05)_0%,transparent_60%)]"></div>
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0xOCAwdjE4SDBWMGgxOHpNMSAxN2gxNlYxSDFWMTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm tracking-wider uppercase inline-block mb-3 glass-hero-card px-4 py-1 rounded-full">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary ">
              <LuSparkles size={14} className="inline mr-2 text-white" />
              Portfolio
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills across the full
            stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Projects.slice(0, activeProject).map((project) => (
            <div
              key={project.title}
              className="gradient-card rounded-xl overflow-hidden group transition-all duration-700 hover:shadow-[0_0_25px_rgba(79,70,229,0.2)] relative"
            >
              <div className="absolute top-0 right-0 w-full h-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/80 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="h-52 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/0 after:to-background/90"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Show on hover for large screens, always visible on small screens */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
                transition-opacity duration-300 flex items-center justify-center"
                >
                  <div className="flex space-x-4">
                    <Link
                      to={project.github}
                      className="cyber-box p-3 rounded-full hover:bg-white/20 transition-colors duration-300 hover:scale-110 transform hover:shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                      aria-label="GitHub Repository"
                      target="_blank"
                    >
                      <LuGithub size={20} className="text-white" />
                    </Link>
                    <Link
                      to={project.live}
                      className="cyber-box p-3 rounded-full hover:bg-white/20 transition-colors duration-300 hover:scale-110 transform hover:shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                      aria-label="Live Demo"
                      target="_blank"
                    >
                      <LuExternalLink size={20} className="text-white" />
                    </Link>
                  </div>
                  {/* hover ends here */}
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-10 right-6 cyber-box p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2 translate-y-0 transform hover:shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                  <LuCode size={20} className="text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent text-center bg-gradient-to-r from-white via-white/90 to-primary/80 ">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 text-justify">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs glass-panel px-3 py-1 rounded-full text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* eplore more  button */}
        <div className="mt-12 text-center ">
          <button
            type="button"
            onClick={handleActiveProject}
            className="inline-flex items-center cyber-box px-6 py-3 rounded-full cursor-pointer text-white font-medium transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] group"
          >
            <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">
              {activeProject === 3 ? "Explore More" : "Close"}
            </span>
            <span className="p-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <LuExternalLink size={18} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Project;
