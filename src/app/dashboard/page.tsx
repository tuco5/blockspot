import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { MoveRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { getMyHubs } from "@/server/db";
import DashboardHubsList from "./_components/DashboardHubsList";

export default async function DashboardPage() {
  const t = await getTranslations("DashboardPage");

  const myHubs = await getMyHubs();

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

      <DashboardHubsList hubs={myHubs} />
    </main>
  );
}
