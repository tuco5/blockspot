import { Header, PageTemplate } from "@/components/template";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <PageTemplate>
      <Header />
      {children}
    </PageTemplate>
  );
}
