"use client";
import { useActionState } from "react";
import { useTranslations } from "next-intl";
import Form from "next/form";
import { FormState, signin } from "../actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InputField } from "@/components/common/InputField";

type FormError = keyof IntlMessages["LoginPage"]["form"]["errors"];

export default function SignInForm() {
  const [loginState, loginAction] = useActionState(signin, {
    status: "idle",
    fieldErrors: {},
  });

  const t = useTranslations("LoginPage");

  return (
    <Form action={loginAction} noValidate>
      <Card className="flex flex-col gap-4">
        <CardHeader>
          <CardTitle className="text-3xl">{t("form.title")}</CardTitle>
          <CardDescription>{t("form.description")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <InputField label={t("form.email")} name="email" type="email" required />

          <InputField label={t("form.password")} name="password" type="password" required />

          <Message state={loginState} />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="primary" rounded="full" type="submit" className="px-10 py-[18px] text-xl">
            {t("login")}
          </Button>
        </CardFooter>
      </Card>
    </Form>
  );
}

function Message({ state }: { state: FormState }) {
  if (state.status === "error" && state.fieldErrors.form)
    return <p className="text-red-500">Error: {state.fieldErrors.form}</p>;

  return null;
}
