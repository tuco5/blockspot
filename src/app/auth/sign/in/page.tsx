"use client";
import { type SignInError } from "../types";
import { useActionState, useRef } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { signInSchema, type SignInSchema } from "./schema";
import { signin } from "./actions";
import { FormPasswordField, FormSubmitButton } from "@/components/forms";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SigninPage() {
  const t = useTranslations("SignInPage");

  const [_, loginAction, isPending] = useActionState(signin, {
    ok: false,
    errors: {},
  });

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
    formRef.current?.requestSubmit();
  };

  return (
    <Form {...form}>
      <form action={loginAction} ref={formRef}>
        <Card className="flex flex-col gap-1">
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
          <CardContent className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input placeholder="jhon.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("password")}</FormLabel>
                  <FormControl>
                    <FormPasswordField
                      placeholder="· · · · · · · ·"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-center">
            <FormSubmitButton
              isPending={isPending}
              onClick={form.handleSubmit(onSubmit)}
            >
              {t("button")}
            </FormSubmitButton>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
