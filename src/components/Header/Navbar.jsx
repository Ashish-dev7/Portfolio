import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav
          className="
            relative
            w-full
            max-w-6xl
            mx-auto
            px-4 sm:px-6
            py-2.5 sm:py-3
            flex
            items-center
            justify-between
            bg-[#090d1f]/85
            backdrop-blur-md
            border
            border-white/10
            rounded-xl
            shadow-lg
            shadow-black/25
          "
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-white hover:opacity-90 transition"
          >
            <span className="text-green-500">A</span>K
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Resume */}
          <a
            href="./Resume.pdf"
            download
            className="
              hidden
              md:inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-lg
              border
              border-white/15
              text-sm
              font-medium
              text-gray-200
              hover:border-green-500/60
              hover:text-green-400
              hover:bg-white/5
              transition
            "
          >
            <i className="ri-file-download-line text-base"></i>
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-lg
              text-gray-200
              hover:text-white
              hover:bg-white/5
              transition
              focus:outline-none
            "
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <i
              className={`text-2xl ${
                menuOpen ? "ri-close-line text-green-400" : "ri-menu-line"
              }`}
            ></i>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer and Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-40 md:hidden flex flex-col justify-start pt-20 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm -z-10"
              aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="
                w-full
                max-w-md
                mx-auto
                bg-[#090d1f]
                border
                border-white/15
                rounded-2xl
                p-5
                shadow-2xl
                shadow-black/70
              "
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="
                      px-4
                      py-3
                      rounded-xl
                      text-gray-200
                      hover:text-green-400
                      hover:bg-white/5
                      font-medium
                      transition
                      text-center
                    "
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-3 mt-1 border-t border-white/10">
                  <a
                    href="./Resume.pdf"
                    download
                    onClick={closeMenu}
                    className="
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      px-4
                      rounded-xl
                      bg-green-500
                      text-black
                      font-semibold
                      hover:bg-green-400
                      transition
                      text-center
                    "
                  >
                    <i className="ri-file-download-line text-lg"></i>
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;