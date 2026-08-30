import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2.5">
        <Link
          to="/"
          hash="diagnosis"
          className="inline-flex min-h-12 flex-1 items-center justify-center bg-primary px-4 text-sm text-primary-foreground"
        >
          今のHPを無料診断
        </Link>
        <Link
          to="/"
          hash="contact"
          aria-label="まずは相談する"
          className="grid min-h-12 min-w-12 place-items-center border border-border text-foreground"
        >
          <Phone className="size-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
