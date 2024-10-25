"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const carouselItems = [
  "canchas",
  "terrazas",
  "auditorios",
  "salas",
  "laboratorios",
];

export default function HeroCarousel() {
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
      <CarouselContent className="h-14">
        {carouselItems.map((item) => (
          <CarouselItem key={item}>
            <span className="text-orange-500">{item}</span>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
