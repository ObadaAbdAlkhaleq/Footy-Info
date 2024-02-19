import getStandingById from "@/app/actions/getStandingById";
import LeagueClient from "./LeagueClient";

type Props = {
  params: {
    leagueid: number;
  };
};
const LeaguePage = async ({ params: { leagueid } }: Props) => {
  const standing = await getStandingById({ leagueid });

  const {
    leagueName,
    leagueIcon,
    leagueType,
    leagueTable: Standings,
  } = standing;
  // handle standings when standings have 1 object
  if (leagueType === "LEAGUE") {
    return (
      <section className="px-2 md:px-4 md:w-[700px]">
        <LeagueClient
          leagueIcon={leagueIcon}
          leagueName={leagueName}
          standings={Standings}
          leagueType="LEAGUE"
        />
      </section>
    );
  }
  if (leagueType === "CUP") {
    return (
      <section className="px-2 md:px-4 md:w-[700px]">
        <LeagueClient
          leagueIcon={leagueIcon}
          leagueName={leagueName}
          standings={Standings}
          leagueType="CUP"
        />
      </section>
    );
  }
};

export default LeaguePage;
