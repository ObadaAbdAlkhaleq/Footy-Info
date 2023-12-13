import React from "react";
import TeamRow from "./TeamRow";

interface StandingsTableProps {
  standings: {
    position: number;
    playedGames: number;
    team: {
      crest: string;
      shortName: string;
      name: string;
    };
    // Add other necessary fields here
  }[];
}

const StandingsTable: React.FC<StandingsTableProps> = ({ standings }) => {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Team</th>
          <th className="px-4 py-2">Played</th>
          {/* Add other necessary headers */}
        </tr>
      </thead>
      <tbody>
        {standings.map((teamData) => (
          <TeamRow
            key={teamData?.position}
            team={teamData}
          />
        ))}
      </tbody>
    </table>
  );
};

export default StandingsTable;
