import { getMatches, getMatchesTomorrow, getMatchesYesterday } from "@/api";
import FilterButtons from "@/components/FilterButtons";
import Header from "@/components/Header";
import { Leagues } from "@/components/Sidebar";
import Status from "@/components/Status";

export default async function Home() {
  const getData = await getMatches();
  const getDataYesterday = await getMatchesYesterday();
  const getDataUpcoming = await getMatchesTomorrow();

  const matchesDate = getData?.matches;
  const matchesYesterday = getDataYesterday?.matches;
  const matchesTomorrow = getDataUpcoming?.matches;

  return (
    <section className="px-2 md:px-4 md:w-[700px]">
      <Header label="Matches" />
      <Status
        matchesList={matchesDate}
        matchesYesterdayList={matchesYesterday}
        matchesUpcomingList={matchesTomorrow}
      />
    </section>
  );
}
