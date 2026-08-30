import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Check, MapPin, Search, Sparkles, Star, Utensils } from "lucide-react";

import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { DiagnosisForm } from "@/components/DiagnosisForm";
import { PhoneMock } from "@/components/PhoneMock";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import heroAfter from "@/assets/hero-after.jpg";
import heroBefore from "@/assets/hero-before.jpg";
import case1After from "@/assets/case1-after.jpg";
import case1Before from "@/assets/case1-before.jpg";
import case2After from "@/assets/case2-after.jpg";
import case2Before from "@/assets/case2-before.jpg";
import case3After from "@/assets/case3-after.jpg";
import case3Before from "@/assets/case3-before.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "飲食店専門 Webリニューアル・MEO運用｜膳 Web" },
      {
        name: "description",
        content:
          "古いホームページを「行ってみたい」に変える。料理が主役のスマホファースト設計とGoogleマップ運用で、見つかるから予約までをつなぎます。無料診断受付中。",
      },
      { property: "og:title", content: "飲食店専門 Webリニューアル・MEO運用｜膳 Web" },
      {
        property: "og:description",
        content:
          "料理が主役のスマホファースト設計とGoogleマップ運用。見つかるから予約までを一本の線でつなぎます。",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "膳 Web",
          description:
            "飲食店専門のWebリニューアルとMEO（Googleビジネスプロフィール）運用サービス。",
          areaServed: "JP",
          serviceType: ["Webサイト制作", "MEO運用", "ローカルSEO"],
        }),
      },
    ],
  }),
  component: Index,
});

const problems = [
  "ホームページが古い",
  "スマホで見づらい",
  "料理の魅力が伝わらない",
  "更新できていない",
  "Googleマップを放置している",
  "予約につながらない",
];

const beforeAfterRows = [
  ["古いデザイン", "ブランドに合ったUI"],
  ["PC中心のレイアウト", "スマホファースト"],
  ["小さな写真", "料理が主役の大写真"],
  ["メニューが届かない", "最短でメニューへ"],
  ["予約方法が不明", "明確な予約導線"],
  ["情報が古い", "Google連携で最新"],
];

const principles = [
  { no: "01", title: "料理を主役に", body: "最初の一画面で、味と空気が伝わる写真設計にします。" },
  { no: "02", title: "メニューを迷わせない", body: "価格・内容・写真を、探さずに届く順番で並べます。" },
  { no: "03", title: "スマホから考える", body: "指の届く位置に、次の一手を置きます。" },
  { no: "04", title: "予約まで迷わせない", body: "どのページからでも、一動作で予約に届きます。" },
  { no: "05", title: "アクセスを即解決", body: "地図・最寄駅・駐車場を、その場で解決します。" },
  { no: "06", title: "同じテンプレ化しない", body: "業態と客層に合わせ、一店ごとに設計します。" },
];

const journey = [
  { label: "Google検索", icon: Search },
  { label: "マップ", icon: MapPin },
  { label: "写真・口コミ", icon: Star },
  { label: "公式サイト", icon: Sparkles },
  { label: "メニュー・雰囲気", icon: Utensils },
  { label: "予約", icon: Check },
  { label: "来店", icon: ArrowRight },
];

const services = [
  {
    no: "SERVICE 01",
    title: "Web Renewal",
    to: "/services/web-renewal" as const,
    value: "「行ってみたい」「予約したい」体験へ。",
    items: [
      "UI/UX設計",
      "デザイン",
      "スマホ最適化",
      "メニュー設計",
      "予約導線",
      "店舗情報",
      "Google連携",
      "CMS",
      "基本SEO",
      "Analytics / Search Console",
    ],
  },
  {
    no: "SERVICE 02",
    title: "MEO Management",
    to: "/services/meo" as const,
    value: "忙しい店舗の代わりに、継続運用。",
    items: [
      "GBP最適化",
      "情報整備",
      "カテゴリ設定",
      "営業時間",
      "写真",
      "投稿",
      "口コミ返信支援",
      "口コミ獲得導線",
      "URL設定",
      "ローカルKW",
      "競合監視",
      "月次分析・報告",
      "改善提案",
    ],
  },
  {
    no: "SERVICE 03（OPTION）",
    title: "SEO Growth",
    to: "/services/seo" as const,
    value: "地域×業態で、中期的に積み上げる。",
    items: [
      "地域×業態戦略",
      "ローカルSEO",
      "LP制作",
      "Search Console分析",
      "改善実装",
      "月次報告",
    ],
  },
];

