import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./_components/SignInForm";
import SignUpForm from "./_components/SignUpForm";
import { Header, PageTemplate } from "@/components/template";

export default function LoginPage() {
  const t = useTranslations("LoginPage");
  return (
    <PageTemplate>
      <Header />
      <main className="mt-10 flex h-[70vh] w-full justify-center">
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="w-full justify-center">
            <TabsTrigger className="w-1/2" value="login">
              {t("login")}
            </TabsTrigger>
            <TabsTrigger className="w-1/2" value="signup">
              {t("signup")}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <SignInForm />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </main>
    </PageTemplate>
  );
}
