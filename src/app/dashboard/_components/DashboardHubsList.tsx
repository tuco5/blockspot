"use client";
import { useState } from "react";
import { SearchForm } from "@/components/forms";
import { HubsList, type HubsListProps } from "@/components/template";
import { Hub } from "@prisma/client";

export default function DashboardHubsList({ hubs, ...props }: HubsListProps) {
  const [input, setInput] = useState("");

  const filterHubs = (hub: Hub) =>
    hub.name.toLowerCase().includes(input.toLowerCase()) ||
    hub.location.toLowerCase().includes(input.toLowerCase());

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <SearchForm
        onClear={() => setInput("")}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <HubsList hubs={hubs.filter(filterHubs)} {...props} />
    </div>
  );
}
