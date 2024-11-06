import { Title } from "@/components/template";
import { SearchGroup } from "../_components/SearchGroup";

export default function GroupsPage() {
  return (
    <main className="flex w-full max-w-screen-lg flex-col items-center gap-8 p-2">
      <Title className="mt-6">Explora</Title>
      <SearchGroup />
    </main>
  );
}
