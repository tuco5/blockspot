import { LocaleSwitcher } from "@/components/locale";
import { DarkModeToggle } from "@/components/theme/DarkModeToggle";
import { Logo, Avatar } from "@/components/common";

export function Header() {
  return (
    <header className="flex w-full justify-center border-b dark:bg-black/30">
      <div className="dark:primary flex w-full max-w-screen-lg items-center justify-between p-4">
        <Logo className="text-2xl" />
        <div className="flex items-center gap-2">
          <div className="mr-2 border-r pr-4">
            <Avatar />
          </div>
          <DarkModeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
