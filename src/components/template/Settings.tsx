import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Settings } from "lucide-react";
import { useTranslations } from "next-intl";
import { DarkModeToggle } from "../theme/DarkModeToggle";
import { LocaleSwitcher } from "../locale";
import { Separator } from "../ui/separator";

export function SettingsBtn() {
  const t = useTranslations("Settings");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Settings className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{t("title")}</SheetTitle>
          <SheetDescription>{t("description")}</SheetDescription>
          <Separator className="my-4" />
          <div className="flex justify-center gap-4 p-2 sm:justify-start">
            <DarkModeToggle />
            <LocaleSwitcher />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
