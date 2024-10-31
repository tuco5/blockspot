"use client";
import { useActionState } from "react";
import { useTranslations } from "next-intl";
import Form from "next/form";
import { FadeLoader } from "react-spinners";
import { type SignInError } from "../types";
import { signin } from "./actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormInputField } from "@/components/forms";

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
          <CardDescription>{t("description")}</CardDescription>
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
          {isPending ? (
            <FadeLoader
              color="hsl(var(--primary))"
              height={5}
              width={5}
              margin={0.2}
              radius={4}
            />
          ) : (
            <Button
              variant="primary"
              rounded="full"
              type="submit"
              className="px-10 py-[18px] text-xl"
            >
              {t("button")}
            </Button>
          )}
        </CardFooter>
      </Card>
    </Form>
  );
}
