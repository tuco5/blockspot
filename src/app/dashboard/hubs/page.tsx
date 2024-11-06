import { Title } from "@/components/template";
import { SearchHub } from "../_components/SearchHub";

export default function HubsPage() {
  return (
    <main className="flex w-full max-w-screen-lg flex-col items-center gap-8 p-2">
      <Title className="mt-6">Explora</Title>
      <SearchHub />
    </main>
  );
}
