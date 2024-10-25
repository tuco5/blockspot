import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: Props) {
  return (
    <Link href="/" className={cn("font-semibold", className)}>
      block<span className="text-orange-500">spot</span>
    </Link>
  );
}
