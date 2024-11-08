import { type User } from "@supabase/supabase-js";
import { createClient } from "@/server/supabase/server";
import { LocaleSwitcher } from "@/components/locale";
import { DarkModeToggle } from "@/components/theme/DarkModeToggle";
import { Avatar, Logo } from ".";
import { Button } from "../ui/button";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Notifications from "../messages/Notifications";

function HeaderContainer({ children }: Children) {
  return (
    <header className="flex w-full justify-center border-b dark:bg-black/30">
      <div className="dark:primary flex w-full max-w-screen-lg items-center justify-between p-2">
        {children}
      </div>
    </header>
  );
}

export async function Header() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <HeaderContainer>
      <Logo className="text-2xl" href={data.user ? "/dashboard" : "/"} />
      {data?.user ? (
        <HeaderContentWithUser user={data.user} />
      ) : (
        <HeaderContentNoUser />
      )}
    </HeaderContainer>
  );
}

function HeaderContentWithUser({ user }: { user: User }) {
  return (
    <div className="flex items-center gap-4">
      <Notifications />
      <div className="mr-2 border-l pl-4">
        <Avatar user={user} />
      </div>
    </div>
  );
}

async function HeaderContentNoUser() {
  const t = await getTranslations("HomePage");
  return (
    <div className="flex items-center gap-4">
      <DarkModeToggle />
      <LocaleSwitcher />
      <div className="mr-2 border-l pl-4">
        <Button
          asChild
          variant="primary"
          rounded="full"
          className="hidden h-8 sm:flex"
        >
          <Link href="/auth/sign/in">{t("sign_in")}</Link>
        </Button>
      </div>
    </div>
  );
}
