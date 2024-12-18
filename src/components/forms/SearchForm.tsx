"use client";
import Form from "next/form";
import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input, type InputProps } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

interface SearchFormProps extends InputProps {
  onClear?: () => void;
  action?: NonNullable<
    string | ((formData: FormData) => void | Promise<void>) | undefined
  >;
}
export function SearchForm({
  className,
  onClear,
  action = "",
  ...props
}: SearchFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleClear() {
    if (onClear) onClear();
    inputRef.current?.focus();
  }

  return (
    <Form className={cn("relative w-full max-w-80", className)} action={action}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
      <Input
        ref={inputRef}
        id="search"
        name="search"
        type="search"
        className="rounded-full bg-card pl-8"
        {...props}
      />
      {props.value ? (
        <Button
          variant="ghost"
          className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center bg-accent p-0"
          type="button"
          onClick={handleClear}
        >
          <X className="h-4 w-4" />
        </Button>
      ) : null}
    </Form>
  );
}
