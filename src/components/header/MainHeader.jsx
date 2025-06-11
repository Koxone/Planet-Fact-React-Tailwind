import planetsData from "/data";

function MainHeader({ onClick }) {
  const styles = () =>
    "text-xs font-[Inter] uppercase leading-6 font-bold cursor-pointer";

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
            className={`${styles()} origin-center transition-transform duration-100 ease-in-out hover:scale-150 hover:text-[var(--color-${planet.name.toLowerCase()})]`}
          >
            {planet.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainHeader;
