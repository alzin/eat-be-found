import { cn } from "@/lib/utils";

/**
 * LINE's speech-bubble mark.
 *
 * Drawn as a silhouette rather than the full logotype: at 16–20px the enclosed
 * "LINE" lettering of the official mark turns to mush, and the label beside it
 * already carries the name.
 */
export function LineIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("size-4", className)}
    >
      <path d="M12 2.4c-5.35 0-9.7 3.53-9.7 7.87 0 3.89 3.45 7.15 8.11 7.77.32.07.75.21.86.48.1.25.06.63.03.88l-.14.83c-.4.25-.2.96.84.52 1.04-.44 5.6-3.3 7.64-5.65 1.4-1.54 2.06-3.11 2.06-4.83 0-4.34-4.35-7.87-9.7-7.87Z" />
    </svg>
  );
}
