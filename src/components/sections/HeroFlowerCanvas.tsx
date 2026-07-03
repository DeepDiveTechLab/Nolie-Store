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

interface HeroFlowerCanvasProps {
  /** Ref to the outer scroll-height wrapper that defines the scrub range */
  scrollRangeRef: React.RefObject<HTMLDivElement>;
  className?: string;
}

const HeroFlowerCanvas: React.FC<HeroFlowerCanvasProps> = ({ scrollRangeRef, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const currentIndexRef = useRef<number>(-1);

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
    let loadedFirst = false;

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas!.getBoundingClientRect();
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
        currentIndexRef.current = -1;
      }
    }

    function drawFrame(index: number) {
      const img = images[index];
      if (img && img.complete && img.naturalWidth > 0) {
        drawCover(ctx!, img, canvas!.width, canvas!.height);
      }
    }

    function getScrollProgress(): number {
      const wrapper = scrollRangeRef.current;
      if (!wrapper) return 0;
      const rect = wrapper.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return 0;
      const scrolled = -rect.top;
      return Math.max(0, Math.min(1, scrolled / scrollableDistance));
    }

    function tick() {
      if (cancelled) return;
      if (loadedFirst) {
        const progress = prefersReducedMotion ? 0 : getScrollProgress();
        const index = Math.min(
          HERO_FRAME_COUNT - 1,
          Math.floor(progress * HERO_FRAME_COUNT)
        );
        if (index !== currentIndexRef.current) {
          currentIndexRef.current = index;
          drawFrame(index);
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
        if (i === 0) {
          loadedFirst = true;
          drawFrame(0);
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
  }, [scrollRangeRef]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
};

export default HeroFlowerCanvas;
