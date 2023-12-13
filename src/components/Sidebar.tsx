import League from "./League";

const Leagues = [
  {
    id: 2021,
    name: "Premier League",
    href: "premier-league",
    emblem: "/leagues/premier_league.webp",
  },
  {
    id: 2014,
    name: "La Liga",
    href: "la-liga",
    emblem: "/leagues/laliga.svg",
  },
  {
    id: 2002,
    name: "Bundesliga",
    href: "bundesliga",
    emblem: "/leagues/bundesliga.webp",
  },
  {
    id: 2019,
    name: "Serie A",
    href: "serie-a",
    emblem: "/leagues/serie_a.webp",
  },
  {
    id: 2015,
    name: "Ligue 1",
    href: "ligue-1",
    emblem: "/leagues/ligue_1.webp",
  },
  {
    id: 2016,
    name: "Championship",
    href: "championship",
    emblem: "/leagues/championship.webp",
  },
  {
    id: 2017,
    name: "Primeira Liga",
    href: "primeira-liga",
    emblem: "/leagues/liga_portugal.webp",
  },
  {
    id: 2013,
    name: "Brasileirão Série A",
    href: "brasileirao-serie-a",
    emblem: "/leagues/brazilian_serie_a.webp",
  },
  {
    id: 2001,
    name: "UEFA Champions League",
    href: "champions-league",
    emblem: "/leagues/uefa_champions_league.png",
  },
  {
    id: 2003,
    name: "Erdivisie",
    href: "erdivisie",
    emblem: "/leagues/erdivisie.png",
  },
];

const Sidebar = () => {
  return (
    <section className="px-2 sticky top-16 md:px-4 py-2 bg-[rgb(40,46,58)] rounded-md">
      <div>
        <p className="font-senibold lg:font-bold text-base lg:text-xl m-4 text-teal-400">
          Featured Leagues
        </p>
      </div>
      {Leagues.map((league, idx) => {
        return (
          <div
            className="gap-2 hover:bg-[rgb(66, 76, 96)]"
            key={idx}
          >
            <League
              name={league.name}
              href={league.href}
              emblem={league.emblem}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Sidebar;
