"use client";
import { matchesType } from "@/types";
import { useState } from "react";
import LeagueTable from "./LeagueTable";

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

  return (
    <div className="">
      <div className="flex space-x-4 mb-2 md:mb-4">
        <button
          className={`px-2 py-1 text-black text-xs md:text-sm rounded-md 
          ${
            statusMatch === "TODAY"
              ? "bg-teal-400 font-bold"
              : "bg-slate-500 font-medium"
          }
        `}
          onClick={() => setStatusMatch("TODAY")}
        >
          Today
        </button>
        <button
          className={`px-2 py-1 text-black text-xs md:text-sm rounded-md 
          ${
            statusMatch === "FINISHED"
              ? "bg-teal-400 font-bold"
              : "bg-slate-500 font-medium"
          }
        `}
          onClick={() => setStatusMatch("FINISHED")}
        >
          Finished
        </button>
        <button
          className={`px-2 py-1 text-black text-xs md:text-sm rounded-md 
          ${
            statusMatch === "UPCOMING"
              ? "bg-teal-400 font-bold"
              : "bg-slate-500 font-medium"
          }
        `}
          onClick={() => setStatusMatch("UPCOMING")}
        >
          Upcoming matches
        </button>
      </div>

      <div className="w-full">
        {statusMatch === "TODAY"
          ? matchesList.map((data) => (
              <div key={data.id}>
                {data.status === "IN_PLAY" && <LeagueTable data={data} />}
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
        {statusMatch === "TODAY"
          ? matchesList.map((data) => (
              <div key={data.id}>
                {data.status === "TIMED" && <LeagueTable data={data} />}
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
        {statusMatch === "UPCOMING" && matchesUpcomingList.length === 0 ? (
          <p className="py-2 text-teal-400 font-semibold">
            No Matches Tomorrow :(
          </p>
        ) : (
          matchesUpcomingList.map((data) => (
            <div key={data.id}>
              {data.status === "TIMED" && <LeagueTable data={data} />}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Status;