const meoRows = [
  ["古い写真", "料理と空間の魅力写真"],
  ["情報が不足", "正確で十分な店舗情報"],
  ["営業時間が不正確", "最新の営業時間・臨時休業"],
  ["口コミ未返信", "丁寧な返信の継続"],
  ["投稿なし", "定期投稿で鮮度を出す"],
  ["メニュー未掲載", "メニューと予約導線の整備"],
];

const cases = [
  {
    shop: "海鮮寿司 海の幸",
    before: case1Before,
    after: case1After,
    problem: "メニューまで3階層。スマホでは文字が小さく読めない。",
    action: "メニューを1タップに短縮。料理写真を撮り直し、全ページに予約CTAを設置。",
    result: "メニュー閲覧が主要導線に。予約ページ到達が明確な線になりました。",
  },
  {
    shop: "らーめん 麺一番",
    before: case2Before,
    after: case2After,
    problem: "情報が各所で食い違い、Googleマップの情報も古いまま。",
    action: "店舗情報を一元化し、GBPと公式サイトの情報を統一。定期投稿を開始。",
    result: "検索から地図、公式サイトまでの流れが途切れなくなりました。",
  },
  {
    shop: "鉄板焼き 華炎",
    before: case3Before,
    after: case3After,
    problem: "PC前提の重いページ。ブランドの上質さが伝わらない。",
    action: "スマホ最適化とブランド刷新。写真主役の構成へ全面設計。",
    result: "第一画面で価格帯と世界観が伝わる状態になりました。",
  },
];

const pricing = [
  {
    name: "WEB RENEWAL",
    price: "¥XXX,XXX〜",
    note: "制作一式",
    items: ["UI/UX設計・デザイン", "スマホ最適化", "メニュー・予約導線設計", "Google連携・初期計測"],
    featured: false,
  },
  {
    name: "WEB + MEO",
    price: "制作 ¥XXX,XXX〜",
    note: "運用 月額 ¥XX,XXX〜",
    items: ["Webリニューアル一式", "GBP最適化・情報整備", "写真・投稿・口コミ返信支援", "月次分析と改善提案"],
    featured: true,
  },
  {
    name: "GROWTH",
    price: "個別見積",
    note: "SEO / LP を含む中期支援",
    items: ["地域×業態戦略", "ローカルSEO", "LP制作", "月次報告"],
    featured: false,
  },
];

const flow = [
  ["01", "無料診断", "現状のサイトとマップを拝見します。"],
  ["02", "ヒアリング", "客層・強み・予約の実情を伺います。"],
  ["03", "ご提案", "構成・見積・スケジュールを提示。"],
  ["04", "デザイン", "第一画面から方向性を固めます。"],
  ["05", "制作", "実装・写真・原稿を並行で進行。"],
  ["06", "公開", "計測とGoogle連携を設定して公開。"],
  ["07", "運用", "MEOと改善を継続します。"],
];

const reasons = [
  ["飲食店に特化", "業態ごとの勝ち筋を踏まえて設計します。"],
  ["デザイン×集客", "見た目と成果を切り離しません。"],
  ["スマホファースト", "実際の閲覧環境から設計します。"],
  ["マップまで一括", "サイトとGBPを同じ思想で運用。"],
  ["公開後も改善", "数値を見て、毎月手を入れます。"],
  ["必要なものだけ", "過剰な一式販売はしません。"],
];

const diagnosisItems = [
  "デザインの印象",
  "スマホ表示",
  "メニューの伝わり方",
  "予約導線",
  "Googleマップ",
  "MEOの状態",
  "SEO基礎",
  "改善の優先順位",
];

