
import React from "react";
import { motion } from "framer-motion";

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
      className="relative w-full flex justify-center bg-[#020617] text-white py-20 px-6"
    >
      <div className="w-full max-w-6xl">
        {/* About Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-green-500 text-sm font-medium tracking-widest uppercase">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            A little about me
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl text-base md:text-lg leading-relaxed">
            I am Ashish Kumar, a beginner frontend developer passionate about
            creating clean and responsive web applications. I enjoy learning
            new technologies and turning ideas into simple, functional
            interfaces.
          </p>

          <p className="text-gray-400 mt-4 max-w-3xl text-base md:text-lg leading-relaxed">
            Currently, I am improving my frontend skills by building projects,
            practicing JavaScript and React, and learning more about modern web
            development.
          </p>
        </motion.div>

        {/* Education + Details */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Education */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl font-semibold mb-5">
              Education
            </h3>

            <div className="space-y-5">
              <div>
                <h4 className="text-white font-medium">
                  Bachelor of Computer Applications
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  Teerthanker Mahaveer University
                </p>

                <p className="text-green-500 text-sm mt-1">
                  2024 - 2027
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <h4 className="text-white font-medium">
                  12th - BSEB
                </h4>

                <p className="text-green-500 text-sm mt-1">
                  Completed in 2024
                </p>
              </div>
            </div>
          </div>

          {/* Quick Details */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl font-semibold mb-5">
              Quick Details
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">
                  Location
                </p>

                <p className="text-gray-200 mt-1">
                  India
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Role
                </p>

                <p className="text-gray-200 mt-1">
                  Frontend Developer
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Currently Learning
                </p>

                <p className="text-gray-200 mt-1">
                  React & Full Stack Development
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Availability
                </p>

                <p className="text-green-400 mt-1">
                  Open to internships & fresher opportunities
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-xl md:text-2xl font-semibold">
              Skills
            </h3>

            <div className="h-px bg-white/10 flex-1" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                transition={{ duration: 0.2 }}
                className="
                  flex
                  items-center
                  gap-3
                  p-4
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  hover:border-green-500/40
                  transition-colors
                "
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-8 h-8 object-contain"
                />

                <span className="text-sm text-gray-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default About;
