import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { MoveRight, Plus } from "lucide-react";
import { createClient } from "@/server/supabase/server";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { db } from "@/server/db";
import { redirect } from "next/navigation";
import DashboardHubsList from "./_components/DashboardHubsList";

export default async function DashboardPage() {
  const t = await getTranslations("DashboardPage");

  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();

  if (!auth.user) redirect("/auth/sign/in");

  const user = await db.user.findUnique({
    where: { id: auth.user.id },
    include: { memberOf: true, ownerOf: true },
  });

  return (
    <main className="flex w-full max-w-screen-lg flex-col items-center gap-6 px-2 py-6">
      <div className="flex w-full max-w-screen-md justify-between gap-8">
        <Link
          href="/dashboard/hubs/new"
          className={cn(buttonVariants({ variant: "primary", rounded: "md" }))}
        >
          <Plus />
          <span>{t("new_hub")}</span>
        </Link>
        <Link
          href="/dashboard/hubs"
          className={cn(
            buttonVariants({ variant: "secondary", rounded: "md" }),
          )}
        >
          <span>{t("join_hub")}</span>
          <MoveRight />
        </Link>
      </div>

      <DashboardHubsList hubs={user?.ownerOf ?? []} />
    </main>
  );
}
