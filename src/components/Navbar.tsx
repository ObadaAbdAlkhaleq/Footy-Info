import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 5 top-0 bg-[rgb(35,40,53)] z-20 h-fit border-b border-zinc-700 py-2">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        <Link
          href="/"
          className="flex items-center space-x-2"
        >
          <div className="relative w-[40px] h-[40px]">
            <Image
              src="/footy-info.png"
              fill
              alt="footy logo"
              className="object-cover shadow-lg"
            />
          </div>
          <span className="text-2xl font-bold none md:block">Footy Info</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
