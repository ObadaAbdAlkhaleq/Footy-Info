"use client";

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { standingsTable } from "@/types";
import getTeamName from "@/app/actions/getTeamName";

interface StandingTableProps {
  standings: standingsTable[];
  leagueName: string;
  leagueIcon: string;
  groupName?: string;
}

const LeagueStanding: React.FC<StandingTableProps> = ({
  standings,
  leagueName,
  groupName,
}) => {
  const lastFiveMatches = (form: string | null) => {
    let lastFive = form?.split("");
    return (
      <div className="flex">
        {lastFive?.map((matchRes) => {
          return (
            <div
              className="flex"
              key={matchRes}
            >
              <Image
                src={`/${matchRes}.svg`}
                alt={matchRes}
                width={16}
                height={16}
              />
            </div>
          );
        })}
      </div>
    );
  };
  const label = (text: string) => {
    let displayedText: string;
    if (text === "+/-") {
      displayedText = text;
      text = "Goals for / Goals Against";
    } else if (text.split(" ").length === 2) {
      displayedText = text
        .split(" ")
        .map((word) => word[0])
        .join("");
    } else if (text.length > 4) {
      displayedText = text.slice(0, 1) + text.slice(-2);
    } else if (text.length > 2) {
      displayedText = text[0];
    } else {
      displayedText = text;
    }
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button>{displayedText}</button>
          </TooltipTrigger>
          <TooltipContent>{text}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };
  return (
    <div className="overflow-x-auto border my-8 rounded-md">
      <Table className="min-w-full">
        <TableHeader>
          {groupName ? (
            <TableHead colSpan={2}>{groupName}</TableHead>
          ) : (
            <>
              <TableHead
                colSpan={1}
                className="px-1"
              >
                Pos
              </TableHead>
              <TableHead colSpan={1}>Team</TableHead>
            </>
          )}

          <TableHead className="text-center">
            {label("Matches Played")}
          </TableHead>
          <TableHead className="text-center">{label("Won")}</TableHead>
          <TableHead className="text-center">{label("Draw")}</TableHead>
          <TableHead className="text-center">{label("Lost")}</TableHead>
          <TableHead className="text-center">{label("+/-")}</TableHead>
          <TableHead className="text-center">{label("GD")}</TableHead>
          <TableHead className="text-center">{label("Points")}</TableHead>
          {standings[0].form && (
            <TableHead className="text-center">Last 5</TableHead>
          )}
          {/* <TableHead className="text-center">Last 5</TableHead> */}
        </TableHeader>
        <TableBody>
          {standings?.map((teamData) => (
            <TableRow
              key={teamData.position}
              className={`hover:cursor-pointer select-none ${
                teamData.position % 2 === 0
                  ? "bg-[rgb(57,62,77)]"
                  : "bg-[rgb(40,46,58)]"
              }`}
            >
              <TableCell className="px-3 py-2">{teamData.position}</TableCell>
              <TableCell className="line-clamp-1 py-2 flex items-center ">
                <img
                  src={teamData.team.crest}
                  alt={teamData.team.shortName}
                  className="w-6 h-6 mr-2"
                />
                <p className="mr-auto">
                  {getTeamName(teamData.team.name, teamData.team.shortName)}
                </p>
              </TableCell>
              <TableCell className="px-3 text-center py-2">
                {teamData.playedGames}
              </TableCell>
              <TableCell className="px-3 text-center py-2">
                {teamData.won}
              </TableCell>
              <TableCell className="px-3 text-center py-2">
                {teamData.draw}
              </TableCell>
              <TableCell className="px-3 text-center py-2">
                {teamData.lost}
              </TableCell>
              <TableCell className="px-3 text-center py-2 whitespace-nowrap">
                {teamData.goalsFor}-{teamData.goalsAgainst}
              </TableCell>

              <TableCell className="px-3 text-center py-2">
                {teamData.goalDifference}
              </TableCell>
              <TableCell className="px-3 text-center py-2">
                {teamData.points}
              </TableCell>
              {teamData.form && (
                <TableCell className="px-3 text-center py-2">
                  {lastFiveMatches(teamData.form)}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeagueStanding;
