import type { ReactNode } from "react";

import { LineIcon } from "@/components/LineIcon";
import { LINE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  children?: ReactNode;
  className?: string;
  /** Overrides the label for icon-only buttons, where children are omitted. */
  label?: string;
  tabIndex?: number | undefined;
};

/**
 * Link to the LINE official account.
 *
 * Centralised so the external-link attributes and the "opens in LINE" hint stay
 * identical everywhere — the account is reached from the header, the action
 * bar, the form, the closing CTA and the footer.
 */
export function LineLink({ children, className, label, tabIndex }: Props) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...(label ? { "aria-label": label } : {})}
      {...(tabIndex === undefined ? {} : { tabIndex })}
    >
      {children}
    </a>
  );
}

/** Filled LINE-green button. */
export function LineButton({ children, className, tabIndex }: Props) {
  return (
    <LineLink className={cn("btn btn-line", className)} tabIndex={tabIndex}>
      <LineIcon className="size-[1.15em]" />
      {children ?? "LINEで相談する"}
    </LineLink>
  );
}
