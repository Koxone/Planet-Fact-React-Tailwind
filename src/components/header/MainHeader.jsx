import planetsData from "/data";

function MainHeader({ onClick }) {
  const hoverColors = {
    mercury: "hover:text-[var(--color-mercury)]",
    venus: "hover:text-[var(--color-venus)]",
    earth: "hover:text-[var(--color-earth)]",
    mars: "hover:text-[var(--color-mars)]",
    jupiter: "hover:text-[var(--color-jupiter)]",
    saturn: "hover:text-[var(--color-saturn)]",
    uranus: "hover:text-[var(--color-uranus)]",
    neptune: "hover:text-[var(--color-neptune)]",
  };
  return (
    <div className="flex items-center justify-between border-b-1 border-[#979797] px-8 py-[22px]">
      <p className="font-[Antonio] text-[28px] font-medium uppercase">
        the planets
      </p>
      <div className="flex items-center gap-10">
        {planetsData.map((planet) => (
          <button
            key={planet.name.toLowerCase()}
            onClick={() => onClick(planet.name.toLowerCase())}
            className={`origin-center cursor-pointer font-[Inter] text-xs leading-6 font-bold uppercase transition-transform duration-100 ease-in-out hover:scale-150 ${hoverColors[planet.name.toLowerCase()]}`}
          >
            {planet.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainHeader;
