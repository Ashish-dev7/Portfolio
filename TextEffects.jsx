import { useEffect, useState } from "react";
 
/* ------------------------------------------------------------------ */
/*  Text Scramble Pro                                                  */
/*  Code-style scramble reveal. React + Tailwind (core utilities only) */
/* ------------------------------------------------------------------ */
 
const GLYPHS = "01010101010000111110010010101";
const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
 
/** Returns, for each index, the order in which that character is revealed. */
function buildRanks(length, mode) {
  const ranks = Array.from({ length }, (_, i) => i);
  if (mode === "rtl") return ranks.map((i) => length - 1 - i);
  if (mode === "random") {
    // Fisher–Yates shuffle
    for (let i = ranks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ranks[i], ranks[j]] = [ranks[j], ranks[i]];
    }
  }
  return ranks;
}
 
/**
 * useScramble – drives the scramble animation.
 * mode: "ltr" | "rtl" | "random"
 */
function useScramble({
  text,
  mode,
  loop,
  duration,
  loopDelay,
  startDelay,
  respectReducedMotion,
}) {
  const [output, setOutput] = useState("");
 
  useEffect(() => {
    const reduceMotion =
      respectReducedMotion &&
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
 
    if (reduceMotion) {
      setOutput(text);
      return;
    }
 
    const chars = Array.from(text);
    const n = chars.length;
    let raf = 0;
    let timer = 0;
    let start = 0;
    let lastSwap = 0;
    let noise = chars.map(randomGlyph);
    let revealAt = [];
 
    const plan = () => {
      const ranks = buildRanks(n, mode);
      const spread = duration * 0.75;
      revealAt = ranks.map(
        (r) => (r / Math.max(n - 1, 1)) * spread + Math.random() * duration * 0.25
      );
    };
 
    const tick = (now) => {
      if (!start) start = now;
      const t = now - start;
 
      // Re-roll the noise glyphs ~25 times a second
      if (now - lastSwap > 40) {
        noise = chars.map(randomGlyph);
        lastSwap = now;
      }
 
      let complete = true;
      let next = "";
      for (let i = 0; i < n; i++) {
        if (chars[i] === " " || t >= revealAt[i]) {
          next += chars[i];
        } else {
          next += noise[i];
          complete = false;
        }
      }
      setOutput(next);
 
      if (!complete) {
        raf = requestAnimationFrame(tick);
      } else if (loop) {
        timer = window.setTimeout(run, loopDelay);
      }
    };
 
    function run() {
      start = 0;
      plan();
      raf = requestAnimationFrame(tick);
    }
 
    timer = window.setTimeout(run, startDelay);
 
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [text, mode, loop, duration, loopDelay, startDelay, respectReducedMotion]);
 
  return output;
}
 
/* ------------------------------------------------------------------ */
/*  The component                                                      */
/* ------------------------------------------------------------------ */
 
export function TextScramble({
  text = "Every detail has a purpose",
  mode = "random", // "ltr" | "rtl" | "random"
  loop = false,
  color = "#00e600",
  duration = 1600, // ms for the whole reveal
  loopDelay = 1800, // ms pause between loops
  cursor = true,
  startDelay = 0, // ms to wait before the first reveal (e.g. 1800 inside a delayed fade-in)
  respectReducedMotion = true, // set false to always animate, even if the OS asks to reduce motion
  as: Tag = "p", // use "span" or "div" when nested inside a <p>
  className = "",
}) {
  // Collapse newlines / indentation so multi-line JSX strings render cleanly
  const clean = text.replace(/\s+/g, " ").trim();
  const output = useScramble({
    text: clean,
    mode,
    loop,
    duration,
    loopDelay,
    startDelay,
    respectReducedMotion,
  });
 
  return (
    <>
      <style>{`
        @keyframes tsp-blink { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
        @media (prefers-reduced-motion: reduce) {
          .tsp-cursor { animation: none !important; }
        }
      `}</style>
 
      <Tag
        aria-label={clean}
        style={{ color }}
        className={`font-mono text-xl leading-snug tracking-widest sm:text-2xl ${className}`}
      >
        <span aria-hidden="true" className="whitespace-pre-wrap">
          {output}
        </span>
        {cursor && (
          <span
            aria-hidden="true"
            className="tsp-cursor ml-1 inline-block h-[1.1em] w-px translate-y-[0.2em] bg-current"
            style={{ animation: "tsp-blink 1s steps(1) infinite" }}
          />
        )}
      </Tag>
    </>
  );
}
 
/* ------------------------------------------------------------------ */
/*  Demo with the control panel (default export)                       */
/* ------------------------------------------------------------------ */
 
const MODES = [
  { id: "ltr", label: "L→R" },
  { id: "rtl", label: "R→L" },
  { id: "random", label: "RND" },
];
 
export default function TextScrambleDemo() {
  const [mode, setMode] = useState("random");
  const [loop, setLoop] = useState(false);
  const [color, setColor] = useState("#00e600");
 
  const labelClass =
    "text-[9px] font-semibold uppercase tracking-wider text-neutral-500";
 
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-black px-4 py-16">
      {/* key restarts the animation whenever a control changes */}
      <TextScramble
        key={`${mode}-${loop}`}
        text="Every detail has a purpose"
        mode={mode}
        loop={loop}
        color={color}
      />
 
      <div className="flex items-end gap-6 rounded-xl border border-white/5 bg-neutral-900/80 px-4 py-3">
        {/* Reveal mode */}
        <div className="flex flex-col items-center gap-2">
          <span className={labelClass}>Reveal mode</span>
          <div
            role="radiogroup"
            aria-label="Reveal mode"
            className="flex gap-1 rounded-lg bg-neutral-800 p-1"
          >
            {MODES.map((m) => (
              <button
                key={m.id}
                role="radio"
                aria-checked={mode === m.id}
                onClick={() => setMode(m.id)}
                className={`rounded-md px-2 py-1 text-[9px] font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                  mode === m.id
                    ? "bg-white text-black"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
 
        {/* Loop */}
        <div className="flex flex-col items-center gap-2">
          <span className={labelClass}>Loop</span>
          <button
            role="switch"
            aria-checked={loop}
            aria-label="Loop"
            onClick={() => setLoop((v) => !v)}
            className={`relative h-5 w-8 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
              loop ? "bg-green-500" : "bg-neutral-700"
            }`}
          >
            <span
              className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-neutral-200 transition-transform ${
                loop ? "translate-x-3" : "translate-x-0"
              }`}
            />
          </button>
        </div>
 
        {/* Text color */}
        <div className="flex flex-col items-center gap-2">
          <span className={labelClass}>Text color</span>
          <label className="relative block h-5 w-5 cursor-pointer overflow-hidden rounded-full focus-within:ring-2 focus-within:ring-white/60">
            <span
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: color }}
            />
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              aria-label="Text color"
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            />
          </label>
        </div>
      </div>
    </section>
  );
}
 