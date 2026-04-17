import React from "react";
import { motion } from "framer-motion";
import hero1 from "../../assets/SkillScan.png";


function Projects() {
  return (
    <section
      id="projects"
      className="w-full flex  relative justify-center bg-[#020617] text-white py-20"
    >
      <div className="w-[90%] max-w-7xl">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-40 bg-gray-800 flex items-center justify-center text-gray-400">
              <img src={hero1} alt="" />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">SkillScan</h3>

              <p className="text-gray-400 text-sm mt-2">
                SkillScan is an AI-powered resume analyzer that helps users
                improve their resumes with smart suggestions, better formatting,
                and job-ready optimization.
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Tech: React.js, Tailwind CSS, JavaScript (ES6+),
              </p>

              <div className="flex gap-3 mt-4">
                <a href="https://skill-scan-rho.vercel.app/" target="_blank" className="px-3 py-1 text-sm border border-white/20 rounded-lg hover:border-green-500 transition">
                  Live
                </a>
                <a href="https://github.com/Ashish-dev7/SkillScan" target="_blank" className="px-3 py-1 text-sm border border-white/20 rounded-lg hover:border-green-500 transition">
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <hr className="border-0.5 absolute bottom-1 max-w-7xl text-green-600 w-full " />
    </section>
  );
}

export default Projects;
