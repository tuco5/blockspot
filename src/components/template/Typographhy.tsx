import { cn } from "@/lib/utils";

export function Title({ children, className }: PropsWithChildren) {
  return (
    <h1 className={cn("text-2xl font-semibold", className)}>{children}</h1>
  );
}
