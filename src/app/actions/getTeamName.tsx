export default function getTeamName(teamName: string, teamShortName: string) {
  if (teamName.length > 13 || teamName.split(" ").length > 2) {
    return teamShortName;
  } else {
    return teamName;
  }
}
