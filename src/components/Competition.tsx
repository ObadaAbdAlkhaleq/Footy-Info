import { matches } from "@/types";
import Image from "next/image";

type CompetitionProps = {
  data: matches;
};
const Competition = ({ data }: CompetitionProps) => {
  const { competition } = data;
  let utcDate = competition.utcDate;
  let date: string = "";
  if (utcDate !== undefined) {
    date = new Date(utcDate).toDateString();
  }

  return (
    <div className="mb-4 flex justify-between items-center px-4 py-1 bg-slate-600 hover:bg-slate-700 rounded-md sticky top-16 z-10">
      <div className="flex space-x-4">
        <Image
          src={competition.emblem}
          alt={competition.name}
          width={20}
          height={20}
        />
        <p className="text-sm text-teal-400">{competition.name}</p>
      </div>
      <p className="text-xs md:text-sm">{date}</p>
    </div>
  );
};

export default Competition;
