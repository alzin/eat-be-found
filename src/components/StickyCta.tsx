import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { LineLink } from "@/components/LineCta";
import { LineIcon } from "@/components/LineIcon";
import { PhoneLink } from "@/components/PhoneCta";
import { cn } from "@/lib/utils";

/**
 * Mobile action bar.
 *
 * Two rules keep it from getting in the way: it stays hidden until the hero's
 * own buttons have scrolled off, and it retracts while the diagnosis form is on
 * screen so it never sits on top of that form's submit button.
 *
 * Only three actions fit above 320px, so the bar carries the two channels a
 * phone is actually good for — calling and LINE. Email stays one scroll away in
 * the closing CTA and the footer.
 */
export function StickyCta() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-actions");
    const form = document.getElementById("diagnosis");

    const update = () => {
      const pastHero = hero ? hero.getBoundingClientRect().bottom < 0 : window.scrollY > 480;
      const formOnScreen = form
        ? (() => {
            const r = form.getBoundingClientRect();
            return r.top < window.innerHeight * 0.85 && r.bottom > 0;
          })()
        : false;
      setShown(pastHero && !formOnScreen);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur transition-transform duration-300 lg:hidden",
        "p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
        shown ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!shown}
    >
      <div className="mx-auto flex max-w-md items-center gap-2.5">
        <Link
          to="/"
          hash="diagnosis"
          tabIndex={shown ? undefined : -1}
          className="btn btn-primary btn-sm min-h-12 flex-1 px-4"
        >
          今のHPを無料診断
        </Link>
        <LineLink
          label="LINEで相談する"
          tabIndex={shown ? undefined : -1}
          className="focus-ring grid min-h-12 min-w-12 place-items-center border border-line text-line transition-colors hover:bg-line hover:text-line-foreground"
        >
          <LineIcon className="size-5" />
        </LineLink>
        <PhoneLink
          tabIndex={shown ? undefined : -1}
          className="focus-ring grid min-h-12 min-w-12 place-items-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Phone className="size-5" aria-hidden="true" />
        </PhoneLink>
      </div>
    </div>
  );
}
