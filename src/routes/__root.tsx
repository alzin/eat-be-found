import { Outlet, Link, createRootRoute, useRouter, HeadContent } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCta } from "@/components/StickyCta";
import { Toaster } from "@/components/ui/sonner";
import { CONTACT_EMAIL, LINE_URL, OG_IMAGE, PHONE_HREF, SITE_NAME, SITE_URL } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-5 py-24">
      <div className="max-w-md text-center">
        <p className="text-xs tracking-[0.28em] text-primary">404</p>
        <h1 className="mt-5 font-mincho text-[1.75rem] leading-[1.4] md:text-[2.2rem]">
          ページが見つかりませんでした
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          お探しのページは移動または削除された可能性があります。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            トップへ戻る
          </Link>
          <Link to="/" hash="diagnosis" className="btn btn-outline">
            無料Web診断
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-5 py-24">
      <div className="max-w-md text-center">
        <h1 className="font-mincho text-[1.6rem] leading-[1.4] md:text-[2rem]">
          ページを読み込めませんでした
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          一時的な問題の可能性があります。再読み込みをお試しください。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn btn-primary"
          >
            再読み込み
          </button>
          <Link to="/" className="btn btn-outline">
            トップへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: "飲食店専門 Webリニューアル・MEO運用｜膳 Web" },
      {
        name: "description",
        content:
          "古いホームページを、料理が主役のスマホファースト設計へ。Googleマップ運用まで一括で支援します。",
      },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ja_JP" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "飲食店専門 Webリニューアル・MEO運用｜膳 Web",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          image: OG_IMAGE,
          description:
            "飲食店専門のWebリニューアルとMEO（Googleビジネスプロフィール）運用サービス。",
          areaServed: { "@type": "Country", name: "日本" },
          serviceType: ["Webサイト制作", "MEO運用", "ローカルSEO"],
          knowsLanguage: "ja",
          email: CONTACT_EMAIL,
          telephone: PHONE_HREF.replace("tel:", ""),
          sameAs: [LINE_URL],
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: PHONE_HREF.replace("tel:", ""),
              email: CONTACT_EMAIL,
              availableLanguage: "ja",
              hoursAvailable: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "10:00",
                closes: "19:00",
              },
            },
            {
              "@type": "ContactPoint",
              contactType: "sales",
              url: LINE_URL,
              name: "LINE公式アカウント",
              availableLanguage: "ja",
            },
          ],
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <a
        href="#main"
        className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        本文へスキップ
      </a>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        {/* The mobile action bar is fixed over the bottom of the page. The
            padding lives here rather than on <main> so the gap it opens up is
            the footer's dark ground, not a pale band above it. */}
        <div className="bg-ink pb-20 lg:pb-0">
          <SiteFooter />
        </div>
      </div>
      <StickyCta />
      <Toaster />
    </>
  );
}
