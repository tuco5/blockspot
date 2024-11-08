import { Title } from "@/components/template";
import { NewHubForm } from "./form";

export default async function NewHubPage() {
  return (
    <main className="flex w-full max-w-screen-lg flex-col items-center gap-4 p-2">
      <Title>Nuevo Hub</Title>
      <NewHubForm />
    </main>
  );
}
