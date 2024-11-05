import { useTranslations } from "next-intl";
export default function ConfirmPage() {
  const t = useTranslations("ConfirmPage");
  return (
    <main className="flex h-[50vh] flex-col items-center justify-center gap-2">
      <h1 className="text-wrap text-center text-5xl font-semibold tracking-tight text-primary">
        {t("title")}
      </h1>
      <p className="text-center text-2xl">{t("subtitle")}</p>
    </main>
  );
}
