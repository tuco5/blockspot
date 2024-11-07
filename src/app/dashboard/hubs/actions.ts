"use server";
import { getInfiniteHubs, getInfiniteHubsParams } from "@/server/db";
export async function getHubsAction(params: getInfiniteHubsParams) {
  return await getInfiniteHubs(params);
}
