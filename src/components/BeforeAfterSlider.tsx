import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string | undefined;
  afterLabel?: string | undefined;
  className?: string | undefined;
  priority?: boolean | undefined;
};


export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  className,
  priority = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(52);
  const [dragging, setDragging] = useState(false);

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

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[4/3] w-full touch-pan-y overflow-hidden bg-sumi select-none sm:aspect-[16/10]",
        className,
      )}
      onPointerDown={(event) => {
        updateFromClientX(event.clientX);
        setDragging(true);
      }}
    >
      <img
        src={afterSrc}
        alt={afterAlt}
        width={1280}
        height={912}
        loading={priority ? "eager" : "lazy"}
        draggable={false}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          width={1280}
          height={912}
          loading={priority ? "eager" : "lazy"}
          draggable={false}
          className="size-full object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 bg-sumi/80 px-2.5 py-1 text-[0.7rem] tracking-[0.22em] text-ink-foreground">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 bg-primary/90 px-2.5 py-1 text-[0.7rem] tracking-[0.22em] text-primary-foreground">
        {afterLabel}
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-background/90"
        style={{ left: `${position}%` }}
      />
      <button
        type="button"
        role="slider"
        aria-label="ビフォーアフターの比較スライダー"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`ビフォー ${Math.round(position)}%`}
        className="absolute top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-background text-foreground shadow-lg ring-1 ring-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        style={{ left: `${position}%` }}
        onPointerDown={(event) => {
          event.stopPropagation();
          setDragging(true);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            setPosition((p) => Math.max(0, p - 4));
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            setPosition((p) => Math.min(100, p + 4));
          }
        }}
      >
        <MoveHorizontal className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
