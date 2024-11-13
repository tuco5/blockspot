import { MainContent, Title } from "@/components/template";

export default async function HubPage({ params }: { params: Params<"id"> }) {
  const id = (await params).id;

  return (
    <MainContent>
      <Title>Hub</Title>
      <pre className="text-wrap text-sm">{id}</pre>
    </MainContent>
  );
}
