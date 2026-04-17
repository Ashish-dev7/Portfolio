import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-4 w-full flex justify-center z-50"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="w-[90%] max-w-7xl px-6 py-3 flex justify-between items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
        {/* Logo */}
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="text-white font-bold text-lg"
        >
          AK
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#"
            className="text-white hover:text-green-500 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-green-500 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white hover:text-green-500 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-green-500 transition"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:block">
          <a
            href="/Resume.pdf"
            download
            
            className="px-4 py-2 rounded-lg border border-white/20 text-white hover:border-green-500 hover:text-green-500 transition"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </nav>

      <motion.div
        className="md:hidden absolute top-20 w-[90%] max-w-7xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          scale: menuOpen ? 1 : 0.95,
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex flex-col gap-6 items-center">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-green-500"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-green-500"
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-green-500"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-green-500"
          >
            Contact
          </a>

          <a
            href="/Resume.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 rounded-lg border border-white/20 text-white hover:border-green-500 hover:text-green-500 transition"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}

export default Navbar;
