import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { OG_IMAGE, absoluteUrl } from "@/lib/site";
import heroAfter from "@/assets/hero-after.jpg";
import heroBefore from "@/assets/hero-before.jpg";

export const Route = createFileRoute("/services/web-renewal")({
  head: () => ({
    meta: [
      { title: "Web Renewal｜飲食店のホームページリニューアル｜膳 Web" },
      {
        name: "description",
        content:
          "料理を主役に、スマホから考える飲食店向けWebリニューアル。UI/UX設計、メニュー設計、予約導線、Google連携、CMS、計測設定まで一括で対応します。",
      },
      { property: "og:title", content: "Web Renewal｜飲食店のホームページリニューアル" },
      {
        property: "og:description",
        content:
          "料理を主役に、スマホから考える飲食店向けWebリニューアル。予約まで迷わせない設計を行います。",
      },
      { property: "og:url", content: absoluteUrl("/services/web-renewal") },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services/web-renewal") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "ホーム", item: absoluteUrl("/") },
            {
              "@type": "ListItem",
              position: 2,
              name: "Web Renewal",
              item: absoluteUrl("/services/web-renewal"),
            },
          ],
        }),
      },
    ],
  }),
  component: WebRenewalPage,
});

const scope = [
  ["UI/UX設計", "業態と客層から、画面の順番を決めます。"],
  ["デザイン", "余白と写真で、価格帯まで伝わる表現に。"],
  ["スマホ最適化", "実機の見え方と指の動きを基準に調整。"],
  ["メニュー設計", "探させず、最短で届くメニュー構成へ。"],
  ["予約導線", "どのページからでも一動作で予約へ。"],
  ["店舗情報", "地図・最寄駅・駐車場・席情報を整備。"],
  ["Google連携", "GBPとサイトの情報を一致させます。"],
  ["CMS", "お知らせやメニューを自社で更新可能に。"],
  ["基本SEO", "店名・地域・業態で見つかる土台づくり。"],
  ["Analytics / Search Console", "公開時点から計測できる状態に。"],
];

function WebRenewalPage() {
  return (
    <>
      <Section
        eyebrow="SERVICE 01"
        title="Web Renewal"
        lead="「行ってみたい」「予約したい」体験へ。古いホームページを、料理が主役のスマホファースト設計に刷新します。"
      >
        <Reveal>
          <BeforeAfterSlider
            priority
            beforeSrc={heroBefore}
            afterSrc={heroAfter}
            beforeAlt="リニューアル前の古い飲食店サイト"
            afterAlt="リニューアル後の料理写真主役のサイト"
            sizes="(min-width: 1024px) 64rem, calc(100vw - 2.5rem)"
          />
        </Reveal>
      </Section>

      <Section tone="muted" eyebrow="SCOPE" title="対応範囲">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {scope.map(([title, body], index) => (
            <Reveal key={title} delay={index * 40} className="bg-background p-7">
              <h3 className="flex gap-2 font-mincho text-lg">
                <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                {title}
              </h3>
              <p className="mt-2 pl-6 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ink" title="まずは、現状の診断から。">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/" hash="diagnosis" className="btn btn-primary">
            無料Web診断を依頼する
          </Link>
          <Link to="/" className="btn btn-on-ink">
            <ArrowLeft className="size-4" aria-hidden="true" />
            トップに戻る
          </Link>
        </div>
      </Section>
    </>
  );
}
