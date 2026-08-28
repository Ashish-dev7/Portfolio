
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="w-full bg-[#020617] text-white border-t border-white/10 py-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-[90%] max-w-6xl mx-auto">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-bold"
            >
              <span className="text-green-500">A</span>K
            </a>

            <p className="text-gray-400 text-sm mt-1">
              Frontend Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#home"
              className="text-gray-400 hover:text-green-500 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-400 hover:text-green-500 transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-400 hover:text-green-500 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-400 hover:text-green-500 transition"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/Ashish-dev7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="
                w-9
                h-9
                flex
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                text-gray-400
                hover:text-green-500
                hover:border-green-500/50
                transition
              "
              aria-label="GitHub"
            >
              <i className="ri-github-line text-lg"></i>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ashish-kumar-580b9a314/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="
                w-9
                h-9
                flex
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                text-gray-400
                hover:text-green-500
                hover:border-green-500/50
                transition
              "
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-line text-lg"></i>
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-7" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <p className="text-gray-500">
            © 2026 Ashish Kumar. All rights reserved.
          </p>

          <p className="text-gray-600">
            Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </motion.footer>
  );
}

export default Footer;
