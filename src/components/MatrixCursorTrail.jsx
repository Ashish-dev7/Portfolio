import { useEffect, useRef } from "react"

/**
 * MatrixCursorTrail
 * Drop it anywhere in your app. It draws a full-screen, click-through canvas
 * and leaves a trail of falling green "Matrix" glyphs behind the cursor.
 * No dependencies besides React.
 */
export default function MatrixCursorTrail({
    color = "#00ff41", // trail color
    headColor = "#e0ffe8", // freshly-spawned glyph color
    fontSize = 18,
    lifetime = 1100, // ms before a glyph fully fades
    fallSpeed = 0.7, // px per frame drift downward
    glow = 8, // glow blur radius (0 to disable)
    flicker = 0.08, // chance per frame a glyph swaps character
    characters = "01010101010101001010101101010010110110010101010",
    zIndex = 9999,
}) {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return
        const glyphs = characters.split("")
        const rand = () => glyphs[(Math.random() * glyphs.length) | 0]

        let w = 0
        let h = 0
        let dpr = 1
        const resize = () => {
            dpr = window.devicePixelRatio || 1
            w = window.innerWidth
            h = window.innerHeight
            canvas.width = w * dpr
            canvas.height = h * dpr
            canvas.style.width = w + "px"
            canvas.style.height = h + "px"
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }
        resize()
        window.addEventListener("resize", resize)

        const particles = []
        let lastCell = ""

        const spawn = (x, y) => {
            // snap to a grid so it looks like Matrix columns
            const cx = Math.floor(x / fontSize) * fontSize + fontSize / 2
            const cy = Math.floor(y / fontSize) * fontSize + fontSize / 2
            const key = cx + ":" + cy
            if (key === lastCell) return
            lastCell = key
            particles.push({
                x: cx,
                y: cy,
                ch: rand(),
                born: performance.now(),
                speed: fallSpeed * (0.6 + Math.random() * 0.8),
            })
        }

        const onMove = (e) => {
            const x = e.clientX
            const y = e.clientY
            // fill gaps when the mouse moves fast
            if (onMove.px !== undefined) {
                const dx = x - onMove.px
                const dy = y - onMove.py
                const dist = Math.hypot(dx, dy)
                const steps = Math.max(1, Math.floor(dist / fontSize))
                for (let i = 1; i <= steps; i++) {
                    spawn(onMove.px + (dx * i) / steps, onMove.py + (dy * i) / steps)
                }
            } else {
                spawn(x, y)
            }
            onMove.px = x
            onMove.py = y
        }
        window.addEventListener("pointermove", onMove)

        let raf
        const draw = (now) => {
            ctx.clearRect(0, 0, w, h)
            ctx.font = `${fontSize}px monospace`
            ctx.textAlign = "center"
            ctx.textBaseline = "middle"

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i]
                const age = now - p.born
                if (age > lifetime) {
                    particles.splice(i, 1)
                    continue
                }
                p.y += p.speed
                if (Math.random() < flicker) p.ch = rand()

                const alpha = Math.pow(1 - age / lifetime, 1.5)
                const isHead = age < 90
                ctx.globalAlpha = alpha
                ctx.fillStyle = isHead ? headColor : color
                ctx.shadowColor = color
                ctx.shadowBlur = glow
                ctx.fillText(p.ch, p.x, p.y)
            }
            ctx.globalAlpha = 1
            ctx.shadowBlur = 0
            raf = requestAnimationFrame(draw)
        }
        raf = requestAnimationFrame(draw)

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener("resize", resize)
            window.removeEventListener("pointermove", onMove)
        }
    }, [color, headColor, fontSize, lifetime, fallSpeed, glow, flicker, characters])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex,
            }}
        />
    )
}

/* ---- Optional: use as a Framer code component ----
import { addPropertyControls, ControlType } from "framer"

addPropertyControls(MatrixCursorTrail, {
    color: { type: ControlType.Color, defaultValue: "#00ff41" },
    headColor: { type: ControlType.Color, defaultValue: "#e0ffe8" },
    fontSize: { type: ControlType.Number, min: 8, max: 48, defaultValue: 18 },
    lifetime: { type: ControlType.Number, min: 200, max: 3000, defaultValue: 1100 },
    fallSpeed: { type: ControlType.Number, min: 0, max: 3, step: 0.1, defaultValue: 0.7 },
    glow: { type: ControlType.Number, min: 0, max: 30, defaultValue: 8 },
})
*/
