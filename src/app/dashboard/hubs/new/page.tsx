import { MainContent, Title } from "@/components/template";
import { NewHubForm } from "./form";

export default async function NewHubPage() {
  return (
    <MainContent>
      <Title className="mt-4">Nuevo Hub</Title>
      <NewHubForm />
    </MainContent>
  );
}
