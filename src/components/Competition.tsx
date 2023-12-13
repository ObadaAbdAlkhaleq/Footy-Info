import { matchesType } from "@/types";
import Image from "next/image";

type CompetitionProps = {
  data: matchesType;
};
const Competition = ({ data }: CompetitionProps) => {
  const date = new Date(data.utcDate);
  const dateS = date.toDateString();
  const { competition } = data;
  return (
    <div className="mb-4 flex justify-between items-center px-4 py-1 bg-slate-600 hover:bg-slate-700 rounded-md">
      <div className="flex space-x-4">
        <Image
          src={competition.emblem}
          alt={competition.name}
          width={20}
          height={20}
        />
        <p className="text-sm text-teal-400">{competition.name}</p>
      </div>
      <p className="text-xs md:text-sm">{dateS}</p>
    </div>
  );
};

export default Competition;
