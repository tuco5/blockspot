"use client";
import { useState } from "react";
import { SearchForm } from "@/components/forms";
import { HubsList, type HubsListProps } from "@/components/template";
import { Hub } from "@prisma/client";

export default function DashboardHubsList({ hubs, ...props }: HubsListProps) {
  const [input, setInput] = useState("");

  const filteredHubs = hubs.filter(
    (hub: Hub) =>
      hub.name.toLowerCase().includes(input.toLowerCase()) ||
      hub.location.toLowerCase().includes(input.toLowerCase()),
  );

  const emptyMsg =
    "Un 'hub' es un espacio compartido y coordinado, funciona como punto de encuentro para los usuarios y sus actividades. Si aun no eres miembro de un 'hub', crea uno.";

  const notFoundMsg = "No encontramos resultados... Intenta de nuevo.";
  return (
    <div className="flex w-full flex-col items-center gap-6">
      <SearchForm
        onClear={() => setInput("")}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Filtra tus 'hubs' por nombre o lugar..."
      />
      <HubsList
        hubs={filteredHubs}
        {...props}
        emptyMsg={filteredHubs.length === 0 ? notFoundMsg : emptyMsg}
      />
    </div>
  );
}
