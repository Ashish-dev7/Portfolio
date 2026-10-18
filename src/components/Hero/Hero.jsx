import React from "react";
import { motion } from "framer-motion";
import { TextShimmer } from "../../../ShimmerText";
import hero2 from "../../assets/hero2.png";
import { TextScramble } from "../../../TextEffects";

function Hero() {
  const firstName = "ASHISH";
  const lastName = "KUMAR";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#020617] text-white px-4 sm:px-6 pt-28 pb-16 md:py-38 overflow-hidden  "
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none  ">
        <div className="w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-green-500/10 blur-[100px] sm:blur-[130px] rounded-full " />
      </div>

      <div className="relative w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
        {/* Left Column: Text & CTA */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-3 mb-4 sm:mb-5"
          >
            <span className="w-8 sm:w-10 h-[2px] bg-green-500" />
            <span className="text-green-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
              <TextShimmer children={"HELLO, I'M"} />
            </span>
          </motion.div>
          <div className="relative overflow-hidden py-1 w-full flex flex-col items-center md:items-start">
            <motion.h1
              className="absolute inset-0 text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-black tracking-tight text-green-500/10 select-none pointer-events-none flex flex-wrap justify-center md:justify-start gap-x-3 sm:gap-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              aria-hidden="true"
            >
              <span>{firstName}</span>
              <span className="text-green-500/15">{lastName}</span>
            </motion.h1>
            <motion.h1
              initial="hidden"
              animate="visible"
              className="relative text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-black tracking-tight cursor-default flex flex-wrap justify-center md:justify-start gap-x-3 sm:gap-x-4"
            >
              <span className="inline-block whitespace-nowrap text-white">
                {firstName.split("").map((letter, index) => (
                  <motion.span
                    key={`first-${index}`}
                    className="inline-block"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 50,
                        rotateX: -90,
                        filter: "blur(6px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.6,
                          delay: index * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.12,
                      rotate: index % 2 === 0 ? -4 : 4,
                      textShadow: "0px 0px 20px rgba(34,197,94,0.8)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <span className="inline-block whitespace-nowrap text-green-500">
                {lastName.split("").map((letter, index) => (
                  <motion.span
                    key={`second-${index}`}
                    className="inline-block"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 50,
                        rotateX: -90,
                        filter: "blur(6px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.6,
                          delay: (firstName.length + index) * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.12,
                      rotate: index % 2 === 0 ? -4 : 4,
                      textShadow: "0px 0px 20px rgba(34,197,94,0.8)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
            <motion.div
              className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_15px_#22c55e] pointer-events-none"
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
              duration: 0.6,
              delay: 1.0,
            }}
            className="mt-4 sm:mt-5 flex items-center justify-center md:justify-start gap-2"
          >
            <span className="text-gray-400 text-base sm:text-lg font-normal">
              I'm a
            </span>
            <span className="text-lg sm:text-4xl text-gray-100 font-semibold">
              <TextShimmer children={"Frontend Developer"} />
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.2,
            }}
            className="text-gray-400 mt-4 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed font-normal"
          >
            <TextScramble
              as="span"
              startDelay={2000} // 1.2s delay + 0.6s fade-in
              respectReducedMotion={false}
              text="I build modern, responsive, and user-friendly web applications with clean interfaces and smooth experiences."
              mode="random"
              color="#00e600"
            />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.4,
            }}
            className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-center md:justify-start gap-3.5 sm:gap-4 mt-7 sm:mt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.04,
                y: -2,
                boxShadow: "0 0 25px rgba(34,197,94,0.35)",
              }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-3 bg-green-500 text-black font-semibold rounded-xl text-center shadow-lg shadow-green-500/20 transition-transform"
            >
              Hire Me
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-3 border border-white/20 hover:border-green-500 hover:text-green-400 rounded-xl text-center text-gray-200 font-medium transition-colors"
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src={hero2}
            alt="Ashish Kumar - Frontend Developer"
            className="relative brightness-85 w-full shadow-amber-50 shadow-amber-50"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
