"use client";
import { useActionState } from "react";
import { useTranslations } from "next-intl";
import Form from "next/form";
import { FormState, signin } from "./actions";
import { Button } from "@/components/ui/button";
import { FadeLoader } from "react-spinners";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputField } from "@/components/common/InputField";

type SigninError = keyof IntlMessages["SignInPage"]["errors"];

export default function SigninPage() {
  const [loginState, loginAction, isPending] = useActionState(signin, {
    ok: false,
    errors: {},
  });

  const t = useTranslations("SignInPage");

  console.log(loginState.errors?.password);

  return (
    <Form action={loginAction} noValidate>
      <Card className="flex flex-col gap-4">
        <CardHeader>
          <CardTitle className="text-3xl">{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <InputField
            required
            label={t("email")}
            name="email"
            type="email"
            placeholder="jhon.doe@example.com"
            errors={loginState.errors?.email?.map((err) =>
              t(`errors.${err as SigninError}`),
            )}
          />

          <InputField
            label={t("password")}
            name="password"
            type="password"
            placeholder="********"
            required
            errors={loginState.errors?.password?.map((err) =>
              t(`errors.${err as SigninError}`),
            )}
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          {isPending ? (
            <FadeLoader
              color="orange"
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

function ErrorMessage({ errors }: { errors?: string[] }) {
  if (!errors) return null;

  return errors.map((error) => <p className="text-red-500">Error: {error}</p>);
}
