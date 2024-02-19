import { apiOptions, matches } from "@/types";

const options: apiOptions = {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.API_Token,
    "Content-Type": "application/json"
  }
};



export const getMatches = async () => {
  const matchData = await fetch(`${process.env.API_URL}/matches?competitions=2014,2021,2002,2019,2015,2001`, options);
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

export const getMatchesYesterday = async () => {
  const matchData = await fetch(`${process.env.API_URL}/matches?competitions=2014,2021,2002,2019,2015,2001&date=${yesterday}`, options);
  return matchData.json();
};
export const getLeagueData = async (competitionId: number) => {
  const leagueData = await fetch(`${process.env.API_URL}/competitions/${competitionId}/standings`, options);
  return leagueData.json();
};
export const getMatchesTomorrow = async () => {
  const matchData = await fetch(`${process.env.API_URL}/matches?date=${tomorrow}`, options);
  return matchData.json();
};

export const filterLeague = async (filterData: string) => {
  const getLeague = await getMatches();
  const filterLeague: matches[] = getLeague.matches;
  const getData = filterLeague.filter((item) => item.competition.name === filterData);
  return getData;
};
