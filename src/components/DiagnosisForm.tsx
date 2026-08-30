import { zodResolver } from "@hookform/resolvers/zod";
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
  shopName: z.string().min(1, "店舗名をご入力ください"),
  url: z.string().min(1, "現在のURLをご入力ください"),
  name: z.string().min(1, "お名前をご入力ください"),
  contactType: z.enum(["email", "phone", "line"]),
  contact: z.string().min(1, "ご連絡先をご入力ください"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

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
    },
  });

  const contactType = watch("contactType");

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
        <Label htmlFor="diag-shop">店舗名</Label>
        <Input id="diag-shop" placeholder="居酒屋 味楽" {...register("shopName")} />
        {errors.shopName ? (
          <p className="text-sm text-destructive">{errors.shopName.message}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="diag-url">現在のホームページURL</Label>
        <Input id="diag-url" placeholder="https://example.com" {...register("url")} />
        <p className="text-xs text-muted-foreground">
          サイトがない場合は「なし」とご記入ください。
        </p>
        {errors.url ? <p className="text-sm text-destructive">{errors.url.message}</p> : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="diag-name">お名前</Label>
        <Input id="diag-name" placeholder="山田 太郎" {...register("name")} />
        {errors.name ? <p className="text-sm text-destructive">{errors.name.message}</p> : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-[10rem_minmax(0,1fr)]">
        <div className="grid gap-2">
          <Label htmlFor="diag-contact-type">ご連絡方法</Label>
          <Select
            value={contactType}
            onValueChange={(value) => setValue("contactType", value as FormValues["contactType"])}
          >
            <SelectTrigger id="diag-contact-type" className="min-h-11">
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
          <Label htmlFor="diag-contact">ご連絡先</Label>
          <Input
            id="diag-contact"
            placeholder={
              contactType === "phone"
                ? "03-1234-5678"
                : contactType === "line"
                  ? "LINE ID"
                  : "info@example.com"
            }
            {...register("contact")}
          />
          {errors.contact ? (
            <p className="text-sm text-destructive">{errors.contact.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="diag-message">メッセージ（任意）</Label>
        <Textarea
          id="diag-message"
          rows={4}
          placeholder="お悩みやご希望をお書きください。"
          {...register("message")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-13 items-center justify-center bg-primary px-6 text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isSubmitting ? "送信中…" : "無料Web診断を依頼する"}
      </button>
      <p className="text-xs text-muted-foreground">
        ご相談は無料です。営業のみのご連絡はいたしません。
      </p>
    </form>
  );
}
