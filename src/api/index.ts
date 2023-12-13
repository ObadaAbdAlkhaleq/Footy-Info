import { apiOptions, matchesType } from "@/types";

const options: apiOptions = {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.API_Token,
    "Content-Type": "application/json"
  }
};



export const getMatches = async () => {
  const matchData = await fetch(`${process.env.API_URL}/matches`, options);
  return matchData.json();
};

const todayDate = new Date();
const getDateMonth = new Date(todayDate.getTime());
getDateMonth.setDate(todayDate.getDate() - 1);
const year = getDateMonth.getFullYear();
const month = String(getDateMonth.getMonth() + 1).padStart(2, '0');
const day = String(getDateMonth.getDate()).padStart(2, '0');
const nextDay = String(getDateMonth.getDate() + 2).padStart(2, '0');
const yesterday = [ year, month, day ].join('-');
const tomorrow = [ year, month, nextDay ].join('-');

export const getMatchesFinished = async () => {
  const matchData = await fetch(`${process.env.API_URL}/matches?date=${yesterday}`, options);
  return matchData.json();
};
export const getStandings = async (competitionId: number) => {
  const standingsData = await fetch(`${process.env.API_URL}/competitions/${competitionId}/standings`, options);
  return standingsData.json();
};
export const getMatchesTomorrow = async () => {
  const matchData = await fetch(`${process.env.API_URL}/matches?date=${tomorrow}`, options);
  return matchData.json();
};

export const filterLeague = async (filterData: string) => {
  const getLeague = await getMatches();
  const filterLeague: matchesType[] = getLeague.matches;
  const getData = filterLeague.filter((item) => item.competition.name === filterData);
  return getData;
};
// export const getTeams = async () => {
//   const teamsData = await fetch(`${process.env.API_URL}/competitions/2001/teams/`, options);
//   return teamsData.json();
// };
