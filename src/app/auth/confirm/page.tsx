import { MainContent } from "@/components/template";
import { useTranslations } from "next-intl";

export default function ConfirmPage() {
  const t = useTranslations("ConfirmPage");
  return (
    <MainContent className="h-[50vh] justify-center">
      <h1 className="text-wrap text-center text-5xl font-semibold tracking-tight text-primary">
        {t("title")}
      </h1>
      <p className="text-center text-2xl">{t("subtitle")}</p>
    </MainContent>
  );
}
