"use client";
import { useActionState } from "react";
import { useTranslations } from "next-intl";
import Form from "next/form";
import { FormState, signin } from "./actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputField } from "@/components/common/InputField";

export default function SigninPage() {
  const [loginState, loginAction] = useActionState(signin, {
    status: "idle",
    fieldErrors: {},
  });

  const t = useTranslations("SignInPage");

  return (
    <Form action={loginAction} noValidate>
      <Card className="flex flex-col gap-4">
        <CardHeader>
          <CardTitle className="text-3xl">{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <InputField label={t("email")} name="email" type="email" required />

          <InputField
            label={t("password")}
            name="password"
            type="password"
            required
          />

          <Message state={loginState} />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="primary"
            rounded="full"
            type="submit"
            className="px-10 py-[18px] text-xl"
          >
            {t("button")}
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
