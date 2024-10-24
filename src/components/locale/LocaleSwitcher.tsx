import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { Locale, locales } from "@/server/i18n/config";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale() as Locale;

  return (
    <LocaleSwitcherSelect
      defaultValue={t(locale)}
      items={locales.map((l) => ({ value: l, label: t(l) }))}
      label={t("label")}
    />
  );
}
