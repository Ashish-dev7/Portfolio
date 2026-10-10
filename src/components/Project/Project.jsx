import React from "react";
import { motion } from "framer-motion";
import hero1 from "../../assets/SkillScan.png";

function Projects() {
  const projects = [
    {
      title: "SkillScan",
      description:
        "An AI-powered resume analyzer that helps users improve their resumes with smart suggestions, better formatting, and job-ready optimization.",
      image: hero1,
      tags: ["React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://skill-scan-rho.vercel.app/",
      githubUrl: "https://github.com/Ashish-dev7/SkillScan",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full flex justify-center bg-[#020617] text-white py-16 sm:py-20 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-green-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            My Work
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Featured Projects
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-3 max-w-2xl font-normal">
            Here are some of the projects I've built while learning and
            improving my frontend development skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                group
                flex flex-col
                bg-white/5
                border border-white/10
                rounded-2xl
                overflow-hidden
                hover:border-green-500/40
                transition-all
                duration-300
              "
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed font-normal flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-green-500/10 text-green-400 border border-green-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-white/10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      text-sm
                      font-semibold
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
                    href={project.githubUrl}
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
                      border
                      border-white/15
                      rounded-lg
                      text-gray-300
                      hover:text-green-400
                      hover:border-green-500/50
                      transition
                    "
                  >
                    Code
                    <i className="ri-github-line" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

