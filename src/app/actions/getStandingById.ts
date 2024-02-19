import { getLeagueData } from "@/api";
import { standingsTable } from "@/types";

type params = {
  leagueid: number;
};

export default async function getStandingById(params: params) {
  try {
    const { leagueid } = params;
    const getLeague = await getLeagueData(leagueid);
    const leagueName = getLeague.competition.name;
    const leagueIcon = getLeague.competition.emblem;
    const leagueType = getLeague.competition.type;
    let leagueTable: any;
    if (getLeague.competition.type === "LEAGUE") {

      leagueTable = getLeague.standings[ 0 ].table; // Assign a value to 'standings'
    }
    if (getLeague.competition.type === "CUP") {
      leagueTable = getLeague.standings; // Assign a value to 'standings'
    }
    return { leagueName, leagueIcon, leagueTable, leagueType };
  } catch (error: any) {
    throw new Error(error);
  }

}