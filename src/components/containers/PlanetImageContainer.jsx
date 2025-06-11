import React from "react";

function PlanetImageContainer({ planet, showGeology }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex h-[290px] w-[290px] items-center justify-center">
        <img
          className="h-full w-full"
          src={`/src/assets/images/planet-${planet}.svg`}
          alt="Planet Image"
          style={{
            animation: "spin-slow var(--spin-duration) linear infinite",
          }}
        />
        <img
          className={`absolute bottom-[-20%] left-[22%] h-[199px] w-[163px] ${showGeology ? "block" : "hidden"}`}
          src={`/src/assets/images/geology-${planet}.png`}
          alt=""
        />
      </div>
    </div>
  );
}

export default PlanetImageContainer;
