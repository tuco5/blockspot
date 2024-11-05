"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import useBreakPoints from "@/hooks/useBreakPoints";

interface LogoProps extends Props {
  href?: string;
}
export function Logo({ className, href = "/" }: LogoProps) {
  const isPhone = useBreakPoints("sm");

  if (isPhone) {
    return (
      <Link href={href} className={cn("font-semibold", className)}>
        b<span className="text-orange-500 dark:text-rose-500">spot</span>
      </Link>
    );
  }

  return (
    <Link href={href} className={cn("font-semibold", className)}>
      block<span className="text-orange-500 dark:text-rose-500">spot</span>
    </Link>
  );
}
