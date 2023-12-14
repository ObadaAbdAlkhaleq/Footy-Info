"use client";
import { matchesType } from "@/types";
import { useState } from "react";
import LeagueTable from "./LeagueTable";
import FilterButtons from "./FilterButtons";

type StatusProps = {
  matchesList: matchesType[];
  matchesFinishedList: matchesType[];
  matchesUpcomingList: matchesType[];
};
const Status = ({
  matchesList,
  matchesFinishedList,
  matchesUpcomingList,
}: StatusProps) => {
  const [statusMatch, setStatusMatch] = useState("TODAY");
  // console.log(matchesList);
  const possibleStatus = [
    { label: "TODAY" },
    { label: "FINISHED" },
    { label: "UPCOMING" },
  ];
  // console.log(statusMatch);
  // console.log(matchesUpcList);
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
        ) : (
          matchesList.map((data) => (
            <div key={data.id}>
              {data.status === "IN_PLAY" && <LeagueTable data={data} />}
            </div>
          ))
        )}
        {statusMatch === "TODAY"
          ? matchesList.map((data) => (
              <div key={data.id}>
                {data.status === "TIMED" && <LeagueTable data={data} />}
              </div>
            ))
          : null}
        {statusMatch === "FINISHED"
          ? matchesList.map((data) => (
              <div key={data.id}>
                {data.status === "FINISHED" && <LeagueTable data={data} />}
              </div>
            ))
          : null}
        <div>
          {statusMatch === "FINISHED" ? (
            <p className="py-2 text-teal-400 font-semibold">Yesterday</p>
          ) : null}
          {statusMatch === "FINISHED"
            ? matchesFinishedList.map((data) => (
                <div key={data.id}>
                  {data.status === "FINISHED" && <LeagueTable data={data} />}
                </div>
              ))
            : null}
        </div>
        {statusMatch === "UPCOMING" ? (
          matchesUpcomingList.length > 0 ? (
            matchesUpcomingList.map((data) => (
              <div key={data.id}>
                {data.status === "TIMED" && <LeagueTable data={data} />}
              </div>
            ))
          ) : (
            <p className="py-2 text-teal-400 font-semibold">
              No Matches Tomorrow :(
            </p>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Status;
