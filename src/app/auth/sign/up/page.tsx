"use client";
import { type SignUpError } from "../types";
import { useActionState, useRef } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpSchema } from "./schema";
import { signup } from "./actions";
import { cn } from "@/lib/utils";
import { FormPasswordField, FormSubmitButton } from "@/components/forms";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
  const t = useTranslations("SignUnPage");

  const [_, signupAction, isPending] = useActionState(signup, {
    ok: undefined,
    message: undefined,
  });

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
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
      <form action={signupAction} ref={formRef}>
        <Card className="flex flex-col gap-1">
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
          <CardContent className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("name")}</FormLabel>
                  <FormControl>
                    <Input placeholder="Jhon Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
