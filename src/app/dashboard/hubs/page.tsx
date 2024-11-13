import { MainContent, Title } from "@/components/template";
import { getTranslations } from "next-intl/server";
import { SearchHubsList } from "./_components/SearchHubsList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getQueryParams } from "@/server/utils/getQueryParams";
import { getHubsAction } from "./actions";

export default async function HubsPage({
  searchParams,
}: {
  params: EmptyParams;
  searchParams: SearchParams;
}) {
  const t = await getTranslations("HubsPage");
  const { search, take } = await getQueryParams(searchParams);

  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["hubs", { search, take }],
    queryFn: ({ pageParam }) =>
      getHubsAction({ search, take, cursor: pageParam }),
    initialPageParam: "",
  });

  return (
    <MainContent className="gap-8">
      <Title className="mt-6">{t("title")}</Title>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchHubsList />
      </HydrationBoundary>
    </MainContent>
  );
}
