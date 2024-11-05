import { useTranslations } from "next-intl";
import { PageTemplate, Footer, Header } from "@/components/template";
import HeroCarousel from "./_components/HeroCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClient } from "@/server/supabase/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const supabase = await createClient();
  const auth = await supabase.auth.getSession();

  if (auth.data.session) return redirect("/dashboard");

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
    <main className="mt-8 flex h-[90vh] w-full justify-center sm:mt-0 sm:items-center">
      <div className="flex h-1/2 flex-col gap-4 p-8">
        <h1 className="flex flex-wrap items-center text-5xl font-semibold tracking-tight">
          <span>{t("hero")}&nbsp;</span>
          <HeroCarousel />
        </h1>

        <p className="text-wrap text-2xl text-slate-500 dark:text-slate-300">
          {t("subtitulo")}
        </p>

        <div className="flex w-full flex-col items-stretch gap-6 p-8 sm:flex-row sm:pl-0">
          <Button asChild variant="primary" size="lg" rounded="full">
            <Link href="/auth/sign/up">{t("cta")}</Link>
          </Button>

          <Button asChild variant="secondary" size="lg" rounded="full">
            <Link href="/">{t("precios")}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
