import { useWindowSize } from "usehooks-ts";

export type BP = "sm" | "md" | "lg" | "xl" | "2xl";
export default function useBreakPoints(bp: BP): boolean {
  const { width = 0, height = 0 } = useWindowSize();

  if (bp === "sm") return width < 640;
  if (bp === "md") return width < 768;
  if (bp === "lg") return width < 1024;
  if (bp === "xl") return width < 1280;
  if (bp === "2xl") return width < 1536;

  return false;
}
