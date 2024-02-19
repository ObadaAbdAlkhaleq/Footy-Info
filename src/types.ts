export type apiOptions = {
  'next': any,
  headers: {
    "X-Auth-Token": string | any,
    "Content-Type": string | any;
  };
};

export type matchesArea = {
  id?: number,
  name: string;
};

export type matchesCompetition = {
  id?: number,
  name: string,
  emblem: string,
  utcDate?: string;
};

export type matchesHomeTeam = {
  id?: number,
  name: string,
  shortName: string,
  crest: string;
};

export type matchesAwayTeam = {
  id?: number,
  name: string,
  shortName: string,
  crest: string;
};

export type scores = {
  fullTime: {
    home: number,
    away: number;
  },
  halfTime: {
    home: number,
    away: number;
  };
};

export type matches = {
  area: matchesArea,
  competition: matchesCompetition;
  id: number,
  utcDate: string,
  status: string,
  matchday?: number,
  homeTeam?: matchesHomeTeam,
  awayTeam?: matchesAwayTeam,
  score?: scores;

};

export type leagueArea = {
  id: number,
  name: string,
  code: string,
  flag: string;
};

export type leagueCompetition = {
  id: number,
  name: string,
  code: string,
  type: string,
  emblem: string;
};


export type leagueWinner = {
  id: number,
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: string;
  clubColors: string;
  venue: string;
  lastUpdated: string;
};

export type leagueSeason = {
  id: number,
  startDate: string,
  endDate: string,
  currentMatchday: number,
  winner: leagueWinner | null,
};

export type league = {
  area: leagueArea,
  competition: leagueCompetition,
  leagueSeason: leagueSeason,
  standings: standings[],
};

export type standings = {
  stage: string,
  type: string,
  group: string | null,
  table: standingsTable[];
};

export type standingsTable = {
  position: number,
  team: Team,
  playedGames: number,
  form: string | null,
  won: number,
  draw: number,
  lost: number,
  points: number,
  goalsFor: number,
  goalsAgainst: number,
  goalDifference: number;
};
export type Team = {
  id: number,
  name: string,
  shortName: string,
  tla: string,
  crest: string;
};
export type GroupedMatches = {
  id: number;
  name: string;
  emblem: string;
  matches: matches[];
};

export type GroupedMatchesArray = GroupedMatches[];