const faq = [
  ["今のドメインは continue できますか？", "はい、現在のドメインを引き継いで公開できます。"],
  ["写真撮影はお願いできますか？", "撮影の手配が可能です。料理・空間・スタッフまで対応します。"],
  ["メニューの更新はできますか？", "はい。価格や季節メニューの更新に対応します。"],
  ["自社で更新できますか？", "CMSをご用意し、更新手順もお渡しします。"],
  ["MEOだけの依頼は可能ですか？", "可能です。運用のみのご契約も承ります。"],
  [
    "MEOでは具体的に何をしますか？",
    "情報整備、カテゴリ・営業時間の最適化、写真と投稿、口コミ返信支援、月次分析と改善提案を行います。",
  ],
  ["SEOは必ず必要ですか？", "目的に応じてご提案します。まずはMEOが効く店舗も多いです。"],
  ["ポータルサイトは辞めるべき？", "併用を推奨します。役割を分けて使うのが現実的です。"],
  ["予約システムと連携できますか？", "主要な予約サービスとの連携に対応します。"],
  ["Instagramと連携できますか？", "投稿の掲載やプロフィール導線の設計に対応します。"],
  ["小規模店でも依頼できますか？", "歓迎です。必要な範囲だけを選べます。"],
  ["制作期間はどれくらい？", "通常4〜8週間です。内容と素材の状況で変わります。"],
  ["公開後のサポートは？", "運用プランで継続的に改善を支援します。"],
];

