import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { label: "サービス", to: "/", hash: "services" },
  { label: "Before / After", to: "/", hash: "before-after" },
  { label: "MEO運用", to: "/services/meo", hash: undefined },
  { label: "事例", to: "/", hash: "cases" },
  { label: "料金", to: "/", hash: "pricing" },
  { label: "FAQ", to: "/", hash: "faq" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 md:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-9 shrink-0 place-items-center bg-sumi font-mincho text-lg text-ink-foreground">
            膳
          </span>
          <span className="min-w-0">
            <span className="block truncate font-mincho text-base leading-tight">
              膳 Web / 飲食店専門
            </span>
            <span className="block truncate text-[0.65rem] tracking-[0.2em] text-muted-foreground">
              WEB RENEWAL &amp; MEO
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="メインナビゲーション">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="diagnosis"
            className="inline-flex min-h-11 items-center bg-primary px-5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            無料診断
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="メニューを開く"
            className="grid size-11 place-items-center border border-border lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(20rem,86vw)]">
            <SheetTitle className="font-mincho text-lg">メニュー</SheetTitle>
            <nav className="mt-6 flex flex-col" aria-label="モバイルナビゲーション">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  {...(item.hash ? { hash: item.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3.5 text-base"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/"
                hash="diagnosis"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex min-h-12 items-center justify-center bg-primary px-5 text-primary-foreground"
              >
                無料Web診断を依頼する
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
