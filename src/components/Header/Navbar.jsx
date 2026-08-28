import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="fixed top-4 left-0 right-0 z-50 px-4"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav
        className="
          relative
          w-full
          max-w-6xl
          mx-auto
          px-5
          py-3
          flex
          items-center
          justify-between
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          rounded-xl
        "
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold text-white"
        >
          <span className="text-green-500">A</span>K
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
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
            href="#certifications"
            className="text-white hover:text-green-500 transition"
          >
            Certifications
          </a>

          <a
            href="#contact"
            className="text-white hover:text-green-500 transition"
          >
            Contact
          </a>
        </div>

        {/* Desktop Resume */}
        <a
          href="/Resume.pdf"
          download
          className="
            hidden
            md:block
            px-4
            py-2
            rounded-lg
            border
            border-white/20
            text-white
            hover:border-green-500
            hover:text-green-500
            transition
          "
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          <i
            className={menuOpen ? "ri-close-line" : "ri-menu-line"}
          ></i>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            className="
              absolute
              top-full
              left-0
              right-0
              mt-2
              w-full
              bg-[#020617]
              border
              border-white/20
              rounded-xl
              p-6
            "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-5">
              <a
                href="#home"
                onClick={closeMenu}
                className="text-white hover:text-green-500 transition"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="text-white hover:text-green-500 transition"
              >
                About
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="text-white hover:text-green-500 transition"
              >
                Projects
              </a>

              <a
                href="#certifications"
                onClick={closeMenu}
                className="text-white hover:text-green-500 transition"
              >
                Certifications
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="text-white hover:text-green-500 transition"
              >
                Contact
              </a>

              <a
                href="/Resume.pdf"
                download
                onClick={closeMenu}
                className="
                  px-4
                  py-2
                  rounded-lg
                  border
                  border-white/20
                  text-white
                  hover:border-green-500
                  hover:text-green-500
                  transition
                "
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

export default Navbar;