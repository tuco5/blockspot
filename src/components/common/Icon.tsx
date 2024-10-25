import { cn } from "@/lib/utils";

type Icon = "vercel";
interface IconProps extends Props {
  icon: Icon;
}
export function Icon({ className, icon }: IconProps) {
  switch (icon) {
    case "vercel":
      return <VercelIcon className={className} />;
  }
}

function VercelIcon({ className }: Props) {
  return (
    <svg
      className={cn("h-8 w-8", className)}
      data-testid="geist-icon"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      fill="currentcolor;"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1L16 15H0L8 1Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
