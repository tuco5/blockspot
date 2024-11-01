import { createClient } from "@/server/supabase/server";
import {
  Avatar as AvatarRoot,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export async function Avatar() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error({ error });
  }

  if (!data.user) return null;

  // TODO: Remove this console log
  console.info({ data });

  return (
    <AvatarRoot>
      <AvatarImage src={data.user.user_metadata.avatar_url} />
      <AvatarFallback>{data.user.email?.[0]?.toUpperCase()}</AvatarFallback>
    </AvatarRoot>
  );
}
