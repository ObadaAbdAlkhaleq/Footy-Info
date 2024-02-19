"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type LeagueLinkProps = {
  id: number;
  name: string;
  href: string;
  emblem: string;
};
type Params = {
  leagueId: number;
};
function LeagueLink({ id, name, href, emblem }: LeagueLinkProps) {
  const route = useRouter();
  return (
    <div
      onClick={() => {
        route.push(`/league/${id}`);
      }}
      className="flex p-2 items-center hover:bg-[rgb(57,62,77)] rounded-md hover:cursor-pointer"
    >
      <div className="relative h-5 w-5">
        <Image
          src={emblem}
          alt={name}
          className="object-cover"
          fill
        />
      </div>
      <p className="text-xs ml-4 md:text-sm font-medium ">{name}</p>
    </div>
  );
}

export default LeagueLink;
