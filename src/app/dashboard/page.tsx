import Form from "next/form";
import Image from "next/image";
import { createClient } from "@/server/supabase/server";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/**
 * Mock data
 */
const groups: Group[] = [
  {
    id: "1",
    name: "Provenza",
    location: "Av. Adolfo Lopez Mateos Sur #4506,Zapopan, Jalisco, Mex.",
    img: "/img/mock/mock-1.jpg",
  },
];

const mockFetchGroups = () => groups;
/**
 * Mock data
 */

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();

  // TODO: get the groups
  const groups = mockFetchGroups();

  // TODO: If user has no name, ask him to provide

  return (
    <main className="flex w-full max-w-screen-lg flex-col items-center gap-4 p-2">
      <h1 className="text-2xl font-bold -tracking-wide">Bienvenido Tudor</h1>
      <SearchGroup className="mt-4" />

      <div className="flex w-full items-center justify-center gap-6">
        <h2 className="text-xl font-bold -tracking-wide">Mis Grupos</h2>

        <Link
          href="/groups/new"
          className={cn(buttonVariants({ variant: "primary" }), "rounded-full")}
        >
          <Plus />
          <span>Crear</span>
        </Link>
      </div>

      {groups.length > 0 ? (
        <GroupsList groups={groups} />
      ) : (
        <p className="text-center italic text-slate-500 dark:text-slate-300">
          Aun no perteneces a ningun grupo...
        </p>
      )}
    </main>
  );
}

type Group = {
  id: string;
  name: string;
  location: string;
  img: string;
};
interface GroupsListProps {
  groups: Group[];
}
function GroupsList({ groups }: GroupsListProps) {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4">
      {groups.map((group) => (
        <GroupCard key={group.id} {...group} />
      ))}
    </div>
  );
}

type GroupCardProps = Group;
function GroupCard({ name, img, id }: GroupCardProps) {
  return (
    <Link
      href={`/groups/${id}`}
      className="relative flex h-40 w-40 overflow-hidden rounded-md"
    >
      <Image
        src={img}
        alt={name}
        height={128}
        width={128}
        className="absolute inset-0 h-40 w-40 object-cover"
      />
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
