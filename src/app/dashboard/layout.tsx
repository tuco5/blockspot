import { Header, PageTemplate } from "@/components/template";
import { createClient } from "@/server/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/");

  return (
    <PageTemplate>
      <Header />
      {children}
    </PageTemplate>
  );
}
