"use client";
import { use, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { PulseLoader } from "react-spinners";
import { useDebounceCallback } from "usehooks-ts";
import { useQueryParams } from "@/hooks/useQueryParams";
import { getHubsAction } from "../actions";
import { SearchForm } from "@/components/forms";
import { HubsList } from "@/components/template";
import { useRouter } from "next/navigation";

const BASE_URL = "/dashboard/hubs";

export function SearchHubsList() {
  const t = useTranslations("HubsPage");

  const { search, take } = useQueryParams();
  const [input, setInput] = useState(search ?? "");
  const router = useRouter();
  const { ref, inView } = useInView();
  const debounce = useDebounceCallback((value) => {
    router.push(`${BASE_URL}?search=${value}&take=${take}`);
  }, 200);

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
      void fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const onClear = () => {
    setInput("");
    router.push(BASE_URL);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    debounce(e.target.value);
  };

  return (
    <div className="flex h-full w-full flex-col items-center gap-6">
      <SearchForm
        onClear={onClear}
        value={input}
        onChange={onChange}
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
