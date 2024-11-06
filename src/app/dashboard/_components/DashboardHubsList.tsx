"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { SearchForm } from "@/components/forms";
import { HubsList, type HubsListProps } from "@/components/template";
import { Hub } from "@prisma/client";

export default function DashboardHubsList({ hubs, ...props }: HubsListProps) {
  const t = useTranslations("DashboardPage");
  const [input, setInput] = useState("");

  const filteredHubs = hubs.filter(
    (hub: Hub) =>
      hub.name.toLowerCase().includes(input.toLowerCase()) ||
      hub.location.toLowerCase().includes(input.toLowerCase()),
  );

  const emptyMsg = t("empty_msg");
  const notFoundMsg = t("not_found_msg");

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <SearchForm
        onClear={() => setInput("")}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={t("search_placeholder")}
      />
      <HubsList
        hubs={filteredHubs}
        {...props}
        emptyMsg={filteredHubs.length === 0 ? notFoundMsg : emptyMsg}
      />
    </div>
  );
}
