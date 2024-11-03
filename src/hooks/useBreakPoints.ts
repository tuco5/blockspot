import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

export type BP = "sm" | "md" | "lg" | "xl" | "2xl";
export default function useBreakPoints(bp: BP): boolean {
  const { width = 0 } = useWindowSize();
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    if (bp === "2xl") setIsResponsive(width < 1536);
    if (bp === "xl") setIsResponsive(width < 1280);
    if (bp === "lg") setIsResponsive(width < 1024);
    if (bp === "md") setIsResponsive(width < 768);
    if (bp === "sm") setIsResponsive(width < 640);
  }, []);

  return isResponsive;
}
