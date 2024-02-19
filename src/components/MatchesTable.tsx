"use client";
import { GroupedMatchesArray, matches } from "@/types";
import Competition from "./Competition";
import Matches from "./Matches";

type MatchesTableProps = {
  data: matches[];
};
const MatchesTable = ({ data }: MatchesTableProps) => {
  const groupedMatches: Record<string, GroupedMatchesArray[]> = data.reduce(
    (acc, match) => {
      const competitionKey: number | undefined = match.competition.id;
      //  @ts-ignore
      if (!acc[competitionKey]) {
        //  @ts-ignore
        acc[competitionKey] = {
          competition: { ...match.competition, utcDate: match.utcDate },
          matches: [match],
        };
      } else {
        //  @ts-ignore
        acc[competitionKey].matches.push(match);
      }

      return acc;
    },
    {},
  );

  // Convert the groupedMatches object to an array
  const groupedMatchesArray: any = Object.values(groupedMatches);
  return (
    <>
      {groupedMatchesArray.map((group: matches) => (
        <div
          key={group.competition.id}
          className="py-3 px-2 md:px-3 rounded-md flex flex-col bg-[rgb(40,46,58)] mb-2"
        >
          <Competition data={group} />

          <div className="flex flex-col gap-6">
            {/* @ts-ignore */}
            {group.matches.map((match: matches) => (
              <div key={match.id}>
                <Matches data={match} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MatchesTable;
