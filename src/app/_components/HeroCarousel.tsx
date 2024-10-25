"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
        {carouselItems.map((item) => (
          <CarouselItem key={item}>
            <span className="text-orange-500">{t(item)}</span>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
