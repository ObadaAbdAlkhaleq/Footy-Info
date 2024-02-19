"use client";

import FilterButtons from "@/components/FilterButtons";
import Header from "@/components/Header";
import LeagueStanding from "@/components/league/LeagueStandings";
import { standings, standingsTable } from "@/types";
import { useState } from "react";

type LeagueClientProps = {
  standings: standingsTable[];
  leagueName: string;
  leagueType: standings["type"];
  leagueIcon: string;
};

const LeagueClient = ({
  standings,
  leagueName,
  leagueType,
  leagueIcon,
}: LeagueClientProps) => {
  const [filter, setFilter] = useState("Table");

  const LeagueDetails = [{ label: "Fixtures" }, { label: "Table" }];

  const LeagueFormat = (leagueType: string) => {
    // handle when leagueType is League
    if (leagueType === "LEAGUE") {
      return (
        <div className="w-full">
          <LeagueStanding
            leagueIcon={"star"}
            leagueName={leagueName}
            standings={standings}
          />
        </div>
      );
    }
    // handle when leagueType is Cup which will have multiple groups and tables
    else if (leagueType === "CUP") {
      return (
        <div className="w-full">
          {standings.map((standing: any) => {
            const { group } = standing;
            return (
              <LeagueStanding
                groupName={group}
                key={standing.group}
                leagueIcon={"star"}
                leagueName={leagueName}
                standings={standing.table}
              />
            );
          })}
        </div>
      );
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-4">
        <Header
          label={leagueName}
          img={leagueIcon}
          large
        />
        <div className="flex space-x-4">
          {LeagueDetails.map((item) => (
            <div key={item.label}>
              <FilterButtons
                onClick={() => setFilter(item.label)}
                label={item.label}
                amount={LeagueDetails.length}
                selected={filter === item.label}
              />
            </div>
          ))}
        </div>
      </div>
      {filter === "Table" && leagueType === "LEAGUE"
        ? LeagueFormat("LEAGUE")
        : null}
      {filter === "Table" && leagueType === "CUP" ? LeagueFormat("CUP") : null}
    </div>
  );
};

export default LeagueClient;
