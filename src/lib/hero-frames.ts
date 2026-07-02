export const HERO_FRAME_COUNT = 76;

export function heroFrameUrl(index: number): string {
  const n = Math.min(Math.max(index, 1), HERO_FRAME_COUNT);
  return `/frames-hero/frame-${String(n).padStart(4, '0')}.webp`;
}
