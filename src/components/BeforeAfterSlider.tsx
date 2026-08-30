import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

import { Picture } from "@/components/Picture";
import { cn } from "@/lib/utils";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** Rendered width per breakpoint, forwarded to the images' `sizes`. */
  sizes?: string | undefined;
  beforeLabel?: string | undefined;
  afterLabel?: string | undefined;
  className?: string | undefined;
  priority?: boolean | undefined;
};

const STEP = 4;
const BIG_STEP = 20;

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  sizes = "(min-width: 1024px) 40rem, 100vw",
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  className,
  priority = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(52);
  const [dragging, setDragging] = useState(false);
  const [hinted, setHinted] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (event: PointerEvent) => {
      event.preventDefault();
      updateFromClientX(event.clientX);
    };
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [dragging, updateFromClientX]);

  // Nudge the handle once when the slider first scrolls into view so the
  // comparison reads as draggable without a caption having to say so.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        setHinted(true);
        window.setTimeout(() => setHinted(false), 1400);
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const nudge = (delta: number) => setPosition((p) => Math.min(100, Math.max(0, p + delta)));

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label={`${beforeAlt} と ${afterAlt} の比較`}
      className={cn(
        "relative aspect-4/3 w-full touch-pan-y overflow-hidden bg-sumi select-none sm:aspect-16/10",
        dragging && "cursor-ew-resize",
        className,
      )}
      onPointerDown={(event) => {
        updateFromClientX(event.clientX);
        setDragging(true);
      }}
    >
      <Picture
        src={afterSrc}
        alt={afterAlt}
        sizes={sizes}
        priority={priority}
        draggable={false}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Picture
          src={beforeSrc}
          alt={beforeAlt}
          sizes={sizes}
          priority={priority}
          draggable={false}
          className="size-full object-cover"
        />
      </div>

      <span className="pointer-events-none absolute top-3 left-3 bg-sumi/85 px-2.5 py-1 text-[0.65rem] tracking-[0.22em] text-ink-foreground backdrop-blur-[2px] sm:text-[0.7rem]">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute top-3 right-3 bg-primary/95 px-2.5 py-1 text-[0.65rem] tracking-[0.22em] text-primary-foreground sm:text-[0.7rem]">
        {afterLabel}
      </span>

      {/* Two stacked rules: a dark halo keeps the divider legible over both a
          bright plate and a dark interior shot. */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-background/95 shadow-[0_0_0_1px_oklch(0.26_0.012_50/0.35)]"
        style={{ left: `${position}%` }}
      />
      <button
        type="button"
        role="slider"
        tabIndex={0}
        aria-label="ビフォーアフターの比較スライダー"
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`リニューアル前を ${Math.round(position)}% 表示`}
        className={cn(
          "focus-ring absolute top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-background text-foreground shadow-lg ring-1 ring-border transition-transform",
          dragging ? "scale-105" : "hover:scale-105",
          hinted && "motion-safe:animate-pulse",
        )}
        style={{ left: `${position}%` }}
        onPointerDown={(event) => {
          event.stopPropagation();
          setDragging(true);
        }}
        onKeyDown={(event) => {
          const keys: Record<string, number> = {
            ArrowLeft: -STEP,
            ArrowRight: STEP,
            PageDown: -BIG_STEP,
            PageUp: BIG_STEP,
          };
          if (event.key in keys) {
            event.preventDefault();
            nudge(keys[event.key]!);
          } else if (event.key === "Home") {
            event.preventDefault();
            setPosition(0);
          } else if (event.key === "End") {
            event.preventDefault();
            setPosition(100);
          }
        }}
      >
        <MoveHorizontal className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
