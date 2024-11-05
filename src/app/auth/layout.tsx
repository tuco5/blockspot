import { PageTemplate, Header } from "@/components/template";
export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <PageTemplate>
      <Header />
      {children}
    </PageTemplate>
  );
}
