import { webpSrcSet } from "@/lib/images";
import { cn } from "@/lib/utils";

type Props = {
  /** JPEG imported from `src/assets`; the WebP ladder is derived from it. */
  src: string;
  alt: string;
  /** Rendered width per breakpoint, e.g. "(min-width: 1024px) 40rem, 100vw". */
  sizes: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  draggable?: boolean;
};

/**
 * Photo with a WebP srcset and a JPEG fallback.
 *
 * The sources are 1280px wide but most slots render at 335–600 CSS px, so
 * serving the full JPEG everywhere cost roughly 5× the bytes it needed to.
 */
export function Picture({
  src,
  alt,
  sizes,
  width = 1280,
  height = 912,
  priority = false,
  className,
  draggable,
}: Props) {
  const srcSet = webpSrcSet(src);

  return (
    <picture>
      {srcSet ? <source type="image/webp" srcSet={srcSet} sizes={sizes} /> : null}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        draggable={draggable}
        className={cn("bg-secondary", className)}
      />
    </picture>
  );
}
