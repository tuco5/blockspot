"use client";
import { type SignInError } from "../types";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import Form from "next/form";
import { signin } from "./actions";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormInputField, FormSubmitButton } from "@/components/forms";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SigninPage() {
  const [loginState, loginAction, isPending] = useActionState(signin, {
    ok: false,
    errors: {},
  });

  const t = useTranslations("SignInPage");

  return (
    <Form action={loginAction} noValidate>
      <Card className="flex flex-col gap-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-3xl">{t("title")}</CardTitle>
          <CardDescription>
            <span>{t("description")}&nbsp;</span>
            <Link
              href="/auth/sign/up"
              className={cn(buttonVariants({ variant: "link" }), "px-0")}
            >
              {t("sign_up")} &rarr;
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          <FormInputField
            label={t("email")}
            name="email"
            type="email"
            placeholder="jhon.doe@example.com"
            errors={loginState.errors?.email?.map((err) =>
              t(`errors.${err as SignInError}`),
            )}
          />

          <FormInputField
            label={t("password")}
            name="password"
            type="password"
            placeholder="· · · · · · · ·"
            errors={loginState.errors?.password?.map((err) =>
              t(`errors.${err as SignInError}`),
            )}
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <FormSubmitButton isPending={isPending}>
            {t("button")}
          </FormSubmitButton>
        </CardFooter>
      </Card>
    </Form>
  );
}
