"use client";

import { useEffect, useRef } from "react";

// Small, transparent interpretation of the shared ice/plasma ASCII star.
const CHARACTERS = ".,:;+=xX%#@";
const SIZE = 180;

export default function AsciiStar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = SIZE * ratio;
    canvas.height = SIZE * ratio;
    context.scale(ratio, ratio);
    context.font = '5px "Courier New", monospace';
    context.textAlign = "center";
    context.textBaseline = "middle";

    const outline = new Path2D();
    for (let point = 0; point < 10; point++) {
      const angle = -Math.PI / 2 + point * Math.PI / 5;
      const radius = point % 2 === 0 ? 84 : 36;
      const x = SIZE / 2 + Math.cos(angle) * radius;
      const y = SIZE / 2 + Math.sin(angle) * radius;
      if (point === 0) outline.moveTo(x, y);
      else outline.lineTo(x, y);
    }
    outline.closePath();

    // Sample the shape once; only the characters and their light move.
    const cells: { x: number; y: number }[] = [];
    context.save();
    context.resetTransform();
    for (let y = 4; y < SIZE; y += 5) {
      for (let x = 3; x < SIZE; x += 3.5) {
        if (context.isPointInPath(outline, x, y)) cells.push({ x, y });
      }
    }
    context.restore();

    let frame = 0;
    let lastPaint = -Infinity;
    let time = 0;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const draw = (now: number) => {
      frame = requestAnimationFrame(draw);
      if (!visible || document.hidden || now - lastPaint < 1000 / 24) return;
      time += Math.min((now - lastPaint) / 1000, 1 / 24) * 1.9;
      lastPaint = now;
      context.clearRect(0, 0, SIZE, SIZE);
      for (const { x, y } of cells) {
        const wave = (
          Math.sin(x * 0.075 + time) +
          Math.sin(y * 0.09 - time * 1.3) +
          Math.sin(Math.hypot(x - 90, y - 90) * 0.11 - time * 1.7)
        ) / 3;
        const light = Math.max(0, Math.min(1, 0.5 + wave * 1.1));
        const character = CHARACTERS[Math.floor(light * (CHARACTERS.length - 1))];
        context.fillStyle = `rgba(${100 + Math.round(light * 85)}, ${165 + Math.round(light * 65)}, 255, ${0.25 + light * 0.65})`;
        context.fillText(character, x, y);
      }
    };
    draw(performance.now());

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[3.8em] w-[3.8em] -translate-x-1/2 -translate-y-1/2 opacity-70"
    />
  );
}
