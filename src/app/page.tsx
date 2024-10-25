import { LocaleSwitcher } from "@/components/locale";
import { DarkModeToggle } from "@/components/theme/DarkModeToggle";
import { useTranslations } from "next-intl";
import { PageTemplate, Footer } from "@/components/template";
import { Logo } from "@/components/common";
import HeroCarousel from "./_components/HeroCarousel";

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
          <span>Gestiona y reserva&nbsp;</span>
          <HeroCarousel />
        </h1>

        <p className="text-wrap text-2xl text-stone-400">
          Tu solución definitiva para la gestión de espacios compartidos.
        </p>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex w-full justify-between border-b">
      <div className="flex w-full max-w-screen-lg items-center justify-between bg-stone-600/10 p-4">
        <Logo className="text-xl" />
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
