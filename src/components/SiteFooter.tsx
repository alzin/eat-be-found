import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";

import { LineLink } from "@/components/LineCta";
import { LineIcon } from "@/components/LineIcon";
import { PhoneLink } from "@/components/PhoneCta";
import { CONTACT_EMAIL, LINE_ID, PHONE_DISPLAY, PHONE_HOURS } from "@/lib/site";

const services = [
  { label: "Web Renewal", to: "/services/web-renewal" as const },
  { label: "MEO Management", to: "/services/meo" as const },
  { label: "SEO Growth（オプション）", to: "/services/seo" as const },
];

const pageLinks = [
  { label: "無料Web診断", hash: "diagnosis" },
  { label: "Before / After", hash: "before-after" },
  { label: "導入事例", hash: "cases" },
  { label: "料金", hash: "pricing" },
  { label: "よくあるご質問", hash: "faq" },
];

const linkClass =
  "focus-ring-ink inline-flex min-h-9 items-center text-ink-muted transition-colors hover:text-ink-foreground";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2.5">
            <span
              className="grid size-9 shrink-0 place-items-center border border-ink-border font-mincho text-lg"
              aria-hidden="true"
            >
              膳
            </span>
            <span className="font-mincho text-xl">膳 Web</span>
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">
            料理が主役のスマホファースト設計と、Googleマップの継続運用。
            「見つかる」から「予約」までを一本の線でつなぎます。
          </p>
          <div className="mt-6 flex flex-col items-start gap-1">
            <PhoneLink className="focus-ring-ink inline-flex min-h-11 items-center gap-2.5 border-b border-transparent transition-colors hover:border-kohaku hover:text-kohaku">
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              <span className="font-mincho text-lg tabular-nums">{PHONE_DISPLAY}</span>
            </PhoneLink>
            <p className="-mt-1 mb-1 pl-[1.625rem] text-xs text-ink-muted">{PHONE_HOURS}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="focus-ring-ink inline-flex min-h-11 items-center gap-2.5 border-b border-transparent text-sm transition-colors hover:border-kohaku hover:text-kohaku"
            >
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
            {/* The official green clears 8.3:1 on this dark ground, so the mark
                keeps its brand colour here. */}
            <LineLink className="focus-ring-ink inline-flex min-h-11 items-center gap-2.5 border-b border-transparent text-sm transition-colors hover:border-line-bright hover:text-line-bright">
              <LineIcon className="size-4 shrink-0 text-line-bright" />
              LINE公式アカウント
              <span className="text-ink-muted">{LINE_ID}</span>
            </LineLink>
          </div>
        </div>

        <nav aria-labelledby="footer-services">
          <h2 id="footer-services" className="text-xs tracking-[0.2em] text-kohaku">
            SERVICES
          </h2>
          <ul className="mt-4 grid text-sm">
            {services.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-pages">
          <h2 id="footer-pages" className="text-xs tracking-[0.2em] text-kohaku">
            INFORMATION
          </h2>
          <ul className="mt-4 grid text-sm">
            {pageLinks.map((item) => (
              <li key={item.label}>
                <Link to="/" hash={item.hash} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-ink-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} 膳 Web. All rights reserved.</p>
          <p>相談無料 ／ スマホ対応 ／ MEO運用対応</p>
        </div>
      </div>
    </footer>
  );
}
