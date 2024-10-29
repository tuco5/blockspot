import { LocaleSwitcher } from "@/components/locale";
import { DarkModeToggle } from "@/components/theme/DarkModeToggle";
import { Logo } from "@/components/common";

export function Header() {
  return (
    <header className="flex w-full justify-center border-b">
      <div className="dark:primary flex w-full max-w-screen-lg items-center justify-between p-4">
        <Logo className="text-2xl" />
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
