import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

import { LineButton } from "@/components/LineCta";
import { PhoneButton, PhoneLink } from "@/components/PhoneCta";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useActiveSection, useScrollProgress, useScrolled } from "@/hooks/useScrollState";
import { PHONE_DISPLAY, PHONE_HOURS } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { label: "サービス", to: "/", hash: "services" },
  { label: "Before / After", to: "/", hash: "before-after" },
  { label: "MEO運用", to: "/services/meo", hash: undefined },
  { label: "事例", to: "/", hash: "cases" },
  { label: "料金", to: "/", hash: "pricing" },
  { label: "FAQ", to: "/", hash: "faq" },
] as const;

const sectionIds: readonly string[] = nav.flatMap((item) => (item.hash ? [item.hash] : []));

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);
  const progress = useScrollProgress();
  const onHome = useRouterState({ select: (s) => s.location.pathname === "/" });
  const activeSection = useActiveSection(sectionIds);

  const isActive = (item: (typeof nav)[number]) => {
    if (item.hash) return onHome && activeSection === item.hash;
    return !onHome;
  };

  return (
    <header
      data-scrolled={scrolled ? "true" : "false"}
      className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur transition-shadow data-[scrolled=true]:shadow-[0_1px_16px_oklch(0.215_0.014_55/0.08)]"
    >
      <div
        className={cn(
          "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-[padding] duration-300 md:px-8",
          scrolled ? "py-2.5" : "py-3.5",
        )}
      >
        <Link
          to="/"
          className="focus-ring flex min-w-0 items-center gap-2.5 py-1"
          aria-label="膳 Web ホームへ"
        >
          <span
            className={cn(
              "grid shrink-0 place-items-center bg-sumi font-mincho text-ink-foreground transition-all duration-300",
              scrolled ? "size-8 text-base" : "size-9 text-lg",
            )}
            aria-hidden="true"
          >
            膳
          </span>
          <span className="min-w-0">
            <span className="block truncate font-mincho text-base leading-tight">
              膳 Web <span className="text-muted-foreground">/</span> 飲食店専門
            </span>
            <span className="block truncate text-[0.65rem] tracking-[0.2em] text-muted-foreground">
              WEB RENEWAL &amp; MEO
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="メインナビゲーション">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              aria-current={isActive(item) ? "true" : undefined}
              className={cn(
                "focus-ring relative px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                "after:absolute after:inset-x-3 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100",
                isActive(item) && "text-foreground after:scale-x-100",
              )}
            >
              {item.label}
            </Link>
          ))}
          {/* Shown from xl only: below that the six nav items and the CTA
              already fill the row. */}
          <PhoneLink className="focus-ring ml-3 hidden flex-col items-end leading-tight xl:flex">
            <span className="flex items-center gap-1.5 font-mincho text-base text-foreground tabular-nums">
              <Phone className="size-3.5 text-primary" aria-hidden="true" />
              {PHONE_DISPLAY}
            </span>
            <span className="text-[0.65rem] text-muted-foreground">{PHONE_HOURS}</span>
          </PhoneLink>
          <Link to="/" hash="diagnosis" className="btn btn-sm btn-primary ml-3 text-sm">
            無料診断
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="メニューを開く"
            className="focus-ring grid size-11 place-items-center border border-border transition-colors hover:bg-secondary lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-[min(20rem,88vw)] flex-col gap-0"
            aria-describedby={undefined}
          >
            <SheetTitle className="font-mincho text-lg">メニュー</SheetTitle>
            <nav className="mt-6 flex flex-col" aria-label="モバイルナビゲーション">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  {...(item.hash ? { hash: item.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="focus-ring flex min-h-13 items-center border-b border-border text-base transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/"
              hash="diagnosis"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-8 w-full"
            >
              無料Web診断を依頼する
            </Link>
            <LineButton className="mt-3 w-full">LINEで相談する</LineButton>
            <PhoneButton className="mt-3 w-full">
              <span className="tabular-nums">{PHONE_DISPLAY}</span>
            </PhoneButton>
            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
              {PHONE_HOURS}
              <br />
              相談無料 ／ 2営業日以内にご返信
            </p>
          </SheetContent>
        </Sheet>
      </div>

      {/* Reading progress: the page runs to ~18,000px on a phone, so a sense of
          "how much is left" materially changes whether people keep scrolling. */}
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary/80"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  );
}
