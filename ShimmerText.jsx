import { motion } from "motion/react";

export function TextShimmer({ children, duration = 2, spread = 2 }) {
  const dynamicSpread = children.length * spread; // px

  return (
    <motion.span
      className="inline-block bg-clip-text text-transparent bg-[length:250%_100%,auto] bg-no-repeat"
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      style={{
        "--spread": `${dynamicSpread}px`,
        backgroundImage:
          "linear-gradient(90deg,#0000 calc(50% - var(--spread)),#fff,#0000 calc(50% + var(--spread))), linear-gradient(#888,#888)",
      }}
    >
      {children} 
    </motion.span>
  );
}