import React from "react";

interface TeamRowProps {
  team: {
    position: number;
    playedGames: number;
    team: {
      crest: string;
      shortName: string;
      name: string;
    };
    won?: number;
    draw?: number;
    lost?: number;
    points?: number;
    goalsFor?: number;
    goalsAgainst?: number;
    goalDifference?: number;
  };
}

const TeamRow: React.FC<TeamRowProps> = ({ team }) => {
  return (
    <tr>
      <td className="border px-4 py-2">{team.position}</td>
      <td className="border px-4 py-2 flex items-center">
        <img
          src={team.team?.crest}
          alt={team.team?.shortName}
          className="w-8 h-8 mr-2"
        />
        {team.team.name}
      </td>
      <td className="border px-4 py-2">{team.playedGames}</td>
      <td className="border px-4 py-2">{team.won}</td>
      <td className="border px-4 py-2">{team.draw}</td>
      <td className="border px-4 py-2">{team.lost}</td>
      <td className="border px-4 py-2">{team.points}</td>
      <td className="border px-4 py-2">{team.goalsFor}</td>
      <td className="border px-4 py-2">{team.goalsAgainst}</td>
      <td className="border px-4 py-2">{team.goalDifference}</td>
    </tr>
  );
};

export default TeamRow;
