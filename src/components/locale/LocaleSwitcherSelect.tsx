"use client";
import { useTransition } from "react";
import { type Locale } from "@/server/i18n/config";
import { setUserLocale } from "@/server/i18n/service";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";

type Item = { label: string; value: string };
interface LocaleSwitcherSelectProps {
  defaultValue: string;
  items: Item[];
  label: string;
}

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: LocaleSwitcherSelectProps) {
  const [_, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(async () => {
      await setUserLocale(locale);
    });
  }

  return (
    <div className="relative">
      <Select defaultValue={defaultValue} onValueChange={onChange}>
        <SelectTrigger aria-label={label} withIcon={false} className="h-8">
          <SelectValue>
            <Languages className="h-4 w-4" />
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
