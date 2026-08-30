import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Globe,
  Phone,
  MapPin,
  Search,
  Smartphone,
  Star,
  Store,
  Utensils,
} from "lucide-react";

import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { DiagnosisForm } from "@/components/DiagnosisForm";
import { LineButton, LineLink } from "@/components/LineCta";
import { LineIcon } from "@/components/LineIcon";
import { PhoneLink } from "@/components/PhoneCta";
import { PhoneMock } from "@/components/PhoneMock";
import { Picture } from "@/components/Picture";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import {
  CONTACT_EMAIL,
  LINE_ID,
  OG_IMAGE,
  PHONE_DISPLAY,
  PHONE_HOURS,
  absoluteUrl,
} from "@/lib/site";
import heroAfter from "@/assets/hero-after.jpg";
import heroBefore from "@/assets/hero-before.jpg";
import case1After from "@/assets/case1-after.jpg";
import case1Before from "@/assets/case1-before.jpg";
import case2After from "@/assets/case2-after.jpg";
import case2Before from "@/assets/case2-before.jpg";
import case3After from "@/assets/case3-after.jpg";
import case3Before from "@/assets/case3-before.jpg";

const faq: readonly (readonly [string, string])[] = [
  ["今のドメインは引き続き使えますか？", "はい、現在のドメインを引き継いで公開できます。"],
  ["写真撮影はお願いできますか？", "撮影の手配が可能です。料理・空間・スタッフまで対応します。"],
  ["メニューの更新はできますか？", "はい。価格や季節メニューの更新に対応します。"],
  ["自社で更新できますか？", "CMSをご用意し、更新手順もお渡しします。"],
  ["MEOだけの依頼は可能ですか？", "可能です。運用のみのご契約も承ります。"],
  [
    "MEOでは具体的に何をしますか？",
    "情報整備、カテゴリ・営業時間の最適化、写真と投稿、口コミ返信支援、月次分析と改善提案を行います。",
  ],
  ["SEOは必ず必要ですか？", "目的に応じてご提案します。まずはMEOが効く店舗も多いです。"],
  ["ポータルサイトは辞めるべきですか？", "併用を推奨します。役割を分けて使うのが現実的です。"],
  ["予約システムと連携できますか？", "主要な予約サービスとの連携に対応します。"],
  ["Instagramと連携できますか？", "投稿の掲載やプロフィール導線の設計に対応します。"],
  [
    "LINEで相談できますか？",
    "はい。LINE公式アカウントからご相談いただけます。写真や現在のURLもそのままお送りいただけますので、フォームより手軽です。",
  ],
  [
    "電話でも相談できますか？",
    `はい。${PHONE_DISPLAY}（${PHONE_HOURS}）で承ります。担当者が不在の場合は、折り返しご連絡いたします。`,
  ],
  ["小規模店でも依頼できますか？", "歓迎です。必要な範囲だけを選べます。"],
  ["制作期間はどれくらいですか？", "通常4〜8週間です。内容と素材の状況で変わります。"],
  ["公開後のサポートはありますか？", "運用プランで継続的に改善を支援します。"],
] as const;

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
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
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

const heroPoints = [
  { icon: Utensils, label: "飲食店専門" },
  { icon: Smartphone, label: "スマホファースト" },
  { icon: MapPin, label: "MEOまで一括" },
];

const principles = [
  { no: "01", title: "料理を主役に", body: "最初の一画面で、味と空気が伝わる写真設計にします。" },
  {
    no: "02",
    title: "メニューを迷わせない",
    body: "価格・内容・写真を、探さずに届く順番で並べます。",
  },
  { no: "03", title: "スマホから考える", body: "指の届く位置に、次の一手を置きます。" },
  { no: "04", title: "予約まで迷わせない", body: "どのページからでも、一動作で予約に届きます。" },
  { no: "05", title: "アクセスを即解決", body: "地図・最寄駅・駐車場を、その場で解決します。" },
  { no: "06", title: "同じテンプレ化しない", body: "業態と客層に合わせ、一店ごとに設計します。" },
];

