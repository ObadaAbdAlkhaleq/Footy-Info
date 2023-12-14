type FilterButtonsProps = {
  amount: number;
  label: string;
  selected?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const FilterButtons = ({
  amount,
  label,
  selected,
  onClick,
}: FilterButtonsProps) => {
  // console.log(selected);
  return (
    <div className="flex space-x-4 mb-2 md:mb-4">
      <button
        onClick={onClick}
        className={`px-2 py-1 text-black text-xs md:text-sm rounded-md 
  ${selected ? "bg-teal-400 font-bold" : "bg-slate-500 font-medium"}`}
      >
        {capitalizeFirstLetter(label)}
      </button>
    </div>
  );
};

export default FilterButtons;
