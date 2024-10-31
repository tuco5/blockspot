import { PageTemplate, Header } from "@/components/template";
import { useTranslations } from "next-intl";
export default function ConfirmPage() {
  const t = useTranslations("ConfirmPage");
  return (
    <PageTemplate>
      <Header />
      <main className="flex h-[50vh] flex-col items-center justify-center gap-2">
        <h1 className="text-center text-4xl text-primary">{t("title")}</h1>
        <p className="text-center text-2xl">{t("subtitle")}</p>
      </main>
    </PageTemplate>
  );
}
