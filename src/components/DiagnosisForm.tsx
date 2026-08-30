import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  shopName: z.string().trim().min(1, "店舗名をご入力ください"),
  url: z.string().trim().min(1, "現在のURL、またはサイトがない場合は「なし」とご入力ください"),
  name: z.string().trim().min(1, "お名前をご入力ください"),
  contactType: z.enum(["email", "phone", "line"]),
  contact: z.string().trim().min(1, "ご連絡先をご入力ください"),
  message: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "個人情報の取り扱いについてご同意ください" }),
  }),
  /** Honeypot: real people never see this field, bots fill it in. */
  company: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

// The site is square-edged throughout; the shadcn defaults are rounded and only
// 36px tall, which is under a comfortable touch target on a phone.
const fieldClass =
  "min-h-12 rounded-none border-border bg-background px-3.5 shadow-none focus-visible:ring-2 focus-visible:ring-ring aria-invalid:border-destructive";

const contactMeta = {
  email: { label: "info@example.com", type: "email", autoComplete: "email", inputMode: "email" },
  phone: { label: "03-1234-5678", type: "tel", autoComplete: "tel", inputMode: "tel" },
  line: { label: "LINE ID", type: "text", autoComplete: "off", inputMode: "text" },
} as const;

function RequiredMark() {
  return (
    <span className="ml-1.5 bg-primary/10 px-1.5 py-0.5 text-[0.65rem] tracking-wider text-primary">
      必須
    </span>
  );
}

export function DiagnosisForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      shopName: "",
      url: "",
      name: "",
      contactType: "email",
      contact: "",
      message: "",
      company: "",
    },
  });

  const contactType = watch("contactType");
  const contactField = contactMeta[contactType ?? "email"];

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast.success("診断のご依頼を受け付けました", {
      description: "2営業日以内に、現状の改善ポイントをまとめてご連絡します。",
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
      <div className="grid gap-2">
        <Label htmlFor="diag-shop" className="flex items-center">
          店舗名
          <RequiredMark />
        </Label>
        <Input
          id="diag-shop"
          className={fieldClass}
          placeholder="居酒屋 味楽"
          autoComplete="organization"
          aria-invalid={errors.shopName ? true : undefined}
          aria-describedby={errors.shopName ? "diag-shop-error" : undefined}
          {...register("shopName")}
        />
        {errors.shopName ? (
          <p id="diag-shop-error" role="alert" className="text-sm text-destructive">
            {errors.shopName.message}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="diag-url" className="flex items-center">
          現在のホームページURL
          <RequiredMark />
        </Label>
        <Input
          id="diag-url"
          className={fieldClass}
          placeholder="https://example.com"
          inputMode="url"
          autoComplete="url"
          aria-invalid={errors.url ? true : undefined}
          aria-describedby={errors.url ? "diag-url-error" : "diag-url-hint"}
          {...register("url")}
        />
        <p id="diag-url-hint" className="text-xs text-muted-foreground">
          サイトがない場合は「なし」とご記入ください。
        </p>
        {errors.url ? (
          <p id="diag-url-error" role="alert" className="text-sm text-destructive">
            {errors.url.message}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="diag-name" className="flex items-center">
          お名前
          <RequiredMark />
        </Label>
        <Input
          id="diag-name"
          className={fieldClass}
          placeholder="山田 太郎"
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "diag-name-error" : undefined}
          {...register("name")}
        />
        {errors.name ? (
          <p id="diag-name-error" role="alert" className="text-sm text-destructive">
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-[10rem_minmax(0,1fr)]">
        <div className="grid gap-2">
          <Label htmlFor="diag-contact-type">ご連絡方法</Label>
          <Select
            value={contactType}
            onValueChange={(value) => setValue("contactType", value as FormValues["contactType"])}
          >
            <SelectTrigger id="diag-contact-type" className="min-h-12 rounded-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="email">メール</SelectItem>
              <SelectItem value="phone">電話</SelectItem>
              <SelectItem value="line">LINE</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="diag-contact" className="flex items-center">
            ご連絡先
            <RequiredMark />
          </Label>
          <Input
            id="diag-contact"
            className={fieldClass}
            type={contactField.type}
            inputMode={contactField.inputMode}
            autoComplete={contactField.autoComplete}
            placeholder={contactField.label}
            aria-invalid={errors.contact ? true : undefined}
            aria-describedby={errors.contact ? "diag-contact-error" : undefined}
            {...register("contact")}
          />
          {errors.contact ? (
            <p id="diag-contact-error" role="alert" className="text-sm text-destructive">
              {errors.contact.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="diag-message">メッセージ（任意）</Label>
        <Textarea
          id="diag-message"
          rows={4}
          className="rounded-none border-border bg-background px-3.5 py-3 shadow-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="お悩みやご希望をお書きください。"
          {...register("message")}
        />
      </div>

      {/* Honeypot. Hidden from people and from screen readers, visible to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="diag-company">会社名（入力しないでください）</label>
        <input id="diag-company" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="diag-consent"
          className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed"
        >
          <input
            id="diag-consent"
            type="checkbox"
            className="focus-ring mt-px size-6 shrink-0 accent-primary"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "diag-consent-error" : undefined}
            {...register("consent")}
          />
          <span className="text-muted-foreground">
            ご入力いただいた個人情報は、診断結果のご連絡およびご相談対応にのみ利用します。
            上記に同意します。
          </span>
        </label>
        {errors.consent ? (
          <p id="diag-consent-error" role="alert" className="text-sm text-destructive">
            {errors.consent.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            送信中…
          </>
        ) : (
          "無料Web診断を依頼する"
        )}
      </button>
      <p className="text-center text-xs leading-relaxed text-muted-foreground">
        ご相談は無料です。営業のみのご連絡はいたしません。
        <br />
        2営業日以内に、担当者よりご返信します。
      </p>
    </form>
  );
}
