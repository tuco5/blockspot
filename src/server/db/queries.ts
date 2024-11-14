import "server-only";
import { createClient } from "../supabase/server";
import { db } from ".";
import { redirect } from "next/navigation";
import { UnauthorizedError } from "@/lib/errors";

export async function getMyHubs() {
  const supabase = await createClient();

  const { data: auth } = await supabase.auth.getUser();

  if (!auth.user) throw new UnauthorizedError();

  const hubs = await db.hub.findMany({
    where: {
      OR: [
        { userId: auth.user.id },
        { memebers: { some: { id: auth.user.id } } },
      ],
    },
  });

  return hubs;
}

export interface getInfiniteHubsParams extends QueryParams {
  cursor?: string;
}
export async function getInfiniteHubs({
  search,
  take = 20,
  cursor,
}: getInfiniteHubsParams) {
  const hubs = await db.hub.findMany({
    take,
    skip: cursor !== "" ? 1 : 0,
    cursor: cursor ? { id: cursor } : undefined,
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } },
        {
          owner: {
            name: { contains: search, mode: "insensitive" },
          },
        },
      ],
    },
  });
  const nextCursor = hubs[hubs.length - 1]?.id;

  return { hubs, nextCursor };
}
