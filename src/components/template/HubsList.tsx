import Link from "next/link";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { GridLoader } from "react-spinners";
import { cn } from "@/lib/utils";
import { type Hub } from "@prisma/client";

export interface HubsListProps {
  hubs: Hub[];
  emptyMsg?: string;
}
export function HubsList({ hubs, emptyMsg }: HubsListProps) {
  if (hubs.length === 0) {
    return <EmptyHubList emptyMsg={emptyMsg} />;
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-8">
      {hubs.map((hub) => (
        <HubCard key={hub.id} {...hub} />
      ))}
    </div>
  );
}

type HubCardProps = Hub;
function HubCard({ name, image, id }: HubCardProps) {
  const imgSize = "h-48 w-48";
  return (
    <Link
      href={`/hubs/${id}`}
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

function EmptyHubList({ emptyMsg }: { emptyMsg?: string }) {
  return (
    <div className="flex h-[20vh] w-full flex-col items-center justify-center">
      <p className="text-center italic text-muted-foreground">{emptyMsg}</p>
    </div>
  );
}

export function HubsListLoader() {
  return (
    <div className="flex h-[40vh] w-full flex-col items-center justify-center">
      <GridLoader size={15} color="hsl(var(--primary))" margin={20} />
    </div>
  );
}
