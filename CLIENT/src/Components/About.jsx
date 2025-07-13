function About() {
  return (
    <section id="about" className="section-padding relative bg-bg-primary">
      {/* background */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.6)_20%,rgba(139,92,246,0.2)_60%,rgba(0,0,0,0.85)_100%)]" />

      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-5">
          <span className="text-sm tracking-wider uppercase text-primary inline-block mb-2 animate-pulse drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white ">
            Who I Am
          </h2>
        </div>

        <div className="glass-panel rounded-xl p-8 transition-all duration-700 bg-bg-secondary/70">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/profile.jpg')",
                  }}
                ></div>
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Full Stack Developer & Tech Enthusiast
              </h3>
              <p className="text-white/70 mb-6 text-justify">
                Full Stack Developer with 1 Year of hands-on experience
                specializing in the MERN stack. Transitioned from a Mechanical
                Engineering background (B.Tech, Technocrats Institute of
                Technology & Science) into software development, backed by a
                MERN Stack Development certification from PW Skills. Proven
                ability to build scalable web applications and deliver
                end-to-end solutions.
              </p>
              <p className="text-white/70 mb-6 text-justify">
                My technical skill set includes framework like Next.JS,
                React.JS, Redux Toolkit, Node.JS, Express.JS, and languages like
                TypeScript, JavaScript, jQuery, CSS and HTML. I also have a
                strong foundation in Data Structures & Algorithms and Database
                Management Systems, with experience working on both SQL and
                NoSQL databases such as MySQL, PostgreSQL and MongoDB.
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="#contact"
                  className="glass-panel px-6 py-3 text-nowrap rounded-full text-white text-center font-medium transition-all duration-300 hover:bg-white/10"
                >
                  Get In Touch
                </a>
                <a
                  href="resume.pdf"
                  download
                  className="bg-primary text-white text-nowrap  text-center px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-purple-600"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
