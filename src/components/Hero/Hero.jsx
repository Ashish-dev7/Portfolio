import React from "react";
import { motion } from "framer-motion";
import hero2 from "../../assets/hero2.png";

function Hero() {
  return (
    <section className="min-h-screen flex md:items-center justify-center bg-[#020617] text-white">
      <div className="w-[90%] max-w-7xl flex mt-40 mb-10 flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm <span className="text-green-500">Ashish Kumar</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-gray-300 mt-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            className="text-gray-400 mt-4 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I build modern, responsive, and user-friendly web applications.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <a
              href="#contact"
              className="px-6 py-3 hover:scale-105 bg-green-500 rounded-xl"
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="px-6 hover:scale-105 py-3 border rounded-xl"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-100 h-fit flex items-center justify-center">
            <img src={hero2} alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
