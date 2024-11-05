"use client";
import { type SignUpError } from "../types";
import { useActionState, useState } from "react";
import Link from "next/link";
import Form from "next/form";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { signup } from "./actions";
import { FormInputField, FormSubmitButton } from "@/components/forms";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignupPage() {
  const t = useTranslations("SignUnPage");

  const [isPassMatching, setIsPassMatching] = useState(true);
  const [passInput, setPassInput] = useState("");
  const [confirmPassInput, setConfirmPassInput] = useState("");

  const [loginState, loginAction, isPending] = useActionState(signup, {
    ok: false,
    errors: {},
  });

  const onBlur = () => {
    if (passInput && confirmPassInput) {
      setIsPassMatching(passInput === confirmPassInput);
    } else {
      setIsPassMatching(true);
    }
  };

  return (
    <Form action={loginAction} noValidate>
      <Card className="flex flex-col gap-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-3xl">{t("title")}</CardTitle>
          <CardDescription>
            <span>{t("description")}&nbsp;</span>
            <Link
              href="/auth/sign/in"
              className={cn(buttonVariants({ variant: "link" }), "px-0")}
            >
              {t("sign_in")} &rarr;
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
              t(`errors.${err as SignUpError}`),
            )}
          />

          <FormInputField
            label={t("password")}
            name="password"
            type="password"
            placeholder="· · · · · · · ·"
            value={passInput}
            onBlur={onBlur}
            onFocus={() => setIsPassMatching(true)}
            onChange={(e) => {
              setPassInput(e.target.value);
            }}
            errors={loginState.errors?.password?.map((err) =>
              t(`errors.${err as SignUpError}`),
            )}
          />

          <FormInputField
            label={t("confirm-password")}
            name="confirm-password"
            type="password"
            placeholder="· · · · · · · ·"
            value={confirmPassInput}
            onBlur={onBlur}
            onFocus={() => setIsPassMatching(true)}
            onChange={(e) => {
              setConfirmPassInput(e.target.value);
            }}
            errors={isPassMatching ? [] : [t(`errors.password_mismatch`)]}
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
