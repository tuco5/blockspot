import { Title } from "@/components/template";
import { SearchForm } from "@/components/forms/SearchForm";
import { getTranslations } from "next-intl/server";
import { SearchHubsList } from "./_components/SearchHubsList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getQueryParams } from "@/server/utils/getQueryParams";
import { getHubsAction } from "./actions";

export default async function HubsPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const t = await getTranslations("HubsPage");
  const { search, take } = await getQueryParams(props.searchParams);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["hubs", { search, take }],
    queryFn: () => getHubsAction({ search, take }),
  });

  return (
    <main className="flex min-h-screen w-full max-w-screen-lg flex-col items-center gap-8 p-2">
      <Title className="mt-6">{t("title")}</Title>
      <SearchForm placeholder={t("search_placeholder")} defaultValue={search} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchHubsList />
      </HydrationBoundary>
    </main>
  );
}
