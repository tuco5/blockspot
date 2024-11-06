import { Title } from "@/components/template";
import { SearchForm } from "@/components/forms/SearchForm";

export default function HubsPage() {
  return (
    <main className="flex w-full max-w-screen-lg flex-col items-center gap-8 p-2">
      <Title className="mt-6">Explora</Title>
      <SearchForm onClear={() => {}} />
    </main>
  );
}
