"use client";
import { Inbox } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export function NotificationsBtn() {
  const t = useTranslations("Notifications");
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="icon" variant="ghost">
          <Inbox className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{t("title")}</DrawerTitle>
          <DrawerDescription>{t("description")}</DrawerDescription>
        </DrawerHeader>

        <div className="flex min-h-[10vh] w-full flex-col items-center justify-center">
          <p className="italic text-muted-foreground">{t("empty")}</p>
        </div>

        <DrawerFooter className="flex flex-col items-center">
          <DrawerClose asChild>
            <Button variant="outline">Cerrar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
