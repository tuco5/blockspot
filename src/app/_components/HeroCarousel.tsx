"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";

const carouselItems = [
  "canchas",
  "terrazas",
  "auditorios",
  "salas",
  "laboratorios",
] as const;

export default function HeroCarousel() {
  const t = useTranslations("HomePage.espacios");

  const styles = [
    "text-rose-500",
    "text-cyan-500",
    "text-pink-500",
    "text-emerald-500",
    "text-purple-500",
  ];

  return (
    <Carousel
      className="max-w-sm"
      orientation="vertical"
      plugins={[Autoplay({ delay: 2000 })]}
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="h-16">
        {carouselItems.map((item, i) => (
          <CarouselItem key={item}>
            <span className={cn(styles[i])}>{t(item)}</span>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
