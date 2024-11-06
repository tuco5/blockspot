"use client";
import Form from "next/form";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export function SearchGroup({ className }: Props) {
  return (
    <Form
      className={cn("relative w-full max-w-80", className)}
      action="/dashboard/groups"
    >
      <Input
        id="search"
        name="search"
        placeholder="Buscar un grupo..."
        type="search"
        className="rounded-full bg-card pl-8"
      />
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
    </Form>
  );
}
