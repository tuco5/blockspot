import "server-only";
import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";
import { db } from ".";

export async function getMyHubs() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();

  if (!auth.user) throw new Error("Unauthorized");

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
