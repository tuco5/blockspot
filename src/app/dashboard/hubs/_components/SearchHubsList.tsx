"use client";
import { use, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useQueryParams } from "@/hooks/useQueryParams";
import { PulseLoader } from "react-spinners";
import { getHubsAction } from "../actions";
import { SearchForm } from "@/components/forms";
import { HubsList } from "@/components/template";
import { useRouter } from "next/navigation";

export function SearchHubsList() {
  const t = useTranslations("HubsPage");

  const { search, take } = useQueryParams();

  const [input, setInput] = useState(search ?? "");

  const router = useRouter();

  const { ref, inView } = useInView();

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["hubs", { search, take }],
      queryFn: ({ pageParam }) =>
        getHubsAction({ search, take, cursor: pageParam }),
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      initialPageParam: "",
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage().finally();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className="flex h-full w-full flex-col items-center gap-6">
      <SearchForm
        onClear={() => {
          setInput("");
          router.push("/dashboard/hubs");
        }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={t("search_placeholder")}
      />
      <HubsList hubs={data?.pages.flatMap((page) => page.hubs) ?? []} />
      <div ref={ref} className="mt-auto">
        {isFetchingNextPage && (
          <PulseLoader color="hsl(var(--primary))" size={10} />
        )}
      </div>
    </div>
  );
}
