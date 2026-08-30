import { Phone } from "lucide-react";
import type { ReactNode } from "react";

import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  children?: ReactNode;
  className?: string;
  /** Overrides the label for icon-only buttons, where children are omitted. */
  label?: string;
  tabIndex?: number | undefined;
};

/**
 * Link to the phone line.
 *
 * The accessible name always spells out what the link does, because the visible
 * label is often just the number — "03-1234-5678" on its own tells a screen
 * reader user nothing about where it leads.
 */
export function PhoneLink({ children, className, label, tabIndex }: Props) {
  return (
    <a
      href={PHONE_HREF}
      className={className}
      aria-label={label ?? `電話で相談する ${PHONE_DISPLAY}`}
      {...(tabIndex === undefined ? {} : { tabIndex })}
    >
      {children}
    </a>
  );
}

/** Outlined button showing the number itself — the number is the trust signal. */
export function PhoneButton({ children, className, tabIndex }: Props) {
  return (
    <PhoneLink className={cn("btn btn-outline", className)} tabIndex={tabIndex}>
      <Phone className="size-[1.05em]" aria-hidden="true" />
      {children ?? <span className="tabular-nums">{PHONE_DISPLAY}</span>}
    </PhoneLink>
  );
}
