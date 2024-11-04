import { cn } from "@/lib/utils";

export default function Title({ children, className }: PropsWithChildren) {
  return (
    <h1 className={cn("text-2xl font-bold tracking-wider", className)}>
      {children}
    </h1>
  );
}
