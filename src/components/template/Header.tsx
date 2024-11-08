import { createClient } from "@/server/supabase/server";
import { LocaleSwitcher } from "@/components/locale";
import { DarkModeToggle } from "@/components/theme/DarkModeToggle";
import { Avatar, Logo } from ".";

export async function Header() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <header className="flex w-full justify-center border-b dark:bg-black/30">
      <div className="dark:primary flex w-full max-w-screen-lg items-center justify-between p-2">
        <Logo className="text-2xl" href={data.user ? "/dashboard" : "/"} />
        <div className="flex items-center gap-2">
          <div className="mr-2 border-r pr-4">
            <Avatar user={data.user} />
          </div>
          <DarkModeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
