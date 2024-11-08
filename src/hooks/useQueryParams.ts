"use client";
import { useSearchParams } from "next/navigation";

export function useQueryParams(): QueryParams {
  const queryParams: QueryParams = { take: 20, search: "" };
  const searchParams = useSearchParams();

  queryParams.search = searchParams.get("search") ?? undefined;
  if (searchParams.get("take") && !Number.isNaN(searchParams.get("take"))) {
    queryParams.take = Number(searchParams.get("take"));
  }

  return queryParams;
}