const journey = [
  { label: "Google検索", icon: Search },
  { label: "マップ", icon: MapPin },
  { label: "写真・口コミ", icon: Star },
  { label: "公式サイト", icon: Globe },
  { label: "メニュー・雰囲気", icon: Utensils },
  { label: "予約", icon: CalendarCheck },
  { label: "来店", icon: Store },
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
    items: ["地域×業態戦略", "ローカルSEO", "LP制作", "Search Console分析", "改善実装", "月次報告"],
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
    kind: "寿司 / 一品料理",
    before: case1Before,
    after: case1After,
    problem: "メニューまで3階層。スマホでは文字が小さく読めない。",
    action: "メニューを1タップに短縮。料理写真を撮り直し、全ページに予約CTAを設置。",
    result: "メニュー閲覧が主要導線に。予約ページ到達が明確な線になりました。",
  },
  {
    shop: "らーめん 麺一番",
    kind: "ラーメン / 昼夜営業",
    before: case2Before,
    after: case2After,
    problem: "情報が各所で食い違い、Googleマップの情報も古いまま。",
    action: "店舗情報を一元化し、GBPと公式サイトの情報を統一。定期投稿を開始。",
    result: "検索から地図、公式サイトまでの流れが途切れなくなりました。",
  },
  {
    shop: "鉄板焼き 華炎",
    kind: "鉄板焼き / 接待利用",
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
    summary: "まずはサイトだけ整えたい店舗に。",
    items: [
      "UI/UX設計・デザイン",
      "スマホ最適化",
      "メニュー・予約導線設計",
      "Google連携・初期計測",
    ],
    featured: false,
  },
  {
    name: "WEB + MEO",
    price: "¥XXX,XXX〜",
    note: "制作費／運用 月額 ¥XX,XXX〜",
    summary: "サイトとGoogleマップを同じ思想で運用。",
    items: [
      "Webリニューアル一式",
      "GBP最適化・情報整備",
      "写真・投稿・口コミ返信支援",
      "月次分析と改善提案",
    ],
    featured: true,
  },
  {
    name: "GROWTH",
    price: "個別見積",
    note: "SEO / LP を含む中期支援",
    summary: "地域で長く選ばれる状態をつくる。",
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

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background px-5 pt-10 pb-14 md:px-8 md:pt-20 md:pb-24">
        {/* Warm wash behind the headline so the hero does not read as a plain
            white page above the photography. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_15%_0%,var(--accent)_0%,transparent_60%)] opacity-70"
        />
        <div className="relative mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1.12fr_1fr] lg:items-center lg:gap-12">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.7rem] tracking-[0.24em] text-primary md:text-xs md:tracking-[0.28em]">
              <span aria-hidden="true" className="h-px w-6 bg-primary/60" />
              飲食店専門 WEB RENEWAL &amp; MEO
            </p>
            <h1 className="jp-wrap mt-5 font-mincho text-[clamp(1.55rem,6.15vw,2.05rem)] leading-[1.42] md:mt-6 md:text-[2.6rem] md:leading-[1.32] xl:text-[2.75rem]">
              <span className="jp-phrase">古いホームページを、</span>
              <span className="jp-phrase">「行ってみたい」に変える。</span>
            </h1>
            <p className="jp-wrap mt-5 max-w-xl text-sm leading-[1.9] text-muted-foreground md:mt-6 md:text-base">
              <span className="jp-phrase">お店の今の魅力を、Webで正しく伝える。</span>
              <span className="jp-phrase">スマホで見やすく、予約まで迷わせない。</span>
            </p>
            <div id="hero-actions" className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9">
              <Link to="/" hash="diagnosis" className="btn btn-primary">
                今のホームページを無料診断
              </Link>
              <Link to="/" hash="before-after" className="btn btn-outline">
                Before / After を見る
              </Link>
            </div>
            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs text-muted-foreground md:mt-7">
              {heroPoints.map((point) => (
                <li key={point.label} className="flex items-center gap-1.5">
                  <point.icon className="size-3.5 text-primary" aria-hidden="true" />
                  {point.label}
                </li>
              ))}
              <li className="flex items-center gap-1.5">
                <Check className="size-3.5 text-primary" aria-hidden="true" />
                相談無料
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <BeforeAfterSlider
              priority
              beforeSrc={heroBefore}
              afterSrc={heroAfter}
              beforeAlt="リニューアル前の古い和風飲食店サイト"
              afterAlt="リニューアル後の料理写真を主役にした上質なサイト"
              sizes="(min-width: 1024px) 34rem, calc(100vw - 2.5rem)"
              className="shadow-[0_24px_60px_-24px_oklch(0.215_0.014_55/0.45)]"
            />
            <p className="mt-3.5 text-center text-xs text-muted-foreground">
              スライダーを左右にドラッグしてご確認ください
            </p>
          </Reveal>
        </div>
      </section>

      <Section id="problems" tone="muted" eyebrow="PROBLEMS" title="こんなお悩み、ありませんか？">
        <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal
              key={problem}
              as="li"
              delay={index * 60}
              className="group flex items-start gap-4 bg-background p-7 transition-colors hover:bg-accent/40"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 font-mincho text-sm text-primary/70 tabular-nums"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="jp-wrap font-mincho text-base md:text-lg">{problem}</span>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12 border-l-2 border-primary pl-6">
          <p className="jp-wrap font-mincho text-lg leading-[1.7] md:text-2xl">
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
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12">
          <Reveal>
            <BeforeAfterSlider
              beforeSrc={heroBefore}
              afterSrc={heroAfter}
              beforeAlt="旧来の和食店サイトのデザイン"
              afterAlt="上質なモダンUIにリニューアルしたサイト"
              sizes="(min-width: 1024px) 38rem, calc(100vw - 2.5rem)"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 border-b border-border pb-2.5 text-[0.65rem] tracking-[0.2em] text-muted-foreground">
              <span>BEFORE</span>
              <span aria-hidden="true" className="w-4" />
              <span className="text-primary">AFTER</span>
            </div>
            <ul className="divide-y divide-border border-b border-border">
              {beforeAfterRows.map(([before, after]) => (
                <li
                  key={before}
                  className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 py-4"
                >
                  <span className="min-w-0 text-sm text-muted-foreground line-through decoration-muted-foreground/50">
                    {before}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="jp-wrap min-w-0 font-mincho text-sm md:text-base">{after}</span>
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
            <Reveal
              key={item.no}
              delay={index * 60}
              className="bg-ink p-8 transition-colors hover:bg-sumi"
            >
              <p className="font-mincho text-sm text-kohaku tabular-nums">{item.no}</p>
              <h3 className="jp-wrap mt-4 font-mincho text-xl">{item.title}</h3>
              <p className="jp-wrap mt-3 text-sm leading-[1.9] text-ink-muted">{item.body}</p>
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
          {/* Seven steps fit as a row from lg up; below that it becomes a snap
              carousel with a fading right edge so the track reads as scrollable
              without a visible scrollbar. */}
          <ol className="no-scrollbar max-lg:track-fade flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-7 lg:overflow-visible">
            {journey.map((step, index) => (
              <li
                key={step.label}
                className="relative flex w-36 shrink-0 snap-start flex-col gap-3 border border-border bg-card p-4 sm:w-40 lg:w-auto lg:p-5"
              >
                <span className="text-[0.65rem] tracking-[0.2em] text-primary tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <step.icon className="size-5 text-foreground" aria-hidden="true" />
                <span className="jp-wrap font-mincho text-sm leading-snug lg:text-base">
                  {step.label}
                </span>
                {index < journey.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute top-1/2 -right-3 hidden size-3 -translate-y-1/2 text-primary/50 lg:block"
                  />
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground lg:hidden">
            横にスワイプできます
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </p>
        </Reveal>
        <Reveal className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="jp-wrap font-mincho text-lg leading-[1.7] md:text-2xl">
            <span className="jp-phrase">スマホの小さな画面で、迷わせないこと。</span>
            <br />
            <span className="jp-phrase">それが、来店数の差になります。</span>
          </p>
          <PhoneMock label="スマホ実機での見え方を基準に設計">
            <Picture
              src={heroAfter}
              alt="スマホ表示に最適化した飲食店サイトの画面"
              sizes="17rem"
              className="size-full object-cover object-left-top"
            />
          </PhoneMock>
        </Reveal>
      </Section>

      <Section id="services" tone="muted" eyebrow="SERVICES" title="つくるだけで、終わらせない。">
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 80}
              className="flex h-full flex-col border border-border bg-background p-7 transition-colors hover:border-primary/40 md:p-8"
            >
              <p className="text-xs tracking-[0.2em] text-primary">{service.no}</p>
              <h3 className="mt-4 font-mincho text-2xl">{service.title}</h3>
              <p className="jp-wrap mt-3.5 text-sm leading-[1.9] text-muted-foreground">
                {service.value}
              </p>
              <ul className="mt-6 grid gap-2 text-sm">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
              {/* mt-auto keeps the three links on one baseline even though the
                  feature lists differ in length. */}
              <div className="mt-auto pt-8">
                <Link
                  to={service.to}
                  className="focus-ring inline-flex min-h-11 items-center gap-2 text-sm text-primary underline-offset-4 transition-colors hover:text-primary-hover hover:underline"
                >
                  詳しく見る
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
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
            <Reveal
              key={before}
              as="li"
              delay={index * 50}
              className="bg-ink p-7 transition-colors hover:bg-sumi"
            >
              <p className="text-sm text-ink-muted line-through decoration-ink-muted/50">
                {before}
              </p>
              <p className="mt-3 flex gap-2 font-mincho text-base">
                <ArrowRight className="mt-1 size-4 shrink-0 text-kohaku" aria-hidden="true" />
                <span className="jp-wrap">{after}</span>
              </p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10">
          <Link to="/services/meo" className="btn btn-on-ink">
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
        <div className="grid gap-16 md:gap-20">
          {cases.map((item, index) => (
            <Reveal
              key={item.shop}
              className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12"
            >
              <BeforeAfterSlider
                beforeSrc={item.before}
                afterSrc={item.after}
                beforeAlt={`${item.shop} のリニューアル前サイト`}
                afterAlt={`${item.shop} のリニューアル後サイト`}
                sizes="(min-width: 1024px) 36rem, calc(100vw - 2.5rem)"
                className={index % 2 === 1 ? "lg:order-2" : undefined}
              />
              <div>
                <p className="text-xs tracking-[0.2em] text-primary tabular-nums">
                  CASE {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="jp-wrap mt-3 font-mincho text-2xl">{item.shop}</h3>
                <p className="mt-2 text-xs tracking-[0.12em] text-muted-foreground">{item.kind}</p>
                <dl className="mt-7 grid gap-5 text-sm leading-[1.9]">
                  <div>
                    <dt className="text-xs tracking-[0.2em] text-muted-foreground">課題</dt>
                    <dd className="jp-wrap mt-1.5">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.2em] text-muted-foreground">改善</dt>
                    <dd className="jp-wrap mt-1.5">{item.action}</dd>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <dt className="text-xs tracking-[0.2em] text-primary">結果</dt>
                    <dd className="jp-wrap mt-1.5 font-mincho text-base">{item.result}</dd>
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
                  ? "flex h-full flex-col border-2 border-primary bg-background p-6 shadow-[0_16px_40px_-28px_oklch(0.53_0.155_45/0.8)] sm:p-7 md:p-8"
                  : "flex h-full flex-col border border-border bg-background p-6 sm:p-7 md:p-8"
              }
            >
              {/* Fixed-height badge row so the three price lines stay on one
                  baseline whether or not a card is flagged. */}
              <div className="h-7">
                {plan.featured ? (
                  <span className="inline-block bg-primary px-3 py-1 text-[0.7rem] tracking-[0.2em] text-primary-foreground">
                    おすすめ
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 text-xs tracking-[0.2em] text-muted-foreground">{plan.name}</h3>
              <p className="mt-3.5 font-mincho text-[1.7rem] leading-tight sm:text-3xl">
                {plan.price}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{plan.note}</p>
              <p className="jp-wrap mt-4 border-t border-border pt-4 text-sm leading-[1.9]">
                {plan.summary}
              </p>
              <ul className="mt-5 grid gap-2 text-sm">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Link
                  to="/"
                  hash="diagnosis"
                  className={
                    plan.featured
                      ? "btn btn-primary btn-sm w-full"
                      : "btn btn-outline btn-sm w-full"
                  }
                >
                  このプランで相談する
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="flow" eyebrow="FLOW" title="公開までの流れ">
        {/* Seven steps in a 2- or 4-column grid leave the last cell empty, and
            the grid's hairline background showed through it as a solid block.
            Letting the final step span the rest of its row closes the grid. */}
        <ol className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {flow.map(([no, title, body], index) => (
            <Reveal
              key={no}
              delay={index * 50}
              className="bg-background p-7 sm:last:col-span-2"
              as="li"
            >
              <p className="font-mincho text-sm text-primary tabular-nums">{no}</p>
              <h3 className="jp-wrap mt-3 font-mincho text-lg">{title}</h3>
              <p className="jp-wrap mt-2 text-sm leading-[1.9] text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link to="/" hash="diagnosis" className="btn btn-primary">
            まずは無料診断から
          </Link>
          <p className="text-xs text-muted-foreground">通常4〜8週間で公開まで進みます。</p>
        </Reveal>
      </Section>

      <Section id="reasons" tone="ink" eyebrow="WHY US" title="選ばれる理由">
        <div className="grid gap-px bg-ink-border md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, body], index) => (
            <Reveal
              key={title}
              delay={index * 50}
              className="bg-ink p-8 transition-colors hover:bg-sumi"
            >
              <p className="font-mincho text-sm text-kohaku tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="jp-wrap mt-4 font-mincho text-xl">{title}</h3>
              <p className="jp-wrap mt-3 text-sm leading-[1.9] text-ink-muted">{body}</p>
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
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
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
            <p className="jp-wrap mt-7 text-sm leading-[1.9] text-muted-foreground">
              お預かりする情報は、店舗名・現在のURL・ご連絡先のみです。
              しつこい営業のご連絡はいたしません。
            </p>
            {/* A restaurant owner already lives in LINE and on the phone; a
                seven-field form is the higher barrier of the three. */}
            <div className="mt-8 border border-border bg-secondary/50 p-6">
              <p className="jp-wrap font-mincho text-base">フォーム以外でのご相談も承ります</p>
              <p className="jp-wrap mt-2.5 text-sm leading-[1.9] text-muted-foreground">
                店舗名と現在のURLだけでも診断できます。
                写真やスクリーンショットもそのまま受け付けます。
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <LineButton className="btn-sm w-full">LINEで依頼する</LineButton>
                <PhoneLink className="btn btn-outline btn-sm w-full">
                  <Phone className="size-4" aria-hidden="true" />
                  <span className="tabular-nums">{PHONE_DISPLAY}</span>
                </PhoneLink>
              </div>
              <p className="mt-3.5 text-xs leading-relaxed text-muted-foreground">
                LINE ID：{LINE_ID}
                <br />
                {PHONE_HOURS}
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="border border-border bg-card p-6 md:p-9">
            <DiagnosisForm />
          </Reveal>
        </div>
      </Section>

      <Section id="faq" tone="muted" eyebrow="FAQ" title="よくあるご質問">
        <Reveal>
          <div className="mx-auto max-w-4xl border-t border-border">
            <Accordion type="single" collapsible>
              {faq.map(([question, answer], index) => (
                <AccordionItem key={question} value={`faq-${index}`}>
                  <AccordionTrigger className="jp-wrap text-left font-mincho text-base">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="jp-wrap text-sm leading-[1.9] text-muted-foreground">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
        <Reveal className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center gap-x-1.5 gap-y-2 text-sm text-muted-foreground">
          <ArrowRight className="mr-1.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>他にご不明な点は、</span>
          <PhoneLink className="focus-ring inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline">
            <Phone className="size-4 shrink-0" aria-hidden="true" />
            <span className="tabular-nums">{PHONE_DISPLAY}</span>
          </PhoneLink>
          <span>・</span>
          <LineLink className="focus-ring inline-flex items-center gap-1.5 text-line underline-offset-4 hover:underline">
            <LineIcon className="size-4 shrink-0" />
            LINE
          </LineLink>
          <span>・</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="focus-ring text-primary underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          <span>までお気軽にどうぞ。</span>
        </Reveal>
      </Section>

      <section
        id="contact"
        className="scroll-mt-24 bg-ink px-5 py-20 text-ink-foreground md:px-8 md:py-28"
      >
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="jp-wrap font-mincho text-[clamp(1.6rem,6.2vw,1.95rem)] leading-[1.45] md:text-[3rem] md:leading-[1.35]">
            <span className="jp-phrase">お店の魅力を、</span>
            <span className="jp-phrase">Webでもっと伝えませんか？</span>
          </h2>
          <p className="jp-wrap mt-6 text-sm leading-[1.9] text-ink-muted md:text-base">
            まずは現状を拝見し、改善ポイントをご案内します。
          </p>
          {/* One dominant action, then the direct channels. Four equal buttons
              in a row read as a menu and dilute the diagnosis CTA. */}
          <div className="mt-9 flex justify-center md:mt-10">
            <Link to="/" hash="diagnosis" className="btn btn-primary w-full sm:w-auto">
              今のホームページを無料診断
            </Link>
          </div>
          <p className="mt-5 text-xs text-ink-muted">相談無料 ／ 2営業日以内にご返信 ／ 全国対応</p>

          <div className="mt-10 border-t border-ink-border pt-9">
            <p className="text-xs tracking-[0.2em] text-kohaku">または、直接ご連絡ください</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <PhoneLink className="btn btn-on-ink">
                <Phone className="size-4" aria-hidden="true" />
                <span className="font-mincho text-base tabular-nums">{PHONE_DISPLAY}</span>
              </PhoneLink>
              <LineButton />
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-on-ink">
                メールで相談する
              </a>
            </div>
            <p className="mt-5 text-xs text-ink-muted">{PHONE_HOURS}</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
