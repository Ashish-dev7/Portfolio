import React from "react";
import { motion } from "framer-motion";
import hero2 from "../../assets/hero2.png";

function Hero() {
  const name = "ASHISH KUMAR";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#020617] text-white px-6 py-24 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center md:justify-start gap-3 mb-5"
          >
            <span className="w-10 h-[2px] bg-green-500" />

            <span className="text-green-400 text-sm tracking-[0.3em]">
              HELLO, I'M
            </span>
          </motion.div>

          <div className="relative">
            <motion.h1
              className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-green-500/10 select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {name}
            </motion.h1>
            <motion.h1
              initial="hidden"
              animate="visible"
              className="relative text-5xl sm:text-6xl md:text-7xl font-black tracking-tight cursor-default"
            >
              {name.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className={`inline-block ${
                    index > 5 ? "text-green-500" : "text-white"
                  }`}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 80,
                      rotateX: -90,
                      filter: "blur(8px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.7,
                        delay: index * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.15,
                    rotate: index % 2 === 0 ? -4 : 4,
                    textShadow: "0px 0px 25px rgba(34,197,94,0.8)",
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              className="absolute left-0 top-0 w-full h-[2px] bg-green-400 shadow-[0_0_15px_#22c55e]"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.8,
                delay: 0.5,
                ease: "easeInOut",
              }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.4,
            }}
            className="mt-5"
          >
            <span className="text-gray-500 text-lg mr-2">I'm a</span>

            <span className="text-xl md:text-2xl text-gray-200 font-medium">
              Frontend Developer
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.6,
            }}
            className="text-gray-400 mt-5 max-w-lg mx-auto md:mx-0 text-base md:text-lg leading-relaxed"
          >
            I build modern, responsive, and user-friendly web applications with
            clean interfaces and smooth experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.8,
            }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.06,
                y: -3,
                boxShadow: "0 0 30px rgba(34,197,94,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 bg-green-500 text-black font-semibold rounded-xl"
            >
              Hire Me
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.06,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 border border-gray-700 hover:border-green-500 hover:text-green-400 rounded-xl transition-colors"
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{
            opacity: 0,
            scale: 0.7,
            x: 100,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="relative w-full max-w-md"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-10 bg-green-500/20 blur-[80px] rounded-full"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-5 rounded-full border border-green-500/20"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <img
              src={hero2}
              alt="Ashish Kumar - Frontend Developer"
              className="relative w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
