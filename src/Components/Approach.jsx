// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { LuZap } from "react-icons/lu";

function Approach() {
  return (
    <div className="bg-bg-primary py-20">
      <div className="max-w-7xl mx-auto rounded-xl p-10 text-center transition-all duration-700 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-pattern z-0" />

        <motion.div
          initial={{ opacity: 0.7, scale: 1 }}
          animate={{ opacity: [0.6, 0.75, 0.6], scale: [1, 1.03, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(128,0,128,0)_0%,_rgba(128,0,128,0.2)_40%,_rgba(128,0,128,0.4)_70%,_rgba(0,0,0,0.7)_100%)] pointer-events-none z-0"
        />

        <div className="relative z-10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-800">
              <LuZap size={32} className="text-white" />
            </div>
          </div>

          {/* Heading */}
          <h3 className="text-3xl font-semibold mb-6 text-white leading-tight">
            My Development Approach
          </h3>

          {/* Description */}
          <p className="text-lg max-w-4xl mx-auto text-white/80 text-center">
            I approach development with a focus on clean, maintainable code and
            responsive design. My experience with modern JavaScript frameworks
            enables me to build modern applications from concept to deployment,
            always prioritizing clean code, performance, and user experience. I
            quickly adapt to new technologies and continuously expand my skill
            set.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Approach;
