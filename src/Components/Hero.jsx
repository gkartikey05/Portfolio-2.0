// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Hero() {
  return (
    <MainLayout>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-bg-primary relative overflow-hidden"
      >
        {/* Grid Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 grid-pattern"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_30%,rgba(0,0,0,0.6)_90%)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_20%,rgba(0,0,0,0.9)_90%)] sm:bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.2)_20%,rgba(0,0,0,0.85)_90%)]"
        />

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto flex flex-col items-center justify-center z-10"
        >
          <motion.span
            variants={fadeInUp}
            className="text-sm md:text-base tracking-wider uppercase inline-block mb-4 glass-hero-card px-4 py-2 rounded-full border border-white"
          >
            <span className="mx-auto bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary">
              Full Stack Developer
            </span>
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight tracking-tighter mb-6 text-text-primary text-center"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
              Kartikey
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text-secondary mb-10 px-4 text-center"
          >
            Specializing in modern web technologies and MERN stack
            <br className="hidden md:block" /> with a passion for creating
            seamless user experiences.
          </motion.p>

          {/* Links */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mb-10"
          >
            {/* view projects */}
            <motion.div
              whileHover={{
                boxShadow: "0px 0px 15px rgba(139, 92, 246, 0.8)",
                backgroundColor: "rgba(139, 92, 246, 0.9)",
              }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full"
            >
              <Link
                to="#projects"
                className="px-6 py-3 rounded-full text-white font-medium bg-primary cursor-pointer inline-block"
              >
                View Project
              </Link>
            </motion.div>

            {/* download resume */}
            <motion.div
              whileHover={{
                boxShadow: "0px 0px 15px rgba(139, 92, 246, 0.8)",
                backgroundColor: "rgba(139, 92, 246, 0.9)",
              }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full"
            >
              <Link
                to={
                  "https://drive.google.com/file/d/1ieXVy42HLM8gJtyZH6x728PktDQodkez/view?usp=sharing"
                }
                target="_blank"
                download
                className="px-6 py-3 rounded-full text-gradient font-medium border glass-panel border-white/10 cursor-pointer inline-block"
              >
                Download Resume
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Down */}
          <motion.div
            variants={fadeInUp}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <a
              href="#about"
              className="flex flex-col items-center text-white/50 hover:text-white transition-colors duration-300 group"
            >
              <span className="text-sm mb-2 group-hover:text-primary transition-colors duration-300">
                Scroll Down
              </span>
              <div className="cyber-box p-2 rounded-full">
                <ArrowDown
                  size={20}
                  className="group-hover:translate-y-1 transition-transform duration-300"
                />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </MainLayout>
  );
}

export default Hero;
