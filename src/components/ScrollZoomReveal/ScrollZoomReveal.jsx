import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollZoomReveal() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Physics-based spring smoothing for liquid, inertia-rich scroll motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.4,
  });

  // Smooth progressive zoom from 0.75 up to 1.2
  const scale = useTransform(
    smoothProgress,
    [0.1, 0.45, 0.75, 1],
    [0.75, 1, 1.08, 1.22]
  );

  // Silky fade-in starting from 0, peaking, then dissolving into next section
  const opacity = useTransform(
    smoothProgress,
    [0.08, 0.35, 0.75, 0.98],
    [0, 1, 1, 0]
  );

  // Cinematic optical focus: gently clears from blurred into crisp view
  const blur = useTransform(
    smoothProgress,
    [0.08, 0.35, 0.75, 0.98],
    [10, 0, 0, 8]
  );
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  // Gentle vertical glide
  const yTranslate = useTransform(
    smoothProgress,
    [0.1, 0.5, 1],
    [50, 0, -40]
  );

  // Ambient glow scale and opacity
  const glowScale = useTransform(smoothProgress, [0.1, 0.55], [0.6, 1.25]);
  const glowOpacity = useTransform(
    smoothProgress,
    [0.1, 0.35, 0.75, 0.98],
    [0, 0.22, 0.22, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative hidden md:flex h-[115vh] sm:h-[130vh] w-full bg-[#020617] text-white overflow-hidden"
    >
      {/* Top seamless transition gradient from Hero */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#020617] to-transparent z-20 pointer-events-none" />

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-8">
        {/* Ambient Matrix Glow with smooth spring scaling */}
        <motion.div
          style={{ scale: glowScale, opacity: glowOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[250px] sm:h-[400px] bg-green-500 blur-[130px] rounded-full pointer-events-none"
        />

        {/* Full-width clean 2-line message */}
        <motion.div
          style={{ scale, opacity, y: yTranslate, filter }}
          className="relative z-10 w-full max-w-6xl mx-auto text-center flex flex-col items-center justify-center px-4 will-change-transform"
        >
          {/* Line 1: Main Title */}
          <h2 className="w-full text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-green-400 to-green-500 select-none drop-shadow-[0_0_35px_rgba(34,197,94,0.3)]">
            Entering the World of Matrix
          </h2>

          {/* Line 2: Greeting & Scroll Prompt */}
          <p className="mt-4 sm:mt-6 text-base sm:text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
            Please{" "}
            <span className="text-green-400 font-medium text-shadow-[0_0_15px_#22c55e]">
              scroll down
            </span>{" "}
            to enter
          </p>

          {/* Minimal Animated Arrow */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-6 sm:mt-8 text-green-400/80"
          >
            <i className="ri-arrow-down-line text-2xl sm:text-3xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom seamless transition gradient to About */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none" />
    </section>
  );
}


