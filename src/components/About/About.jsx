import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="w-full relative flex justify-center bg-[#020617] text-white py-20"
    >
      <div className="w-[90%] max-w-7xl flex flex-col md:flex-row items-start gap-12">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>

          <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed">
            I am Ashish Kumar, a beginner frontend developer. I have learned
            HTML, CSS, JavaScript, and React, and I enjoy building simple and
            responsive web applications.
          </p>

          <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed">
            Currently, I am improving my skills by building projects and
            learning more about web development step by step.
          </p>

          <div className="mt-6 text-sm md:text-base text-gray-300 space-y-1">
            <p>Based in India</p>
            <p>Open to internships / fresher roles</p>
          </div>
          {/* Education part */}
          <div>
            <h3 className="text-2xl mt-6 md:text-2xl font-semibold">
              Education
            </h3>
            <div className="w-ful h-full">
              <div className="w-full py-20 px-4">
                <div className="relative max-w-4xl mx-auto h-10"> 
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-green-700 via-green-400 to-white -translate-y-1/2"></div>

                  <motion.div
                    className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-3 h-3 mb-6 bg-green-600 rounded-full mx-auto"></div>

                    <div className="-mb-15">
                      <h3 className="text-white text-sm font-medium">
                        12th (BSEB)
                      </h3>
                      <p className="text-xs text-gray-400">Completed in 2024</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-3 h-3 -mt-1.5 bg-white rounded-full mx-auto"></div>
                    <div className="-mt-28 md:-mt-22">
                      <h3 className="text-white text-sm font-medium">BCA</h3>
                      <p className="text-xs leading-tight text-gray-400">
                        Teerthanker Mahaveer University 2024 - 2027
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6">Skills</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-5 bg-white/5 border border-white/10 rounded-xl"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                className="w-10 h-10"
              />
              <span className="mt-3 text-sm">HTML</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-5 bg-white/5 border border-white/10 rounded-xl"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                className="w-10 h-10"
              />
              <span className="mt-3 text-sm">CSS</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-5 bg-white/5 border border-white/10 rounded-xl"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                className="w-10 h-10"
              />
              <span className="mt-3 text-sm">JavaScript</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-5 bg-white/5 border border-white/10 rounded-xl"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                className="w-10 h-10"
              />
              <span className="mt-3 text-sm">React</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-5 bg-white/5 border border-white/10 rounded-xl"
            >
              <img
                src="https://cdn.simpleicons.org/tailwindcss/38bdf8"
                className="w-10 h-10"
              />
              <span className="mt-3 text-sm">Tailwind</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-5 bg-white/5 border border-white/10 rounded-xl"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                className="w-10 h-10"
              />
              <span className="mt-3 text-sm">Git</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-5 bg-white/5 border border-white/10 rounded-xl"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                className="w-10 h-10 bg-white rounded-full"
              />
              <span className="mt-3 text-sm">GitHub</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-5 bg-white/5 border border-white/10 rounded-xl"
            >
              <img
                src="https://cdn.simpleicons.org/framer/ffffff"
                alt="Framer Motion"
                className="w-10 h-10"
              />
              <span className="mt-3 text-sm">Framer Motion</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <hr className="border-0.5 absolute bottom-1 max-w-7xl text-green-600 w-full " />
    </section>
  );
}

export default About;
