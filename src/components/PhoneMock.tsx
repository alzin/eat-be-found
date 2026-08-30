import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PhoneMock({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <figure className={cn("mx-auto w-full max-w-[17rem]", className)}>
      <div className="rounded-[2.25rem] border border-ink-border bg-sumi p-2.5 shadow-2xl">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.75rem] bg-background">
          <span className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-sumi/30" />
          {children}
        </div>
      </div>
      {label ? (
        <figcaption className="mt-3 text-center text-xs tracking-[0.16em] text-muted-foreground">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
