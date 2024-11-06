import Link from "next/link";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Group } from "@prisma/client";

interface GroupsListProps {
  groups: Group[];
  emptyMsg: string;
}
export function GroupsList({ groups, emptyMsg }: GroupsListProps) {
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
