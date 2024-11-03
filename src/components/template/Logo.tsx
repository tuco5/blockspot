import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps extends Props {
  href?: string;
}
export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link href={href} className={cn("font-semibold", className)}>
      block<span className="text-orange-500 dark:text-rose-500">spot</span>
    </Link>
  );
}
