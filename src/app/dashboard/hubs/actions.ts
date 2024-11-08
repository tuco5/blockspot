"use server";
import { getInfiniteHubs, type getInfiniteHubsParams } from "@/server/db";
export async function getHubsAction(params: getInfiniteHubsParams) {
  return await getInfiniteHubs(params);
}
