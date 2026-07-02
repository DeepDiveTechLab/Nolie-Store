import React, { useEffect, useRef } from 'react';
import { HERO_FRAME_COUNT, heroFrameUrl } from '../../lib/hero-frames';

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number
) {
  const imgRatio = img.width / img.height;
  const canvasRatio = canvasWidth / canvasHeight;
  let drawWidth: number;
  let drawHeight: number;
  let offsetX = 0;
  let offsetY = 0;

  if (imgRatio > canvasRatio) {
    drawHeight = canvasHeight;
    drawWidth = drawHeight * imgRatio;
    offsetX = (canvasWidth - drawWidth) / 2;
  } else {
    drawWidth = canvasWidth;
    drawHeight = drawWidth / imgRatio;
    offsetY = (canvasHeight - drawHeight) / 2;
  }
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

const HeroFlowerCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(0);
  const currentIndexRef = useRef<number>(0);
  const readyRef = useRef<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let cancelled = false;
    const images: HTMLImageElement[] = new Array(HERO_FRAME_COUNT);
    let loadedCount = 0;

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas!.getBoundingClientRect();
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
      }
    }

    function drawCurrentFrame() {
      const img = images[currentIndexRef.current];
      if (img && img.complete && img.naturalWidth > 0) {
        drawCover(ctx!, img, canvas!.width, canvas!.height);
      }
    }

    function tick(time: number) {
      if (cancelled) return;
      if (readyRef.current && !prefersReducedMotion) {
        const frameDuration = 1000 / 15;
        if (time - lastFrameTimeRef.current >= frameDuration) {
          lastFrameTimeRef.current = time;
          currentIndexRef.current =
            (currentIndexRef.current + 1) % HERO_FRAME_COUNT;
          drawCurrentFrame();
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < HERO_FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        loadedCount++;
        if (i === 0) {
          drawCurrentFrame();
        }
        if (loadedCount === HERO_FRAME_COUNT) {
          readyRef.current = true;
        }
      };
      img.src = heroFrameUrl(i + 1);
      images[i] = img;
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
};

export default HeroFlowerCanvas;
