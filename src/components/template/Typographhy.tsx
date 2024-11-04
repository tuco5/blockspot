import { cn } from "@/lib/utils";

export function Title({ children, className }: PropsWithChildren) {
  return (
    <h1 className={cn("text-3xl font-bold tracking-wide", className)}>
      {children}
    </h1>
  );
}
