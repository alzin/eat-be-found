import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = "light",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  tone?: "light" | "ink" | "muted";
  className?: string;
}) {
  const toneClass =
    tone === "ink"
      ? "bg-ink text-ink-foreground"
      : tone === "muted"
        ? "bg-secondary text-foreground"
        : "bg-background text-foreground";

  return (
    <section
      id={id}
      className={cn("scroll-mt-20 px-5 py-20 md:px-8 md:py-28", toneClass, className)}
    >
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || lead) && (
          <Reveal className="max-w-3xl">
            {eyebrow ? (
              <p
                className={cn(
                  "text-xs tracking-[0.28em]",
                  tone === "ink" ? "text-kohaku" : "text-primary",
                )}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mt-4 font-mincho text-[1.75rem] leading-[1.35] md:text-[2.6rem]">
                {title}
              </h2>
            ) : null}
            {lead ? (
              <p
                className={cn(
                  "mt-5 text-sm leading-relaxed md:text-base",
                  tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
                )}
              >
                {lead}
              </p>
            ) : null}
          </Reveal>
        )}
        <div className={cn(eyebrow || title || lead ? "mt-12 md:mt-16" : undefined)}>
          {children}
        </div>
      </div>
    </section>
  );
}
