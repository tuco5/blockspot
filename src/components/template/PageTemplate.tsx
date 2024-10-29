import { cn } from "@/lib/utils";

export function PageTemplate({ children, className }: PropsWithChildren) {
  return (
    <div
      className={cn(
        "flex min-h-screen w-full flex-col items-center dark:bg-gradient-to-br dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950 dark:text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}
