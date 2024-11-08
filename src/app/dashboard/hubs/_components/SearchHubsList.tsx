"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { HubsList, HubsListLoader } from "@/components/template";
import { useQueryParams } from "@/hooks/useQueryParams";
import { PulseLoader } from "react-spinners";
import { getHubsAction } from "../actions";

export function SearchHubsList() {
  const { search, take } = useQueryParams();

  const { ref, inView } = useInView();

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["hubs", { search, take }],
    queryFn: ({ pageParam }) =>
      getHubsAction({ search, take, cursor: pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: "",
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      <HubsList hubs={data?.pages.flatMap((page) => page.hubs) ?? []} />
      <div ref={ref} className="mt-auto">
        {isFetchingNextPage && (
          <PulseLoader color="hsl(var(--primary))" size={10} />
        )}
      </div>
    </>
  );
}
