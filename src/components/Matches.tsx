import { matchesType } from "@/types";
import Image from "next/image";

type MatchesProps = {
  data: matchesType;
};

const Matches = ({ data }: MatchesProps) => {
  const { homeTeam, awayTeam, status, score, utcDate } = data;
  const getDate = new Date(utcDate).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="grid grid-cols-3">
      <div className="w-full flex items-center">
        <div className="w-[20px] h-[20px] relative mr-2">
          <Image
            src={homeTeam?.crest!}
            alt={homeTeam?.name!}
            fill
            className="object-cover"
          />
        </div>
        <p>{homeTeam?.name}</p>
      </div>
      <div className="px-2 m-auto flex justify-between items-center bg-slate-600 rounded-md">
        {status === "IN_PLAY" ? (
          <div className="flex flex-col items-center">
            <p className="text-green-400 text-xs">ON GOING</p>
            <p className="text-teal-400 text-sm">
              {score?.fullTime.home || 0} : {score?.fullTime.away || 0}
            </p>
          </div>
        ) : status === "FINISHED" ? (
          <p className="text-teal-400 text-sm">
            {score?.fullTime.home} : {score?.fullTime.away}
          </p>
        ) : (
          <p className="py-1 text-teal-400 text-xs">{getDate}</p>
        )}
      </div>
      <div className="w-full flex items-center justify-end">
        <p className="text-sm text-right">{awayTeam?.name}</p>
        <div className="w-[20px] h-[20px] relative mr-2">
          <Image
            src={awayTeam?.crest!}
            alt={awayTeam?.name!}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Matches;
