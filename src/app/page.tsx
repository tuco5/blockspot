import { useTranslations } from "next-intl";
import { PageTemplate, Footer, Header } from "@/components/template";
import HeroCarousel from "./_components/HeroCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <PageTemplate>
      <Header />
      <Hero />
      <Footer />
    </PageTemplate>
  );
}

function Hero() {
  const t = useTranslations("HomePage");
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="flex h-1/2 flex-col gap-4 p-8">
        <h1 className="flex flex-wrap items-center text-5xl font-semibold tracking-tight">
          <span>{t("hero")}&nbsp;</span>
          <HeroCarousel />
        </h1>

        <p className="text-wrap text-2xl text-slate-500 dark:text-slate-300">{t("subtitulo")}</p>

        <div className="flex w-full flex-col items-stretch gap-6 p-8 sm:flex-row sm:pl-0">
          <Button asChild variant="primary" size="lg" rounded="full">
            <Link href="/auth">{t("cta")}</Link>
          </Button>

          <Button asChild variant="secondary" size="lg" rounded="full">
            <Link href="/">{t("precios")}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
