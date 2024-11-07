"use client";
import { useTranslations } from "next-intl";
import { useInfiniteQuery } from "@tanstack/react-query";
import { HubsList, Title } from "@/components/template";
import { SearchForm } from "@/components/forms/SearchForm";

import { useQueryParams } from "@/hooks/useQueryParams";
import { getHubsAction } from "./actions";

export default function HubsPage() {
  const t = useTranslations("HubsPage");

  const { search, take } = useQueryParams();
  console.log({ search, take });

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, error } =
    useInfiniteQuery({
      queryKey: ["hubs", { search, take }],
      queryFn: async ({ pageParam }) =>
        await getHubsAction({ search, take, cursor: pageParam }),
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      initialPageParam: "",
    });

  const hubs = data?.pages.flatMap((page) => page.hubs) || [];

  console.info(data);

  return (
    <main className="flex w-full max-w-screen-lg flex-col items-center gap-8 p-2">
      <Title className="mt-6">{t("title")}</Title>
      <SearchForm placeholder={t("search_placeholder")} defaultValue={search} />
      <HubsList hubs={hubs} />
    </main>
  );
}
