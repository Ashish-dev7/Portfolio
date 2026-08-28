
import React from "react";
import { motion } from "framer-motion";
import hero1 from "../../assets/SkillScan.png";

function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full flex justify-center bg-[#020617] text-white py-20 px-6"
    >
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-green-500 text-sm font-medium tracking-widest uppercase">
            My Work
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Projects
          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-3 max-w-2xl">
            Here are some of the projects I've built while learning and
            improving my frontend development skills.
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
              group
              bg-white/5
              border border-white/10
              rounded-2xl
              overflow-hidden
              hover:border-green-500/40
              transition-colors
              duration-300
            "
          >
            <div className="relative h-52 overflow-hidden bg-gray-900">
              <img
                src={hero1}
                alt="SkillScan project"
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                "
              />


              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>


            <div className="p-5">
              <h3 className="text-xl font-semibold">
                SkillScan
              </h3>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                An AI-powered resume analyzer that helps users improve their
                resumes with smart suggestions, better formatting, and
                job-ready optimization.
              </p>


              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2.5 py-1 text-xs rounded-md bg-green-500/10 text-green-400 border border-green-500/20">
                  React
                </span>

                <span className="px-2.5 py-1 text-xs rounded-md bg-green-500/10 text-green-400 border border-green-500/20">
                  JavaScript
                </span>

                <span className="px-2.5 py-1 text-xs rounded-md bg-green-500/10 text-green-400 border border-green-500/20">
                  Tailwind CSS
                </span>
              </div>


              <div className="flex gap-3 mt-6">
                <a
                  href="https://skill-scan-rho.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    text-sm
                    font-medium
                    bg-green-500
                    text-black
                    rounded-lg
                    hover:bg-green-400
                    transition
                  "
                >
                  Live Demo
                  <i className="ri-external-link-line" />
                </a>

                <a
                  href="https://github.com/Ashish-dev7/SkillScan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    text-sm
                    border
                    border-white/15
                    rounded-lg
                    text-gray-300
                    hover:text-green-400
                    hover:border-green-500
                    transition
                  "
                >
                  Code
                  <i className="ri-github-line" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
