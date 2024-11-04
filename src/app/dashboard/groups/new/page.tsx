import { Title } from "@/components/template";
import NewGroupForm from "./_components/NewGroupForm";

export default async function NewGroupPage() {
  return (
    <main className="flex w-full max-w-screen-lg flex-col items-center gap-4 p-2">
      <Title>Crea un nuevo grupo</Title>
      <NewGroupForm />
    </main>
  );
}
