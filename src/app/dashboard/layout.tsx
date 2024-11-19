import { Header, PageTemplate } from "@/components/template";
import { redirect } from "next/navigation";
import { SidebarMenu } from "@/components/template/SidebarMenu";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { createClient } from "@/server/supabase/server";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/");

  return (
    <SidebarProvider>
      <SidebarMenu />
      <PageTemplate>
        <SidebarTrigger />
        <Header />
        {children}
      </PageTemplate>
    </SidebarProvider>
  );
}
