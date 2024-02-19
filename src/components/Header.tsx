import Image from "next/image";

type HeaderProps = {
  label: string;
  img?: string;
  large?: boolean;
};
const Header = ({ label, img, large }: HeaderProps) => {
  const date = new Date();
  const dateS = date.toDateString();
  return (
    <div className="flex justify-between items-center mb-4 md:mb-2">
      <div className="flex space-x-4 items-center">
        {img && (
          <div className={`relative ${large ? "w-16 h-16" : "w-6 h-6"}`}>
            <Image
              fill
              alt={label}
              src={img}
            />
          </div>
        )}
        <p
          className={`text-lg ${
            large ? "md:text-3xl font-bold" : "md:text-2xl font-bold"
          }`}
        >
          {label}
        </p>
      </div>
      <div className="px-4 py-0 md:py-1 rounded-md text-sm bg-slate-600">
        <p>{dateS}</p>
      </div>
    </div>
  );
};

export default Header;
