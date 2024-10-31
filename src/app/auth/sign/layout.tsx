"use client";
import React from "react";
import { Header, PageTemplate } from "@/components/template";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Tab = {
  name: keyof IntlMessages["AuthLayout"];
  href: string;
  current: boolean;
};
const tabs: Tab[] = [
  {
    name: "sign-in",
    href: "/auth/sign/in",
    current: false,
  },
  {
    name: "sign-up",
    href: "/auth/sign/up",
    current: false,
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("AuthLayout");

  const pathname = usePathname();

  return (
    <PageTemplate>
      <Header />
      <main className="mt-10 flex h-[70vh] w-full justify-center">
        <div className="flex w-[400px] flex-col gap-2">
          <div className="flex w-full gap-2 rounded-lg bg-slate-100 p-2 dark:bg-black/40">
            {tabs.map((tab) => {
              return (
                <Link
                  key={tab.name}
                  className={cn(
                    "w-1/2 rounded-lg p-2 text-center",
                    pathname === tab.href
                      ? "bg-slate-300 dark:bg-indigo-950"
                      : "",
                  )}
                  href={tab.href}
                >
                  {t(tab.name)}
                </Link>
              );
            })}
          </div>
          <div>{children}</div>
        </div>
      </main>
    </PageTemplate>
  );
}
