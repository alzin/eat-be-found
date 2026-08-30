import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "SEO Growth（オプション）｜地域×業態のローカルSEO｜膳 Web" },
      {
        name: "description",
        content:
          "飲食店の地域×業態戦略にもとづくローカルSEO。LP制作、Search Console分析、改善実装、月次報告で中期的に集客を積み上げます。",
      },
      { property: "og:title", content: "SEO Growth（オプション）｜地域×業態のローカルSEO" },
      {
        property: "og:description",
        content: "地域×業態戦略にもとづくローカルSEOとLP制作で、中期的に集客を積み上げます。",
      },
      { property: "og:url", content: "/services/seo" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services/seo" }],
  }),
  component: SeoPage,
});

const scope = [
  ["地域×業態戦略", "「どこで、何の店として選ばれるか」から設計します。"],
  ["ローカルSEO", "地域名を含む検索での見つかりやすさを高めます。"],
  ["LP制作", "宴会・ランチ・記念日など、目的別の受け皿をつくります。"],
  ["Search Console分析", "実際の検索語から、次の一手を決めます。"],
  ["改善実装", "分析だけで終わらせず、手を入れます。"],
  ["月次報告", "推移と施策を、読みやすい形でご報告します。"],
];

function SeoPage() {
  return (
    <>
      <Section
        eyebrow="SERVICE 03 / OPTION"
        title="SEO Growth"
        lead="MEOで足場を固めたうえで、中期的な集客を積み上げるオプションです。目的に応じてご提案します。"
      >
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

      <Section tone="ink" title="必要かどうかも、診断でご案内します。">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            hash="diagnosis"
            className="inline-flex min-h-13 items-center justify-center bg-primary px-7 text-sm text-primary-foreground"
          >
            無料Web診断を依頼する
          </Link>
          <Link
            to="/"
            className="inline-flex min-h-13 items-center justify-center gap-2 border border-ink-border px-7 text-sm"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            トップに戻る
          </Link>
        </div>
      </Section>
    </>
  );
}
