"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
};

type Pointer = {
  x: number;
  y: number;
  active: boolean;
};

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const pointer: Pointer = {
      x: 0,
      y: 0,
      active: false,
    };

    let points: Point[] = [];
    let width = 0;
    let height = 0;
    let animationFrame = 0;

    // CANVAS SETUP
    const createPoints = () => {
      const area = width * height;

      const count = Math.min(75, Math.max(20, Math.floor(area / 17000)));

      points = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;

        return {
          x,
          y,
          baseX: x,
          baseY: y,
        };
      });
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      createPoints();
      scheduleDraw();
    };

    // DRAWING
    const draw = () => {
      context.clearRect(0, 0, width, height);

      const styles = getComputedStyle(document.documentElement);

      const accent = styles.getPropertyValue("--accent").trim() || "#0f766e";

      const muted = styles.getPropertyValue("--muted").trim() || "#667478";

      const connectionDistance = 145;
      const interactionDistance = 180;

      points.forEach((point) => {
        if (pointer.active && !reducedMotion.matches) {
          const dx = pointer.x - point.baseX;
          const dy = pointer.y - point.baseY;

          const distance = Math.hypot(dx, dy);

          if (distance < interactionDistance) {
            const influence = (1 - distance / interactionDistance) * 13;

            point.x = point.baseX + (dx / (distance || 1)) * influence;

            point.y = point.baseY + (dy / (distance || 1)) * influence;
          } else {
            point.x = point.baseX;
            point.y = point.baseY;
          }
        } else {
          point.x = point.baseX;
          point.y = point.baseY;
        }
      });

      // CONNECTIONS
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const first = points[i];
          const second = points[j];

          const distance = Math.hypot(first.x - second.x, first.y - second.y);

          if (distance > connectionDistance) continue;

          const opacity = (1 - distance / connectionDistance) * 0.16;

          context.beginPath();
          context.moveTo(first.x, first.y);
          context.lineTo(second.x, second.y);

          context.strokeStyle = muted;
          context.globalAlpha = opacity;
          context.lineWidth = 1;

          context.stroke();
        }
      }

      context.globalAlpha = 1;

      // NODES
      points.forEach((point) => {
        const nearPointer =
          pointer.active &&
          Math.hypot(pointer.x - point.x, pointer.y - point.y) <
            interactionDistance;

        context.beginPath();

        context.arc(point.x, point.y, nearPointer ? 2.5 : 1.7, 0, Math.PI * 2);

        context.fillStyle = nearPointer ? accent : muted;

        context.globalAlpha = nearPointer ? 0.65 : 0.35;

        context.fill();
      });

      context.globalAlpha = 1;
    };

    const scheduleDraw = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(draw);
    };

    // POINTER EVENTS
    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotion.matches) return;

      const rect = canvas.getBoundingClientRect();

      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;

      scheduleDraw();
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      scheduleDraw();
    };

    const handleMotionChange = () => {
      pointer.active = false;
      scheduleDraw();
    };

    const observer = new MutationObserver(scheduleDraw);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const resizeObserver = new ResizeObserver(resizeCanvas);

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    canvas.addEventListener("pointermove", handlePointerMove);

    canvas.addEventListener("pointerleave", handlePointerLeave);

    reducedMotion.addEventListener("change", handleMotionChange);

    resizeCanvas();

    return () => {
      cancelAnimationFrame(animationFrame);

      canvas.removeEventListener("pointermove", handlePointerMove);

      canvas.removeEventListener("pointerleave", handlePointerLeave);

      reducedMotion.removeEventListener("change", handleMotionChange);

      resizeObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
