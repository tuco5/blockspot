export async function getQueryParams(
  searchParams: SearchParams,
): Promise<QueryParams> {
  const sp = await searchParams;

  const take = sp.take && Number.isNaN(sp.take) ? Number(sp.take) : 20;
  const search = sp.search ?? undefined;

  return { search, take };
}
