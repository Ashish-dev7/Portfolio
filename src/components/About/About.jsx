import React from "react";
import { motion } from "framer-motion";
import GitHubGraph from "../GitHubCalender/GitHubGraph";


function About() {
  const skills = [
    {
      name: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      image: "https://cdn.simpleicons.org/tailwindcss/38bdf8",
    },
    {
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Framer Motion",
      image: "https://cdn.simpleicons.org/framer/ffffff",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full flex justify-center bg-[#020617] text-white pt-4 sm:pt-6 pb-16 sm:pb-20 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="w-full max-w-6xl">
        {/* About Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-green-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            A little about me
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            I am Ashish Kumar, a beginner frontend developer passionate about
            creating clean and responsive web applications. I enjoy learning new
            technologies and turning ideas into simple, functional interfaces.
          </p>

          <p className="text-gray-400 mt-4 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Currently, I am improving my frontend skills by building projects,
            practicing JavaScript and React, and learning more about modern web
            development.
          </p>
        </motion.div>

        {/* Education + Details */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Education */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <i className="ri-graduation-cap-line text-green-400 text-xl" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-white font-medium">
                    Bachelor of Computer Applications
                  </h4>

                  <p className="text-gray-400 text-sm mt-1 font-normal">
                    Teerthanker Mahaveer University
                  </p>

                  <p className="text-green-400 text-sm mt-1 font-medium">
                    2024 - 2027
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <h4 className="text-white font-medium">12th - BSEB</h4>

                  <p className="text-green-400 text-sm mt-1 font-medium">
                    Completed in 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Details */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <i className="ri-user-line text-green-400 text-xl" />
                <h3 className="text-xl font-semibold">Quick Details</h3>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-white/5 gap-1">
                  <span className="text-gray-400 text-sm font-normal">
                    Location
                  </span>
                  <span className="text-gray-200 font-medium text-sm sm:text-base">
                    India
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-white/5 gap-1">
                  <span className="text-gray-400 text-sm font-normal">
                    Role
                  </span>
                  <span className="text-gray-200 font-medium text-sm sm:text-base">
                    Frontend Developer
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-white/5 gap-1">
                  <span className="text-gray-400 text-sm font-normal">
                    Currently Learning
                  </span>
                  <span className="text-gray-200 font-medium text-sm sm:text-base">
                    React & Modern Web
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 gap-1">
                  <span className="text-gray-400 text-sm font-normal">
                    Availability
                  </span>
                  <span className="text-green-400 font-medium text-sm sm:text-base">
                    Open to internships & fresher roles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="mt-12 sm:mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Skills & Technologies
            </h3>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                transition={{ duration: 0.2 }}
                className="
                  flex
                  items-center
                  gap-3
                  p-3.5
                  sm:p-4
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  hover:border-green-500/40
                  hover:bg-white/[0.07]
                  transition-all
                "
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className={`w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0 ${
                    skill.name === "GitHub" ? "invert" : ""
                  }`}
                  loading="lazy"
                />

                <span className="text-xs sm:text-sm text-gray-200 font-medium truncate">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <GitHubGraph username="Ashish-dev7" />
      </div>
    </section>
  );
}

export default About;
