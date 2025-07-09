// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { LuSparkles } from "react-icons/lu";

import { SkillCategories, SkillLogos } from "../Constants/Skills/Skills";

function Skills() {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden bg-bg-primary"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm tracking-wider uppercase text-primary inline-block mb-3 bg-white/5 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">
            <LuSparkles size={14} className="inline mr-2" />
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </div>

        {/* Logo Ticker */}
        <div className="mb-16 overflow-hidden rounded-xl backdrop-blur-sm bg-white/[0.01] p-4 border border-white/5 relative">
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex gap-8 lg:gap-16 w-max"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                ease: "linear",
                duration: 60,
                repeat: Infinity,
              }}
            >
              {[...SkillLogos, ...SkillLogos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex flex-col items-center glass-panel px-6 py-4 rounded-lg min-w-[120px] hover:scale-105 transition-all duration-300 hover:shadow-[0_0_10px_rgba(79,70,229,0.2)]"
                >
                  <div className="mb-2">{logo.icon}</div>
                  <span className="text-sm font-medium text-text-primary">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SkillCategories.map((category) => (
            <div
              key={category.name}
              className="gradient-card rounded-xl p-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)] group"
            >
              <div className="flex items-center mb-4">
                <div className="cyber-box p-2 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="glass-panel px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_10px_rgba(79,70,229,0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
