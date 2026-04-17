import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="w-full bg-[#020617] text-white border-t border-white/10 py-10 flex justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="w-[90%] max-w-7xl flex flex-col items-center gap-6">

        <div className="text-center">
          <h2 className="text-lg font-semibold">Ashish Kumar</h2>
          <p className="text-gray-400 text-sm">Frontend Developer</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="hover:text-green-500 transition">Home</a>
          <a href="#about" className="hover:text-green-500 transition">About</a>
          <a href="#projects" className="hover:text-green-500 transition">Projects</a>
          <a href="#contact" className="hover:text-green-500 transition">Contact</a>
        </div>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/Ashish-dev7"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition"
          >
            GitHub
          </a>

          <a
            href="www.linkedin.com/in/ashish-kumar-580b9a314"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-gray-500 text-sm text-center">
          © 2026 Ashish Kumar. All rights reserved.
        </div>

      </div>
    </motion.footer>
  );
}

export default Footer;