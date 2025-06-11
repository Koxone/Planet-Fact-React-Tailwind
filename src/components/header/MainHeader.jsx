import planetsData from "/data";
import MobileHeaderCard from "../cards/MobileHeaderCard";
import MobileMenuContainer from "../containers/MobileMenuContainer";
import { useState } from "react";

function MainHeader({ onClick }) {
  const [toggleMenu, setToggleMenu] = useState(true);

  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
  };

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
    <div className="relative flex items-center justify-between border-b-1 border-[#979797] px-8 py-[22px]">
      <p className="font-[Antonio] text-[28px] font-medium whitespace-nowrap uppercase">
        the planets
      </p>
      <button
        onClick={toggleHandler}
        type="button"
        className="flex cursor-pointer items-center"
      >
        <img
          className="h-[17px] w-6"
          src="/src/assets/icons/menu.png"
          alt="menu icon"
        />
      </button>
      <div className="absolute top-[100%] left-0 z-10 w-full">
        <MobileMenuContainer visible={toggleMenu} />
      </div>
      {/* <div className="invisible flex items-center gap-10">
        {planetsData.map((planet) => (
          <button
            key={planet.name.toLowerCase()}
            onClick={() => onClick(planet.name.toLowerCase())}
            className={`origin-center cursor-pointer font-[Inter] text-xs leading-6 font-bold uppercase transition-transform duration-100 ease-in-out hover:scale-150 ${hoverColors[planet.name.toLowerCase()]}`}
          >
            {planet.name}
          </button>
        ))}
      </div> */}
    </div>
  );
}

export default MainHeader;
