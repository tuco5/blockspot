import { HubsList, Title } from "@/components/template";
import { SearchForm } from "@/components/forms/SearchForm";
import { db } from "@/server/db";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function HubsPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;

  const hubs = await db.hub.findMany({
    where: {
      name: {
        contains: String(searchParams.search),
        mode: "insensitive",
      },
    },
    include: { owner: true },
  });

  return (
    <main className="flex w-full max-w-screen-lg flex-col items-center gap-8 p-2">
      <Title className="mt-6">Explora</Title>
      <SearchForm
        placeholder="Busca un hub por nombre, lugar, dueño..."
        defaultValue={searchParams.search}
      />
      <HubsList hubs={hubs} />
    </main>
  );
}
