import Form from "next/form";
import Link from "next/link";
import Image from "next/image";
import { ImageIcon, Plus, Search } from "lucide-react";
import { createClient } from "@/server/supabase/server";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { Title } from "@/components/template";
import { db } from "@/server/db";
import { Group } from "@prisma/client";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();

  if (!auth.user) redirect("/auth/sign/in");

  const user = await db.user.findUnique({
    where: { id: auth.user.id },
    include: { memberOf: true, ownerOf: true },
  });

  return (
    <main className="flex w-full max-w-screen-lg flex-col items-center gap-8 p-2">
      <Title className="mt-6">¡Hola {user?.name}!</Title>

      <div className="flex w-full max-w-screen-md justify-between gap-8">
        <h2 className="text-2xl font-semibold">Mis Grupos</h2>
        <SearchGroup />
        <Link
          href="/dashboard/groups/new"
          className={cn(buttonVariants({ variant: "primary" }))}
        >
          <Plus />
          <span>Crear</span>
        </Link>
      </div>

      <GroupsList
        groups={user?.ownerOf ?? []}
        emptyMsg="No has creado ningun grupo aún."
      />
    </main>
  );
}

interface GroupsListProps {
  groups: Group[];
  emptyMsg: string;
}
function GroupsList({ groups, emptyMsg }: GroupsListProps) {
  if (groups.length === 0) {
    return (
      <p className="text-center italic text-slate-500 dark:text-slate-300">
        {emptyMsg}
      </p>
    );
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4">
      {groups.map((group) => (
        <GroupCard key={group.id} {...group} />
      ))}
    </div>
  );
}

type GroupCardProps = Group;
function GroupCard({ name, image, id }: GroupCardProps) {
  const imgSize = "h-48 w-48";
  return (
    <Link
      href={`/groups/${id}`}
      className={cn("relative flex overflow-hidden rounded-lg", imgSize)}
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          height={200}
          width={200}
          className={cn("absolute inset-0 object-cover", imgSize)}
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center rounded-lg bg-slate-400/30",
            imgSize,
          )}
        >
          <ImageIcon className="h-24 w-24 text-slate-500 dark:text-slate-300" />
        </div>
      )}
      <div className="z-10 flex h-full w-full flex-col items-center text-white">
        <h3 className="w-full bg-black/60 px-1 py-2 text-center text-lg font-bold">
          {name}
        </h3>
      </div>
    </Link>
  );
}

function SearchGroup({ className }: Props) {
  return (
    <Form
      className={cn("relative w-full max-w-80", className)}
      action="/dashboard/groups"
    >
      <Input
        id="search"
        name="search"
        placeholder="Buscar un grupo..."
        type="search"
        className="rounded-full bg-card pl-8"
      />
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
    </Form>
  );
}
