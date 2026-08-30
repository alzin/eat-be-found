import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr] md:px-8">
        <div>
          <p className="font-mincho text-xl">膳 Web ／ 飲食店専門 Webリニューアル・MEO運用</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
            料理が主役のスマホファースト設計と、Googleマップの継続運用。
            「見つかる」から「予約」までを一本の線でつなぎます。
          </p>
        </div>
        <nav className="text-sm" aria-label="フッターナビゲーション">
          <ul className="grid gap-3">
            <li>
              <Link to="/services/web-renewal" className="text-ink-muted hover:text-ink-foreground">
                Web Renewal
              </Link>
            </li>
            <li>
              <Link to="/services/meo" className="text-ink-muted hover:text-ink-foreground">
                MEO Management
              </Link>
            </li>
            <li>
              <Link to="/services/seo" className="text-ink-muted hover:text-ink-foreground">
                SEO Growth（オプション）
              </Link>
            </li>
            <li>
              <Link to="/" hash="diagnosis" className="text-ink-muted hover:text-ink-foreground">
                無料Web診断
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-ink-border">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-ink-muted md:px-8">
          © {new Date().getFullYear()} 膳 Web. 相談無料 ／ スマホ対応 ／ MEO運用対応
        </p>
      </div>
    </footer>
  );
}
