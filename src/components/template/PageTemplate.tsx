import { cn } from "@/lib/utils";

export function PageTemplate({ children, className }: PropsWithChildren) {
  return (
    <div
      className={cn(
        "flex min-h-screen w-full flex-col items-center dark:bg-gradient-to-br dark:from-black dark:to-stone-800 dark:text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}
