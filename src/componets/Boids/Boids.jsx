import { useEffect, useRef } from 'react';

const COLORS = [
  { r: 30, g: 208, b: 124 },
  { r: 25, g: 184, b: 105 },
  { r: 60, g: 220, b: 150 },
  { r: 255, g: 255, b: 255 },
  { r: 200, g: 210, b: 220 },
];

function createBoid(w, h) {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const sizeRand = Math.random();
  let r;
  if (sizeRand < 0.35) {
    r = 0.8 + Math.random() * 1.2;
  } else if (sizeRand < 0.7) {
    r = 2 + Math.random() * 2.5;
  } else if (sizeRand < 0.9) {
    r = 4.5 + Math.random() * 2.5;
  } else {
    r = 7 + Math.random() * 3;
  }

  const baseSpeed = 0.15 + Math.random() * 0.35;
  const angle = Math.random() * Math.PI * 2;

  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * baseSpeed,
    vy: Math.sin(angle) * baseSpeed,
    r,
    opacity: 0.06 + Math.random() * 0.18,
    color,
    drift: 0.002 + Math.random() * 0.006,
  };
}

export default function Boids({ count = 45 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let boids = [];

    function resize() {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    }

    function init() {
      resize();
      boids = Array.from({ length: count }, () => createBoid(canvas.width, canvas.height));
    }

    function update() {
      const w = canvas.width;
      const h = canvas.height;
      const perception = 100;
      const maxSpeed = 0.55;
      const sepDist = 30;

      for (let i = 0; i < boids.length; i++) {
        const b = boids[i];
        let avgVx = 0, avgVy = 0, avgX = 0, avgY = 0, sepX = 0, sepY = 0;
        let neighbors = 0;

        for (let j = 0; j < boids.length; j++) {
          if (i === j) continue;
          const o = boids[j];
          const dx = o.x - b.x;
          const dy = o.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < perception) {
            avgVx += o.vx;
            avgVy += o.vy;
            avgX += o.x;
            avgY += o.y;
            neighbors++;
            if (dist < sepDist && dist > 0) {
              sepX -= dx / dist;
              sepY -= dy / dist;
            }
          }
        }

        if (neighbors > 0) {
          b.vx += (avgVx / neighbors - b.vx) * 0.008;
          b.vy += (avgVy / neighbors - b.vy) * 0.008;
          b.vx += (avgX / neighbors - b.x) * 0.0003;
          b.vy += (avgY / neighbors - b.y) * 0.0003;
          b.vx += sepX * 0.03;
          b.vy += sepY * 0.03;
        }

        b.vx += (Math.random() - 0.5) * b.drift;
        b.vy += (Math.random() - 0.5) * b.drift;

        const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        if (speed > maxSpeed) {
          b.vx = (b.vx / speed) * maxSpeed;
          b.vy = (b.vy / speed) * maxSpeed;
        }

        b.x += b.vx;
        b.y += b.vy;

        if (b.x < -10) b.x = w + 10;
        if (b.x > w + 10) b.x = -10;
        if (b.y < -10) b.y = h + 10;
        if (b.y > h + 10) b.y = -10;
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const b of boids) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${b.color.r},${b.color.g},${b.color.b},${b.opacity})`;
        ctx.fill();
      }
    }

    function loop() {
      update();
      draw();
      raf = requestAnimationFrame(loop);
    }

    init();
    loop();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
