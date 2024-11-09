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
        <SelectTrigger
          aria-label={label}
          withIcon={false}
          className="flex h-8 w-8 justify-center rounded-full p-0 dark:bg-indigo-900/40"
        >
          <SelectValue>
            <Languages className="h-3.5 w-3.5" />
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="dark:bg-indigo-950">
          {items.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="dark:focus:bg-indigo-900"
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
