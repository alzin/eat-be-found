import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { OG_IMAGE, absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/services/meo")({
  head: () => ({
    meta: [
      { title: "MEO Management｜Googleマップ運用代行｜膳 Web" },
      {
        name: "description",
        content:
          "飲食店のGoogleビジネスプロフィールを継続運用。情報整備、写真、投稿、口コミ返信支援、ローカルKW、競合監視、月次分析と改善提案まで代行します。",
      },
      { property: "og:title", content: "MEO Management｜Googleマップ運用代行" },
      {
        property: "og:description",
        content: "忙しい店舗の代わりに、Googleマップを継続運用。発見の瞬間から予約までを整えます。",
      },
      { property: "og:url", content: absoluteUrl("/services/meo") },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services/meo") }],
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
              name: "MEO Management",
              item: absoluteUrl("/services/meo"),
            },
          ],
        }),
      },
    ],
  }),
  component: MeoPage,
});

const tasks = [
  ["GBP最適化", "プロフィール全体を、検索される形に整えます。"],
  ["情報整備", "住所・電話・席・支払い方法まで正確に。"],
  ["カテゴリ設定", "業態に合う主・副カテゴリを選定します。"],
  ["営業時間", "定休日・臨時休業・特別営業日を随時更新。"],
  ["写真", "料理・空間・外観をバランスよく追加。"],
  ["投稿", "季節メニューやお知らせを定期投稿。"],
  ["口コミ返信支援", "返信文の作成と運用ルールづくり。"],
  ["口コミ獲得導線", "来店後に自然に依頼できる仕組みを設計。"],
  ["URL設定", "予約・メニューのリンクを正しく設定。"],
  ["ローカルKW", "地域×業態のキーワードを反映。"],
  ["競合監視", "近隣店舗の動きを毎月チェック。"],
  ["月次分析・報告", "表示・経路・電話などの推移を報告。"],
  ["改善提案", "翌月に打つ手を、具体的に提示します。"],
];

const beforeAfter = [
  ["古い写真", "料理と空間の魅力写真"],
  ["情報が不足", "正確で十分な店舗情報"],
  ["営業時間が不正確", "最新の営業時間"],
  ["口コミ未返信", "丁寧な返信の継続"],
  ["投稿なし", "定期投稿で鮮度を出す"],
  ["メニュー未掲載", "メニューと予約導線の整備"],
];

function MeoPage() {
  return (
    <>
      <Section
        eyebrow="SERVICE 02"
        title="MEO Management"
        lead="忙しい店舗の代わりに、Googleマップを継続運用します。発見の瞬間から勝負が始まっています。"
      >
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {tasks.map(([title, body], index) => (
            <Reveal key={title} delay={index * 30} className="bg-background p-7">
              <h3 className="flex gap-2 font-mincho text-lg">
                <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                {title}
              </h3>
              <p className="mt-2 pl-6 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ink" eyebrow="BEFORE → AFTER" title="放置されたマップを、整える。">
        <ul className="grid gap-px bg-ink-border md:grid-cols-2">
          {beforeAfter.map(([before, after], index) => (
            <Reveal key={before} delay={index * 50} className="bg-ink p-7">
              <p className="text-sm text-ink-muted line-through decoration-ink-muted/50">
                {before}
              </p>
              <p className="mt-3 font-mincho text-base">{after}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="muted" title="MEOだけのご依頼も承ります。">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/" hash="diagnosis" className="btn btn-primary">
            無料でマップを診断する
          </Link>
          <Link to="/" className="btn btn-outline">
            <ArrowLeft className="size-4" aria-hidden="true" />
            トップに戻る
          </Link>
        </div>
      </Section>
    </>
  );
}
