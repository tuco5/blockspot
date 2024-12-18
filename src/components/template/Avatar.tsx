"use client";
import {
  Avatar as AvatarRoot,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/server/supabase/client";
import { type User } from "@supabase/supabase-js";
import { LogOut, User as UserIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface AvatarProps {
  user: User;
}
export function Avatar({ user }: AvatarProps) {
  const t = useTranslations("AvatarMenu");
  const router = useRouter();

  const supabase = createClient();
  const Logout = () => {
    supabase.auth
      .signOut()
      .then(() => router.refresh())
      .catch(console.error);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <AvatarRoot className="h-8 w-8 cursor-pointer">
          <AvatarImage src={user?.user_metadata?.avatar_url as string} />
          <AvatarFallback>{user?.email?.[0]?.toUpperCase()}</AvatarFallback>
        </AvatarRoot>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel>{t("account")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            <span>{t("profile")}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive" onSelect={Logout}>
          <LogOut />
          <span>{t("logout")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
