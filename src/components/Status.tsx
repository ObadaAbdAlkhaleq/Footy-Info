"use client";
import { matches } from "@/types";
import { useState } from "react";
import MatchesTable from "./MatchesTable";
import FilterButtons from "./FilterButtons";

type StatusProps = {
  matchesList: matches[];
  matchesYesterdayList: matches[];
  matchesUpcomingList: matches[];
};
const Status = ({
  matchesList,
  matchesYesterdayList,
  matchesUpcomingList,
}: StatusProps) => {
  const [statusMatch, setStatusMatch] = useState("TODAY");
  const possibleStatus = [
    { label: "TODAY" },
    { label: "YESTERDAY" },
    { label: "UPCOMING" },
  ];

  return (
    <div className="">
      <div className="flex space-x-4 mb-2 md:mb-4">
        {possibleStatus.map((item) => (
          <div key={item.label}>
            <FilterButtons
              onClick={() => setStatusMatch(item.label)}
              label={item.label}
              amount={possibleStatus.length}
              selected={statusMatch === item.label}
            />
          </div>
        ))}
      </div>

      <div className="w-full">
        {statusMatch === "TODAY" && matchesList.length === 0 ? (
          <p className="py-2 text-teal-400 font-semibold">
            No Matches Today :(
          </p>
        ) : statusMatch === "TODAY" ? (
          <MatchesTable data={matchesList} />
        ) : null}
        {statusMatch === "YESTERDAY" && matchesYesterdayList.length === 0 ? (
          <p className="py-2 text-teal-400 font-semibold">
            No Matches yesterday :(
          </p>
        ) : statusMatch === "YESTERDAY" ? (
          <MatchesTable data={matchesYesterdayList} />
        ) : null}
        {statusMatch === "UPCOMING" && matchesYesterdayList.length === 0 ? (
          <p className="py-2 text-teal-400 font-semibold">
            No Matches Tomorrow :(
          </p>
        ) : statusMatch === "UPCOMING" ? (
          <MatchesTable data={matchesUpcomingList} />
        ) : null}
      </div>
    </div>
  );
};

export default Status;