function Index() {
  return (
    <>
      <section className="border-b border-border bg-background px-5 pt-14 pb-16 md:px-8 md:pt-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-xs tracking-[0.28em] text-primary">
              飲食店専門 WEB RENEWAL &amp; MEO
            </p>
            <h1 className="mt-6 font-mincho text-[2.1rem] leading-[1.3] md:text-[2.9rem] xl:text-[3.3rem]">
              古いホームページを、
              <br />
              「行ってみたい」に変える。
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              お店の今の魅力を、Webで正しく伝える。スマホで見やすく、予約まで迷わせない。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/"
                hash="diagnosis"
                className="inline-flex min-h-13 items-center justify-center bg-primary px-7 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                今のホームページを無料診断
              </Link>
              <Link
                to="/"
                hash="before-after"
                className="inline-flex min-h-13 items-center justify-center border border-foreground/25 px-7 text-sm transition-colors hover:bg-secondary"
              >
                Before / After を見る
              </Link>
            </div>
            <p className="mt-6 text-xs tracking-[0.14em] text-muted-foreground">
              相談無料 ｜ スマホ対応 ｜ MEO運用対応
            </p>
          </Reveal>

          <Reveal delay={120}>
            <BeforeAfterSlider
              priority
              beforeSrc={heroBefore}
              afterSrc={heroAfter}
              beforeAlt="リニューアル前の古い和風飲食店サイト"
              afterAlt="リニューアル後の料理写真を主役にした上質なサイト"
              className="shadow-2xl"
            />
            <p className="mt-4 text-center text-xs text-muted-foreground">
              スライダーを左右にドラッグしてご確認ください
            </p>
          </Reveal>
        </div>
      </section>

      <Section
        id="problems"
        tone="muted"
        eyebrow="PROBLEMS"
        title="こんなお悩み、ありませんか？"
      >
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal
              key={problem}
              delay={index * 60}
              className="bg-background p-7 text-base md:text-lg"
            >
              <span className="font-mincho">{problem}</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 border-l-2 border-primary pl-6">
          <p className="font-mincho text-lg leading-relaxed md:text-2xl">
            課題は古さではなく、「今の魅力」が伝わっていないことです。
          </p>
        </Reveal>
      </Section>

      <Section
        id="before-after"
        eyebrow="BEFORE → AFTER"
        title="Webサイトも、お店の一部です。"
        lead="実在感のある旧来の和食・居酒屋サイトから、上質なモダンUIへ。同じお店でも、伝わり方は変わります。"
      >
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <Reveal>
            <BeforeAfterSlider
              beforeSrc={heroBefore}
              afterSrc={heroAfter}
              beforeAlt="旧来の和食店サイトのデザイン"
              afterAlt="上質なモダンUIにリニューアルしたサイト"
            />
          </Reveal>
          <Reveal delay={100}>
            <ul className="divide-y divide-border border-y border-border">
              {beforeAfterRows.map(([before, after]) => (
                <li
                  key={before}
                  className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 py-4"
                >
                  <span className="min-w-0 text-sm text-muted-foreground line-through decoration-muted-foreground/50">
                    {before}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0 font-mincho text-sm md:text-base">{after}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section
        id="principles"
        tone="ink"
        eyebrow="UI / UX PRINCIPLES"
        title="飲食店には、飲食店のUI/UXがあります。"
      >
        <div className="grid gap-px bg-ink-border md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.no} delay={index * 60} className="bg-ink p-8">
              <p className="font-mincho text-sm text-kohaku">{item.no}</p>
              <h3 className="mt-4 font-mincho text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="journey"
        eyebrow="CUSTOMER JOURNEY"
        title="お客様がお店を選ぶまでを、ひとつにつなぐ。"
        lead="見つけてもらい、魅力を伝え、行動へ。どこか一つが欠けると、来店は止まります。"
      >
        <Reveal>
          <ol className="flex snap-x gap-3 overflow-x-auto pb-4">
            {journey.map((step, index) => (
              <li
                key={step.label}
                className="flex w-40 shrink-0 snap-start flex-col gap-3 border border-border bg-card p-5"
              >
                <span className="text-xs tracking-[0.2em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <step.icon className="size-5 text-foreground" aria-hidden="true" />
                <span className="font-mincho text-base">{step.label}</span>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="font-mincho text-lg leading-relaxed md:text-2xl">
            スマホの小さな画面で、迷わせないこと。
            <br />
            それが、来店数の差になります。
          </p>
          <PhoneMock label="スマホ実機での見え方を基準に設計">
            <img
              src={heroAfter}
              alt="スマホ表示に最適化した飲食店サイトの画面"
              width={1280}
              height={912}
              loading="lazy"
              className="size-full object-cover object-left-top"
            />
          </PhoneMock>
        </Reveal>
      </Section>

      <Section
        id="services"
        tone="muted"
        eyebrow="SERVICES"
        title="つくるだけで、終わらせない。"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 80}
              className="flex flex-col border border-border bg-background p-8"
            >
              <p className="text-xs tracking-[0.2em] text-primary">{service.no}</p>
              <h3 className="mt-4 font-mincho text-2xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.value}</p>
              <ul className="mt-6 grid gap-2 text-sm">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={service.to}
                className="mt-8 inline-flex items-center gap-2 text-sm text-primary"
              >
                詳しく見る
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="meo"
        tone="ink"
        eyebrow="MEO"
        title="Googleマップ、放置していませんか？"
        lead="発見の瞬間から勝負は始まっています。マップの見え方は、そのままお店の第一印象です。"
      >
        <ul className="grid gap-px bg-ink-border md:grid-cols-2">
          {meoRows.map(([before, after], index) => (
            <Reveal key={before} delay={index * 50} className="bg-ink p-7">
              <p className="text-sm text-ink-muted line-through decoration-ink-muted/50">
                {before}
              </p>
              <p className="mt-3 flex gap-2 font-mincho text-base">
                <ArrowRight className="mt-1 size-4 shrink-0 text-kohaku" aria-hidden="true" />
                {after}
              </p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10">
          <Link
            to="/services/meo"
            className="inline-flex min-h-12 items-center gap-2 border border-ink-border px-6 text-sm text-ink-foreground transition-colors hover:bg-sumi"
          >
            MEO運用の内容を見る
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </Section>

      <Section
        id="cases"
        eyebrow="CASE STUDIES"
        title="Restaurant Transformations"
        lead="課題・改善・結果を、Before / After でご覧ください。"
      >
        <div className="grid gap-16">
          {cases.map((item, index) => (
            <Reveal key={item.shop} className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <BeforeAfterSlider
                beforeSrc={item.before}
                afterSrc={item.after}
                beforeAlt={`${item.shop} のリニューアル前サイト`}
                afterAlt={`${item.shop} のリニューアル後サイト`}
                className={index % 2 === 1 ? "lg:order-2" : undefined}
              />
              <div>
                <h3 className="font-mincho text-2xl rule-kaki">{item.shop}</h3>
                <dl className="mt-6 grid gap-5 text-sm leading-relaxed">
                  <div>
                    <dt className="text-xs tracking-[0.2em] text-muted-foreground">課題</dt>
                    <dd className="mt-1.5">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.2em] text-muted-foreground">改善</dt>
                    <dd className="mt-1.5">{item.action}</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.2em] text-primary">結果</dt>
                    <dd className="mt-1.5 font-mincho text-base">{item.result}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="pricing"
        tone="muted"
        eyebrow="PRICING"
        title="必要なものだけを、選べます。"
        lead="金額はプラン構成の目安です。店舗数・ページ数・撮影の有無でご提案します。"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={index * 80}
              className={
                plan.featured
                  ? "border-2 border-primary bg-background p-8"
                  : "border border-border bg-background p-8"
              }
            >
              {plan.featured ? (
                <span className="inline-block bg-primary px-3 py-1 text-[0.7rem] tracking-[0.2em] text-primary-foreground">
                  おすすめ
                </span>
              ) : null}
              <h3 className="mt-4 text-xs tracking-[0.2em] text-muted-foreground">{plan.name}</h3>
              <p className="mt-4 font-mincho text-3xl">{plan.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{plan.note}</p>
              <ul className="mt-6 grid gap-2 text-sm">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="flow" eyebrow="FLOW" title="公開までの流れ">
        <ol className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {flow.map(([no, title, body], index) => (
            <Reveal key={no} delay={index * 50} className="bg-background p-7" as="li">
              <p className="font-mincho text-sm text-primary">{no}</p>
              <h3 className="mt-3 font-mincho text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section
        id="reasons"
        tone="ink"
        eyebrow="WHY US"
        title="選ばれる理由"
      >
        <div className="grid gap-px bg-ink-border md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, body], index) => (
            <Reveal key={title} delay={index * 50} className="bg-ink p-8">
              <h3 className="font-mincho text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="diagnosis"
        eyebrow="FREE DIAGNOSIS"
        title="今のホームページ、無料で診断します。"
        lead="現状を拝見し、改善の優先順位をまとめてお返しします。売り込みはいたしません。"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h3 className="text-xs tracking-[0.2em] text-muted-foreground">診断項目</h3>
            <ul className="mt-5 grid gap-3 text-sm">
              {diagnosisItems.map((item) => (
                <li key={item} className="flex gap-3 border-b border-border pb-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="border border-border bg-card p-7 md:p-9">
            <DiagnosisForm />
          </Reveal>
        </div>
      </Section>

      <Section id="faq" tone="muted" eyebrow="FAQ" title="よくあるご質問">
        <Reveal>
          <Accordion type="single" collapsible className="border-t border-border">
            {faq.map(([question, answer], index) => (
              <AccordionItem key={question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-mincho text-base">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>

      <section id="contact" className="scroll-mt-20 bg-ink px-5 py-24 text-ink-foreground md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-mincho text-[1.9rem] leading-[1.35] md:text-[3rem]">
            お店の魅力を、
            <br />
            Webでもっと伝えませんか？
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-ink-muted md:text-base">
            まずは現状を拝見し、改善ポイントをご案内します。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              hash="diagnosis"
              className="inline-flex min-h-13 items-center justify-center bg-primary px-7 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              今のホームページを無料診断
            </Link>
            <a
              href="mailto:hello@example.com"
              className="inline-flex min-h-13 items-center justify-center border border-ink-border px-7 text-sm transition-colors hover:bg-sumi"
            >
              まずは相談する
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
