import { useRef, useEffect } from "react";

export default function Hero() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const starsRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // CSS-pixel drawing size (separate from backing store size)
        let W = 0;
        let H = 0;
        let DPR = 1;

        // --- stars --------------------------------------------------------------
        function generateStars(count = 1000) {
            const stars = [];
            for (let i = 0; i < count; i++) {
                const base = Math.random() * 0.7 + 0.3;
                stars.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    size: i < count * 0.85 ? Math.random() * 1.6 : Math.random() * 2 + 1,
                    baseOpacity: base,
                    opacity: base,
                    speed: 0.004 + Math.random() * 0.012, // stable twinkle speed
                    twinkleDirection: Math.random() > 0.5 ? 1 : -1,
                });
            }
            return stars;
        }

        // --- background (like your HTML body radial gradient) -------------------
        function drawBackground() {
            const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.75);
            g.addColorStop(0, "rgba(0,0,0,1)");
            g.addColorStop(1, "rgba(26,26,26,1)");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, W, H);
        }

        // --- black hole positioning (same as your current version) --------------
        const blackHole = {
            x: () => W * 0.65,
            y: () => H * 0.45,
            r: () => Math.min(W, H) * 0.25, // tweak if you want bigger/smaller
        };

        // Optional: mild lensing of stars near hole
        function lensWarp(px, py, cx, cy, lensRadius, strength = 0.35) {
            const dx = px - cx;
            const dy = py - cy;
            const d = Math.hypot(dx, dy);
            if (d <= 1 || d > lensRadius) return { x: px, y: py };

            const t = 1 - d / lensRadius;
            const s = strength * t * t;
            const tx = -dy / d;
            const ty = dx / d;

            return {
                x: px + tx * (s * lensRadius * 0.25) - (dx / d) * (s * 2.0),
                y: py + ty * (s * lensRadius * 0.25) - (dy / d) * (s * 2.0),
            };
        }

        // --- CSS-like purple shadow (wave-color-motion) -------------------------
        function drawPurpleShadow(tSec, cx, cy, r) {
            // 5s cycle like your CSS
            const wave = (Math.sin((tSec * 2 * Math.PI) / 5) + 1) / 2; // 0..1
            const scale = 1 + 0.2 * wave; // 1..1.2
            const innerAlpha = 0.2 + 0.4 * wave; // 0.2..0.6
            const innerRGB = 128 + Math.round(72 * wave); // ~128..200

            const shadowR = r * 2.25 * scale; // 450px vs 200px diameter => ~2.25x radius
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, shadowR);

            grad.addColorStop(0, `rgba(${innerRGB},0,${innerRGB},${innerAlpha})`);
            grad.addColorStop(0.7, "rgba(128,0,128,0)");
            grad.addColorStop(1, "rgba(0,0,0,0)");

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(cx, cy, shadowR, 0, Math.PI * 2);
            ctx.fill();
        }

        // --- CSS-like neon glow (neon-glow) -------------------------------------
        function drawNeonGlow(tSec, cx, cy, r) {
            // 3s pulse like your CSS
            const pulse = (Math.sin((tSec * 2 * Math.PI) / 3) + 1) / 2; // 0..1

            const layers = [
                // pink
                { rgb: [255, 105, 180], a: 0.18 + 0.10 * pulse, inner: r * 1.0, outer: r * (1.55 + 0.20 * pulse) },
                // purple
                { rgb: [128, 0, 128], a: 0.14 + 0.10 * pulse, inner: r * 1.1, outer: r * (2.05 + 0.30 * pulse) },
                // blue
                { rgb: [0, 120, 255], a: 0.10 + 0.08 * pulse, inner: r * 1.2, outer: r * (2.70 + 0.35 * pulse) },
            ];

            for (const L of layers) {
                const g = ctx.createRadialGradient(cx, cy, L.inner, cx, cy, L.outer);
                g.addColorStop(0, `rgba(${L.rgb[0]},${L.rgb[1]},${L.rgb[2]},${L.a})`);
                g.addColorStop(1, "rgba(0,0,0,0)");
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(cx, cy, L.outer, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // --- black hole (NO SPIN) -----------------------------------------------
        function drawBlackHole(tSec, cx, cy, r) {
            // Match your DOM layout: purple shadow is centered a bit below the hole
            drawPurpleShadow(tSec, cx, cy + 0.75 * r, r);
            drawNeonGlow(tSec, cx, cy, r);

            // Hole body
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.fill();

            // faint rim hint (optional)
            ctx.strokeStyle = "rgba(255,255,255,0.05)";
            ctx.lineWidth = Math.max(1, r * 0.05);
            ctx.beginPath();
            ctx.arc(cx, cy, r * 1.02, 0, Math.PI * 2);
            ctx.stroke();
        }

        // --- jets (polar cones) -------------------------------------------------
        function drawJets(tSec, cx, cy, r) {
            // Gentle breathing so the jets feel alive
            const pulse = (Math.sin((tSec * 2 * Math.PI) / 2.5) + 1) / 2; // 0..1

            const length = r * (3.2 + 0.4 * pulse);
            const baseW = r * 0.05;
            const tipW = r * 0.55;

            const alphaOuter = 0.18 + 0.12 * pulse;
            const alphaInner = 0.35 + 0.25 * pulse;

            const drawCone = (baseY, dir) => {
                const tipY = baseY + dir * length;

                ctx.save();
                ctx.globalCompositeOperation = "screen"; // bright additive look

                // Outer glow cone
                ctx.shadowBlur = r * 0.25;
                ctx.shadowColor = `rgba(255,255,255,${alphaOuter})`;

                const g = ctx.createLinearGradient(cx, baseY, cx, tipY);
                g.addColorStop(0, `rgba(255,255,255,${alphaOuter})`);
                g.addColorStop(0.55, `rgba(255,255,255,${alphaOuter * 0.35})`);
                g.addColorStop(1, "rgba(255,255,255,0)");

                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.moveTo(cx - baseW, baseY);
                ctx.lineTo(cx + baseW, baseY);
                ctx.lineTo(cx + tipW, tipY);
                ctx.lineTo(cx - tipW, tipY);
                ctx.closePath();
                ctx.fill();

                // Inner bright core
                const coreW = baseW * 0.22;
                const coreTipW = tipW * 0.5;

                const g2 = ctx.createLinearGradient(cx, baseY, cx, tipY);
                g2.addColorStop(0, `rgba(255,255,255,${alphaInner})`);
                g2.addColorStop(0.35, `rgba(255,255,255,${alphaInner * 0.6})`);
                g2.addColorStop(1, "rgba(255,255,255,0)");

                ctx.shadowBlur = r * 0.15;
                ctx.shadowColor = `rgba(255,255,255,${alphaInner})`;

                ctx.fillStyle = g2;
                ctx.beginPath();
                ctx.moveTo(cx - coreW, baseY);
                ctx.lineTo(cx + coreW, baseY);
                ctx.lineTo(cx + coreTipW, tipY);
                ctx.lineTo(cx - coreTipW, tipY);
                ctx.closePath();
                ctx.fill();

                ctx.restore();
            };

            // Start right at the "polar regions" (just above/below the rim)
            drawCone(cy - r * 0.92, -1); // north jet
            drawCone(cy + r * 0.92,  1); // south jet
        }

        // --- resize -------------------------------------------------------------
        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            W = rect.width;
            H = rect.height;
            DPR = window.devicePixelRatio || 1;

            canvas.width = Math.max(1, Math.floor(W * DPR));
            canvas.height = Math.max(1, Math.floor(H * DPR));

            // Draw in CSS pixels, scale backing store for sharpness
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

            starsRef.current = generateStars(200);
        };

        // --- animation loop -----------------------------------------------------
        function animateStars() {
            const tSec = performance.now() / 1000;

            drawBackground();

            const cx = blackHole.x();
            const cy = blackHole.y();
            const r = blackHole.r();
            const lensRadius = r * 6.0;

            // Stars first (behind)
            starsRef.current.forEach((star) => {
                star.opacity += star.speed * star.twinkleDirection;
                if (star.opacity <= 0.1 || star.opacity >= star.baseOpacity + 0.3) {
                    star.twinkleDirection *= -1;
                }

                const warped = lensWarp(star.x, star.y, cx, cy, lensRadius, 0.45);

                // Your original HTML stars were purple
                ctx.fillStyle = `rgba(170, 0, 170, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(warped.x, warped.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Black hole on top
            drawJets(tSec, cx, cy, r);
            drawBlackHole(tSec, cx, cy, r);

            animationRef.current = requestAnimationFrame(animateStars);
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        animateStars();

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <div className="relative bg-slate-900 py-24 sm:py-48 overflow-hidden my-20">
            {/* Canvas draws background + stars + black hole */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
                <h1 className="text-3xl font-medium text-white sm:text-4xl mb-6">
                    Active Galactic Nuclei Database
                </h1>
                <p className="mt-2 mb-8 text-base text-slate-300 sm:text-lg max-w-2xl mx-auto">
                    Comprehensive catalog of confirmed active galactic nuclei sources
                </p>
            </div>
        </div>
    );
}
